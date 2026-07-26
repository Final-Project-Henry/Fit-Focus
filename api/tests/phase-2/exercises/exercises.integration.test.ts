import request from 'supertest';
import { setupTestDb, teardownTestDb, clearDb } from '../../helpers/db';
import { createApp } from '../../../src/app';
import { loadEnv, resetEnvCache } from '../../../src/config/env';
import { exercisesRepository } from '../../../src/modules/exercises/exercises.repository';

describe('Phase 2 — exercises module', () => {
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

  it('lists exercises publicly', async () => {
    await exercisesRepository.create({
      name: 'Push Up',
      difficulty: 'easy',
      muscles: 'upper_body',
      genre: 'both',
      premium: false,
    });

    const app = createApp();
    const res = await request(app).get('/exercises');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0].name).toBe('Push Up');
  });
});
