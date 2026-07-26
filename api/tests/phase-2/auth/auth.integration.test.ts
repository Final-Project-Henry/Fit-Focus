import request from 'supertest';
import { setupTestDb, teardownTestDb, clearDb } from '../../helpers/db';
import { createApp } from '../../../src/app';
import { loadEnv, resetEnvCache } from '../../../src/config/env';
import { usersRepository } from '../../../src/modules/users/users.repository';
import { hashPassword } from '../../../src/shared/security/password';

jest.mock('../../../src/shared/mail/mailer', () => {
  const actual = jest.requireActual('../../../src/shared/mail/mailer');
  return {
    ...actual,
    sendMail: jest.fn(async () => undefined),
  };
});

describe('Phase 2 — auth module', () => {
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

  it('registers and logs in a user returning a JWT', async () => {
    const app = createApp();

    const register = await request(app).post('/register').send({
      name: 'Martin',
      email: 'martin@test.com',
      password: 'abc123',
    });
    expect(register.status).toBe(201);
    expect(register.body.email).toBe('martin@test.com');

    const login = await request(app).post('/login').send({
      email: 'martin@test.com',
      password: 'abc123',
    });
    expect(login.status).toBe(200);
    expect(typeof login.body).toBe('string');
  });

  it('returns 400 for invalid login payload', async () => {
    const app = createApp();
    const res = await request(app).post('/login').send({
      email: 'bad',
      password: 'abc123',
    });
    expect(res.status).toBe(400);
  });

  it('returns 401 for desactivated users', async () => {
    await usersRepository.create({
      name: 'Disabled',
      email: 'disabled@test.com',
      password: await hashPassword('abc123'),
      status: 'desactivated',
    });

    const app = createApp();
    const res = await request(app).post('/login').send({
      email: 'disabled@test.com',
      password: 'abc123',
    });
    expect(res.status).toBe(401);
    expect(res.text).toContain('desactivated');
  });

  it('returns 409 when registering an existing email', async () => {
    const app = createApp();
    await request(app).post('/register').send({
      name: 'Martin',
      email: 'dup@test.com',
      password: 'abc123',
    });

    const res = await request(app).post('/register').send({
      name: 'Martin',
      email: 'dup@test.com',
      password: 'abc123',
    });
    expect(res.status).toBe(409);
  });
});
