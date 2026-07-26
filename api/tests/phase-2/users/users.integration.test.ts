import request from 'supertest';
import { setupTestDb, teardownTestDb, clearDb } from '../../helpers/db';
import { createApp } from '../../../src/app';
import { loadEnv, resetEnvCache } from '../../../src/config/env';
import { usersRepository } from '../../../src/modules/users/users.repository';
import { hashPassword } from '../../../src/shared/security/password';
import { signAuthToken } from '../../../src/shared/security/jwt';

jest.mock('../../../src/shared/mail/mailer', () => {
  const actual = jest.requireActual('../../../src/shared/mail/mailer');
  return {
    ...actual,
    sendMail: jest.fn(async () => undefined),
  };
});

describe('Phase 2 — users module', () => {
  beforeAll(async () => {
    resetEnvCache();
    loadEnv({ SECRET: 'phase2-secret' });
    await setupTestDb();
  });

  afterAll(async () => {
    await teardownTestDb();
  });

  beforeEach(async () => {
    await clearDb();
  });

  it('rejects /auth/profile without token', async () => {
    const app = createApp();
    const res = await request(app).get('/auth/profile');
    expect(res.status).toBe(403);
  });

  it('returns profile with valid token', async () => {
    const user = await usersRepository.create({
      name: 'Profile',
      email: 'profile@test.com',
      password: await hashPassword('abc123'),
    });

    const token = signAuthToken({
      email: user.email,
      name: user.name,
      id: String(user._id),
      avatar: user.avatar,
    });

    const app = createApp();
    const res = await request(app)
      .get('/auth/profile')
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).toBe(200);
    expect(res.body.email).toBe('profile@test.com');
  });
});
