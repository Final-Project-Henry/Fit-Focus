import { generateRoutine } from '../../../src/modules/routines/routineGenerator';
import { UserInfo } from '../../../src/models/UserInfo';

function buildExercises() {
  const exercises = [];
  for (let i = 0; i < 10; i++) {
    exercises.push(
      { muscles: 'stretching', difficulty: 'easy', name: `s-e-${i}` },
      { muscles: 'stretching', difficulty: 'medium', name: `s-m-${i}` },
      { muscles: 'abs', difficulty: 'easy', name: `a-e-${i}` },
      { muscles: 'abs', difficulty: 'medium', name: `a-m-${i}` },
      { muscles: 'abs', difficulty: 'hard', name: `a-h-${i}` },
      { muscles: 'upper_body', difficulty: 'easy', name: `u-e-${i}` },
      { muscles: 'upper_body', difficulty: 'medium', name: `u-m-${i}` },
      { muscles: 'upper_body', difficulty: 'hard', name: `u-h-${i}` },
      { muscles: 'lower_body', difficulty: 'easy', name: `l-e-${i}` },
      { muscles: 'lower_body', difficulty: 'medium', name: `l-m-${i}` },
      { muscles: 'lower_body', difficulty: 'hard', name: `l-h-${i}` },
      { muscles: 'functional', difficulty: 'easy', name: `f-e-${i}` },
      { muscles: 'functional', difficulty: 'medium', name: `f-m-${i}` },
      { muscles: 'functional', difficulty: 'hard', name: `f-h-${i}` },
    );
  }
  return exercises;
}

function cyclingRandom() {
  let n = 0;
  return (max: number) => {
    if (max <= 0) return 0;
    const value = n % (max + 1);
    n += 1;
    return value;
  };
}

describe('Phase 2 — routineGenerator', () => {
  const baseInfo: UserInfo = {
    genre: 'man',
    age: 25,
    weight: 75,
    height: 180,
    goal: 'gain muscles',
    experience: 'medium',
    equipment: false,
  };

  it('returns a routine with expected shape for advanced profile', () => {
    const routine = generateRoutine(baseInfo, buildExercises(), cyclingRandom());
    expect(routine.type).toBe('mix');
    expect(['easy', 'medium', 'hard']).toContain(routine.difficulty);
    expect(['short', 'long']).toContain(routine.reps);
    expect(Array.isArray(routine.exercises)).toBe(true);
    expect(routine.exercises.length).toBeGreaterThan(10);
  });

  it('returns easier routine for older beginner with high IMC', () => {
    const routine = generateRoutine(
      {
        ...baseInfo,
        age: 55,
        weight: 100,
        experience: 'beginner',
        goal: 'lower fat percentage',
        genre: 'woman',
      },
      buildExercises(),
      cyclingRandom(),
    );
    expect(routine.difficulty).toBe('easy');
    expect(routine.reps).toBe('short');
  });
});
