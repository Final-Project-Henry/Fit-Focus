import { NextFunction, Request, Response } from 'express';
import { isAppError } from '../errors/AppError';

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  if (isAppError(err)) {
    res.status(err.statusCode).send(err.message);
    return;
  }

  const message = err instanceof Error ? err.message : 'Internal server error';
  res.status(500).send(message);
}

export function asyncHandler<
  T extends (req: Request, res: Response, next: NextFunction) => Promise<unknown>,
>(fn: T) {
  return (req: Request, res: Response, next: NextFunction): void => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}
