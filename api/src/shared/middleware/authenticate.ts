import { NextFunction, Request, Response } from 'express';
import { verifyAuthToken } from '../security/jwt';
import { usersRepository } from '../../modules/users/users.repository';
import { ForbiddenError } from '../errors/AppError';
import { asyncHandler } from './errorHandler';

export function authenticate(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const header = req.headers.authorization;
  const token = header?.split(' ')[1];

  if (!token) {
    res.status(403).json({ message: 'jwt must be provided' });
    return;
  }

  try {
    req.user = verifyAuthToken(token);
    next();
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Invalid token';
    res.status(403).json({ message });
  }
}

export const requireAdmin = asyncHandler(async (req, _res, next) => {
  const id = req.user?.id;
  if (!id) {
    throw new ForbiddenError('You are not a admin user');
  }

  const user = await usersRepository.findById(id);
  if (!user?.admin) {
    throw new ForbiddenError('You are not a admin user');
  }

  next();
});

export const requireSuperAdmin = asyncHandler(async (req, _res, next) => {
  const id = req.user?.id;
  if (!id) {
    throw new ForbiddenError('You are not a superAdmin user');
  }

  const user = await usersRepository.findById(id);
  if (!user?.superAdmin) {
    throw new ForbiddenError('You are not a superAdmin user');
  }

  next();
});
