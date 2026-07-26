import { AuthTokenPayload } from '../shared/security/jwt';

declare global {
  namespace Express {
    interface Request {
      user?: AuthTokenPayload;
    }
  }
}

export {};
