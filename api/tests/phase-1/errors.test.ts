import {
  AppError,
  ConflictError,
  ForbiddenError,
  NotFoundError,
  UnauthorizedError,
  ValidationError,
  isAppError,
} from '../../src/shared/errors/AppError';
import { errorHandler } from '../../src/shared/middleware/errorHandler';
import { Request, Response } from 'express';

function mockRes() {
  const res = {
    statusCode: 0,
    body: undefined as unknown,
    status(code: number) {
      this.statusCode = code;
      return this;
    },
    send(payload: unknown) {
      this.body = payload;
      return this;
    },
  };
  return res as unknown as Response & { statusCode: number; body: unknown };
}

describe('Phase 1 — AppError mapping', () => {
  it('maps typed errors to expected HTTP statuses', () => {
    expect(new ValidationError().statusCode).toBe(400);
    expect(new UnauthorizedError().statusCode).toBe(401);
    expect(new ForbiddenError().statusCode).toBe(403);
    expect(new NotFoundError().statusCode).toBe(404);
    expect(new ConflictError().statusCode).toBe(409);
  });

  it('errorHandler sends AppError status and message', () => {
    const res = mockRes();
    errorHandler(
      new AppError('boom', 418),
      {} as Request,
      res,
      (() => undefined) as never,
    );
    expect(res.statusCode).toBe(418);
    expect(res.body).toBe('boom');
  });

  it('errorHandler falls back to 500 for unknown errors', () => {
    const res = mockRes();
    errorHandler(new Error('fail'), {} as Request, res, (() => undefined) as never);
    expect(res.statusCode).toBe(500);
    expect(res.body).toBe('fail');
  });

  it('isAppError detects AppError instances', () => {
    expect(isAppError(new ValidationError())).toBe(true);
    expect(isAppError(new Error('x'))).toBe(false);
  });
});
