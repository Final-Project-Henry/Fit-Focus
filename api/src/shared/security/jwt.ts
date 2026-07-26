import jwt, { SignOptions } from 'jsonwebtoken';
import { getEnv } from '../../config/env';

export type AuthTokenPayload = {
  email: string;
  name: string;
  id: string;
  avatar?: string;
};

export function signAuthToken(
  payload: AuthTokenPayload,
  expiresIn: SignOptions['expiresIn'] = '12h',
): string {
  return jwt.sign(payload, getEnv().SECRET, { expiresIn });
}

export function signResetToken(
  payload: Pick<AuthTokenPayload, 'name' | 'id'>,
  expiresIn: SignOptions['expiresIn'] = '10m',
): string {
  return jwt.sign(payload, getEnv().SECRET, { expiresIn });
}

export function verifyAuthToken(token: string): AuthTokenPayload {
  return jwt.verify(token, getEnv().SECRET) as AuthTokenPayload;
}

export function decodeToken<T = Record<string, unknown>>(token: string): T | null {
  return jwt.decode(token) as T | null;
}
