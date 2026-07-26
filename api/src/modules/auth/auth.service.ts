import { usersRepository } from '../users/users.repository';
import {
  ConflictError,
  ForbiddenError,
  NotFoundError,
  UnauthorizedError,
  ValidationError,
} from '../../shared/errors/AppError';
import {
  comparePassword,
  hashPassword,
  isValidPasswordFormat,
} from '../../shared/security/password';
import {
  decodeToken,
  signAuthToken,
  signResetToken,
} from '../../shared/security/jwt';
import {
  createNewPasswordMail,
  createWelcomeMail,
  sendMail,
} from '../../shared/mail/mailer';
import { loginSchema, registerSchema } from '../../shared/validation/schemas';

export const authService = {
  async register(input: unknown) {
    const parsed = registerSchema.safeParse(input);
    if (!parsed.success) {
      throw new ValidationError('Invalid parameters');
    }

    const { name, email, password } = parsed.data;
    const oldUser = await usersRepository.findByEmail(email);
    if (oldUser) {
      throw new ConflictError('User already exists');
    }

    if (!isValidPasswordFormat(password)) {
      throw new ForbiddenError(
        'Password must contain numbers and letter, between 6 and 10 characters',
      );
    }

    const hash = await hashPassword(password);
    const user = await usersRepository.create({
      name,
      email,
      password: hash,
    });

    await sendMail(createWelcomeMail(email));
    return user;
  },

  async login(input: unknown) {
    const parsed = loginSchema.safeParse(input);
    if (!parsed.success) {
      throw new ValidationError('Invalid parameters');
    }

    const { email, password } = parsed.data;
    const user = await usersRepository.findByEmail(email);
    if (!user) {
      throw new NotFoundError('User not found');
    }
    if (user.status === 'desactivated') {
      throw new UnauthorizedError('User desactivated');
    }

    const isValid = await comparePassword(password, user.password);
    if (!isValid) {
      throw new UnauthorizedError('Password not valid');
    }

    return signAuthToken({
      email: user.email,
      name: user.name,
      id: String(user._id),
      avatar: user.avatar,
    });
  },

  async activateAccount(email: string, password: string, requirePassword = true) {
    const user = await usersRepository.findByEmail(email);
    if (!user) {
      throw new NotFoundError('User not found');
    }

    if (requirePassword) {
      const checked = await comparePassword(password, user.password);
      if (!checked) {
        throw new ForbiddenError('Password not valid');
      }
    }

    if (user.status === 'activated') {
      throw new ValidationError('User already activated');
    }

    user.status = 'activated';
    await user.save();
    return 'Account activated';
  },

  async requestNewPassword(email: string) {
    const user = await usersRepository.findByEmail(email);
    if (!user) {
      throw new Error('An error has ocurred');
    }

    const token = signResetToken({ name: user.name, id: String(user._id) });
    const link = `http://localhost:3000/NewPassword/${token}`;
    await sendMail(createNewPasswordMail(email, link));
    return 'Email sent';
  },

  async googleLogin(code: string) {
    const data = decodeToken<{
      email: string;
      name: string;
      picture?: string;
      sub: string;
    }>(code);

    if (!data?.email || !data.name || !data.sub) {
      throw new ValidationError('Invalid google token');
    }

    let user = await usersRepository.findByEmail(data.email);
    if (user?.status === 'desactivated') {
      throw new UnauthorizedError('User google desactivated');
    }

    if (!user) {
      const hash = await hashPassword(data.sub);
      user = await usersRepository.create({
        email: data.email,
        name: data.name,
        avatar: data.picture,
        password: hash,
      });
      await sendMail(createWelcomeMail(data.email));
    }

    return signAuthToken({
      email: user.email,
      name: user.name,
      id: String(user._id),
      avatar: user.avatar,
    });
  },
};
