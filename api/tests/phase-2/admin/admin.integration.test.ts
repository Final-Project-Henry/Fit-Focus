import request from 'supertest';
import { setupTestDb, teardownTestDb, clearDb } from '../../helpers/db';
import { createApp } from '../../../src/app';
import { loadEnv, resetEnvCache } from '../../../src/config/env';
import { usersRepository } from '../../../src/modules/users/users.repository';
import { hashPassword } from '../../../src/shared/security/password';
import { signAuthToken } from '../../../src/shared/security/jwt';

describe('Phase 2 — admin module', () => {
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

  it('returns 403 for non-admin users', async () => {
    const user = await usersRepository.create({
      name: 'NoAdmin',
      email: 'noadmin@test.com',
      password: await hashPassword('abc123'),
      admin: false,
    });

    const token = signAuthToken({
      email: user.email,
      name: user.name,
      id: String(user._id),
    });

    const app = createApp();
    const res = await request(app)
      .get('/admin/allusers')
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).toBe(403);
  });

  it('allows admin to list users', async () => {
    const admin = await usersRepository.create({
      name: 'Admin',
      email: 'admin@test.com',
      password: await hashPassword('abc123'),
      admin: true,
    });

    const token = signAuthToken({
      email: admin.email,
      name: admin.name,
      id: String(admin._id),
    });

    const app = createApp();
    const res = await request(app)
      .get('/admin/allusers')
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.some((u: { email: string }) => u.email === 'admin@test.com')).toBe(
      true,
    );
  });
});
