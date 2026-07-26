import request from 'supertest';
import { setupTestDb, teardownTestDb, clearDb } from '../../helpers/db';
import { createApp } from '../../../src/app';
import { loadEnv, resetEnvCache } from '../../../src/config/env';
import { usersRepository } from '../../../src/modules/users/users.repository';
import { hashPassword } from '../../../src/shared/security/password';
import { signAuthToken } from '../../../src/shared/security/jwt';

describe('Phase 2 — comments module', () => {
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

  it('allows an authenticated user to ask a question', async () => {
    const user = await usersRepository.create({
      name: 'Asker',
      email: 'ask@test.com',
      password: await hashPassword('abc123'),
    });

    const token = signAuthToken({
      email: user.email,
      name: user.name,
      id: String(user._id),
    });

    const app = createApp();
    const res = await request(app)
      .post('/auth/ask')
      .set('Authorization', `Bearer ${token}`)
      .send({ asunto: 'Help', comment: 'How do I start?' });

    expect(res.status).toBe(201);
    expect(res.text).toContain('Question sent');
  });
});
