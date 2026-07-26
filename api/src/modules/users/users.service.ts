import { usersRepository } from './users.repository';
import {
  ForbiddenError,
  ValidationError,
} from '../../shared/errors/AppError';
import {
  feedbackCommentSchema,
  userInfoSchema,
} from '../../shared/validation/schemas';
import { comparePassword, hashPassword } from '../../shared/security/password';
import { createDeleteMail, sendMail } from '../../shared/mail/mailer';

const CHANGE_INFO_WHITELIST = new Set([
  'name',
  'email',
  'password',
  'avatar',
]);

export const usersService = {
  async updateUserInfo(email: string, input: unknown) {
    const parsed = userInfoSchema.safeParse(input);
    if (!parsed.success) {
      throw new ValidationError('Invalid info');
    }

    await usersRepository.setUserInfo(email, parsed.data);
    return 'User updated';
  },

  async submitFeedback(email: string, comment: string) {
    const parsed = feedbackCommentSchema.safeParse(comment);
    if (!parsed.success) {
      throw new ForbiddenError('Comment must contain at least 10 characters');
    }

    await usersRepository.updateByEmail(email, { feedback: comment });
    return 'Feedback sent';
  },

  async changeInfo(id: string, body: Record<string, unknown>) {
    const modification: Record<string, unknown> = {};

    for (const key of Object.keys(body)) {
      if (!CHANGE_INFO_WHITELIST.has(key) || body[key] === undefined) {
        continue;
      }

      if (key === 'password') {
        modification.password = await hashPassword(String(body[key]));
      } else {
        modification[key] = body[key];
      }
    }

    await usersRepository.updateManyById(id, modification);
    return 'Info changed succesfully';
  },

  async deleteAccount(id: string, email: string) {
    await usersRepository.updateById(id, { status: 'desactivated' });
    await sendMail(createDeleteMail(email));
    return 'Deleted succesfully';
  },

  async addFavorite(id: string, exerciseId: string) {
    const user = await usersRepository.findById(id);
    if (!user) {
      throw new ValidationError('User not found');
    }

    await usersRepository.addFavorite(id, exerciseId);
    return 'Exercise added to fav';
  },

  async getProfile(id: string) {
    const user = await usersRepository.findById(id);
    if (!user) {
      throw new ValidationError('Token invalido');
    }
    return user;
  },

  async validateToken(id: string) {
    const user = await usersRepository.findById(id);
    if (!user) {
      throw new ValidationError('Token invalido');
    }
    return 'perfecto';
  },

  // Exported for tests that need password helpers through the module surface
  comparePassword,
};
