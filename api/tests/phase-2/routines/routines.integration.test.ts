import request from 'supertest';
import { setupTestDb, teardownTestDb, clearDb } from '../../helpers/db';
import { createApp } from '../../../src/app';
import { loadEnv, resetEnvCache } from '../../../src/config/env';
import { usersRepository } from '../../../src/modules/users/users.repository';
import { exercisesRepository } from '../../../src/modules/exercises/exercises.repository';
import { hashPassword } from '../../../src/shared/security/password';
import { signAuthToken } from '../../../src/shared/security/jwt';

async function seedExercises() {
  const muscles = [
    'stretching',
    'abs',
    'upper_body',
    'lower_body',
    'functional',
  ] as const;
  const difficulties = ['easy', 'medium', 'hard'] as const;
  const docs = [];
  let n = 0;

  for (const muscle of muscles) {
    for (const difficulty of difficulties) {
      for (let i = 0; i < 10; i++) {
        docs.push({
          name: `${muscle}-${difficulty}-${n++}`,
          muscles: muscle,
          difficulty,
          genre: 'both',
          premium: false,
        });
      }
    }
  }

  await exercisesRepository.insertMany(docs);
}

describe('Phase 2 — routines module', () => {
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

  it('updates userinfo and generates a routine', async () => {
    await seedExercises();
    const user = await usersRepository.create({
      name: 'Routines',
      email: 'routine@test.com',
      password: await hashPassword('abc123'),
    });

    const token = signAuthToken({
      email: user.email,
      name: user.name,
      id: String(user._id),
    });

    const app = createApp();

    const infoRes = await request(app)
      .put('/auth/userinfo')
      .set('Authorization', `Bearer ${token}`)
      .send({
        genre: 'man',
        age: 28,
        weight: 78,
        height: 180,
        goal: 'gain muscles',
        experience: 'medium',
        equipment: false,
      });
    expect(infoRes.status).toBe(200);

    const routineRes = await request(app)
      .get('/auth/getroutine?get=true')
      .set('Authorization', `Bearer ${token}`);

    expect(routineRes.status).toBe(200);
    expect(routineRes.body.exercises).toBeDefined();
    expect(routineRes.body.difficulty).toBeDefined();
  });
});
