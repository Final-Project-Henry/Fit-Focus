import request from 'supertest';
import express from 'express';
import {
  authenticate,
  requireAdmin,
} from '../../src/shared/middleware/authenticate';
import { errorHandler } from '../../src/shared/middleware/errorHandler';
import { signAuthToken } from '../../src/shared/security/jwt';
import { loadEnv, resetEnvCache } from '../../src/config/env';
import { setupTestDb, teardownTestDb, clearDb } from '../helpers/db';
import { usersRepository } from '../../src/modules/users/users.repository';
import { hashPassword } from '../../src/shared/security/password';

function buildAuthApp() {
  const app = express();
  app.get('/protected', authenticate, (req, res) => {
    res.status(200).json(req.user);
  });
  app.get('/admin-only', authenticate, requireAdmin, (_req, res) => {
    res.status(200).send('ok');
  });
  app.use(errorHandler);
  return app;
}

describe('Phase 1 — auth middleware', () => {
  beforeAll(async () => {
    resetEnvCache();
    loadEnv({ SECRET: 'phase1-secret' });
    await setupTestDb();
  });

  afterAll(async () => {
    await teardownTestDb();
  });

  beforeEach(async () => {
    await clearDb();
  });

  it('returns 403 when token is missing', async () => {
    const res = await request(buildAuthApp()).get('/protected');
    expect(res.status).toBe(403);
  });

  it('returns 403 when token is invalid', async () => {
    const res = await request(buildAuthApp())
      .get('/protected')
      .set('Authorization', 'Bearer bad.token.value');
    expect(res.status).toBe(403);
  });

  it('attaches req.user for a valid token', async () => {
    const token = signAuthToken({
      email: 'user@test.com',
      name: 'User',
      id: 'abc123',
    });
    const res = await request(buildAuthApp())
      .get('/protected')
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body.email).toBe('user@test.com');
  });

  it('returns 403 for non-admin on requireAdmin', async () => {
    const user = await usersRepository.create({
      name: 'Normal',
      email: 'normal@test.com',
      password: await hashPassword('abc123'),
      admin: false,
    });

    const token = signAuthToken({
      email: user.email,
      name: user.name,
      id: String(user._id),
    });

    const res = await request(buildAuthApp())
      .get('/admin-only')
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).toBe(403);
  });
});
