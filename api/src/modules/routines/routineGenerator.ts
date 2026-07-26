import { UserInfo } from '../../models/UserInfo';
import { Routine } from '../../models/Routines';

type ExerciseLike = {
  muscles?: string;
  difficulty?: string;
};

export function generateRoutine(
  info: UserInfo,
  exercises: ExerciseLike[],
  randomFn: (max: number) => number = (n) => Math.round(Math.random() * n),
): Routine {
  const alt = parseInt(String(info.height), 10) / 100;
  const imc = parseInt(String(info.weight), 10) / (alt * alt);
  const av1 = info.genre === 'man' ? 3 : 2;
  const av2 = info.age > 50 ? 1 : info.age > 35 ? 2 : 3;
  const av3 =
    info.experience === 'beginner' ? 1 : info.experience === 'medium' ? 2 : 3;
  const av4 = imc >= 25 ? 1 : imc >= 18.5 ? 2 : 3;

  const average = Math.round((av1 + av2 + av3 + av4) / 4);
  const totalAv2 = (average + (info.goal === 'gain muscles' ? 2 : 1)) / 2;
  const totalAv = totalAv2 < 1.8 ? 1 : Math.round(totalAv2);

  const abs: ExerciseLike[] = [];
  const funct: ExerciseLike[] = [];
  const low: ExerciseLike[] = [];
  const upper: ExerciseLike[] = [];
  const stretch: ExerciseLike[] = [];

  let routine: unknown[];

  if (totalAv > 1) {
    let add: ExerciseLike;
    stretch.push(
      exercises.filter((e) => e.muscles === 'stretching' && e.difficulty === 'easy')[
        randomFn(4)
      ],
    );
    stretch.push(
      exercises.filter(
        (e) => e.muscles === 'stretching' && e.difficulty === 'medium',
      )[randomFn(3)],
    );
    add = exercises.filter(
      (e) => e.muscles === 'stretching' && e.difficulty === 'medium',
    )[randomFn(3)];
    while (stretch.includes(add)) {
      add = exercises.filter(
        (e) => e.muscles === 'stretching' && e.difficulty === 'medium',
      )[randomFn(3)];
    }
    stretch.push(add);

    abs.push(
      exercises.filter((e) => e.muscles === 'abs' && e.difficulty === 'hard')[
        randomFn(1)
      ],
    );

    upper.push(
      exercises.filter(
        (e) => e.muscles === 'upper_body' && e.difficulty === 'medium',
      )[randomFn(2)],
    );
    upper.push(
      exercises.filter((e) => e.muscles === 'upper_body' && e.difficulty === 'hard')[
        randomFn(5)
      ],
    );
    add = exercises.filter(
      (e) => e.muscles === 'upper_body' && e.difficulty === 'hard',
    )[randomFn(5)];
    while (upper.includes(add)) {
      add = exercises.filter(
        (e) => e.muscles === 'upper_body' && e.difficulty === 'hard',
      )[randomFn(5)];
    }
    upper.push(add);
    add = exercises.filter(
      (e) => e.muscles === 'upper_body' && e.difficulty === 'hard',
    )[randomFn(5)];
    while (upper.includes(add)) {
      add = exercises.filter(
        (e) => e.muscles === 'upper_body' && e.difficulty === 'hard',
      )[randomFn(5)];
    }
    upper.push(add);

    low.push(
      exercises.filter(
        (e) => e.muscles === 'lower_body' && e.difficulty === 'medium',
      )[randomFn(9)],
    );
    add = exercises.filter(
      (e) => e.muscles === 'lower_body' && e.difficulty === 'medium',
    )[randomFn(9)];
    while (low.includes(add)) {
      add = exercises.filter(
        (e) => e.muscles === 'lower_body' && e.difficulty === 'medium',
      )[randomFn(9)];
    }
    low.push(add);
    low.push(
      exercises.filter((e) => e.muscles === 'lower_body' && e.difficulty === 'hard')[
        randomFn(5)
      ],
    );
    add = exercises.filter(
      (e) => e.muscles === 'lower_body' && e.difficulty === 'hard',
    )[randomFn(5)];
    while (low.includes(add)) {
      add = exercises.filter(
        (e) => e.muscles === 'lower_body' && e.difficulty === 'hard',
      )[randomFn(5)];
    }
    low.push(add);

    funct.push(
      exercises.filter(
        (e) => e.muscles === 'functional' && e.difficulty === 'easy',
      )[randomFn(7)],
    );
    funct.push(
      exercises.filter(
        (e) => e.muscles === 'functional' && e.difficulty === 'medium',
      )[randomFn(3)],
    );
    funct.push(
      exercises.filter(
        (e) => e.muscles === 'functional' && e.difficulty === 'hard',
      )[randomFn(4)],
    );

    routine = [
      { order: 1, exerc: stretch[0], time: 30 },
      { exer: 'rest', time: 15 },
      { order: 2, exerc: stretch[1], time: 30 },
      { exer: 'rest', time: 15 },
      { order: 3, exerc: stretch[2], time: 30 },
      { exer: 'rest', time: 15 },
      { order: 4, exerc: upper[0], time: 30 },
      { exer: 'rest', time: 15 },
      { order: 5, exerc: low[0], time: 120 },
      { exer: 'rest', time: 30 },
      { order: 6, exerc: abs[0], time: 120 },
      { exer: 'rest', time: 30 },
      { order: 7, exerc: low[1], time: 120 },
      { exer: 'rest', time: 30 },
      { order: 8, exerc: upper[1], time: 120 },
      { exer: 'rest', time: 30 },
      { order: 9, exerc: low[2], time: 120 },
      { exer: 'rest', time: 30 },
      { order: 10, exerc: upper[2], time: 120 },
      { exer: 'rest', time: 30 },
      { order: 11, exerc: low[3], time: 120 },
      { exer: 'rest', time: 30 },
      { order: 12, exerc: upper[3], time: 120 },
      { exer: 'rest', time: 30 },
      { order: 13, exerc: funct[0], time: 30 },
      { exer: 'rest', time: 15 },
      { order: 14, exerc: funct[1], time: 30 },
      { exer: 'rest', time: 15 },
      { order: 15, exerc: funct[2], time: 30 },
    ];
  } else {
    let add: ExerciseLike;
    stretch.push(
      exercises.filter((e) => e.muscles === 'stretching' && e.difficulty === 'easy')[
        randomFn(4)
      ],
    );
    add = exercises.filter(
      (e) => e.muscles === 'stretching' && e.difficulty === 'easy',
    )[randomFn(4)];
    while (stretch.includes(add)) {
      add = exercises.filter(
        (e) => e.muscles === 'stretching' && e.difficulty === 'easy',
      )[randomFn(4)];
    }
    stretch.push(add);
    stretch.push(
      exercises.filter(
        (e) => e.muscles === 'stretching' && e.difficulty === 'medium',
      )[randomFn(3)],
    );

    abs.push(
      exercises.filter((e) => e.muscles === 'abs' && e.difficulty === 'easy')[
        randomFn(1)
      ],
    );
    abs.push(
      exercises.filter((e) => e.muscles === 'abs' && e.difficulty === 'medium')[0],
    );

    upper.push(
      exercises.filter(
        (e) => e.muscles === 'upper_body' && e.difficulty === 'easy',
      )[randomFn(6)],
    );
    upper.push(
      exercises.filter(
        (e) => e.muscles === 'upper_body' && e.difficulty === 'medium',
      )[0],
    );
    upper.push(
      exercises.filter(
        (e) => e.muscles === 'upper_body' && e.difficulty === 'medium',
      )[1],
    );

    low.push(
      exercises.filter(
        (e) => e.muscles === 'lower_body' && e.difficulty === 'easy',
      )[randomFn(2)],
    );
    add = exercises.filter(
      (e) => e.muscles === 'lower_body' && e.difficulty === 'medium',
    )[randomFn(9)];
    while (low.includes(add)) {
      add = exercises.filter(
        (e) => e.muscles === 'lower_body' && e.difficulty === 'medium',
      )[randomFn(9)];
    }
    low.push(add);
    add = exercises.filter(
      (e) => e.muscles === 'lower_body' && e.difficulty === 'medium',
    )[randomFn(9)];
    while (low.includes(add)) {
      add = exercises.filter(
        (e) => e.muscles === 'lower_body' && e.difficulty === 'medium',
      )[randomFn(9)];
    }
    low.push(add);
    while (low.includes(add)) {
      add = exercises.filter(
        (e) => e.muscles === 'lower_body' && e.difficulty === 'medium',
      )[randomFn(9)];
    }
    low.push(add);

    funct.push(
      exercises.filter(
        (e) => e.muscles === 'functional' && e.difficulty === 'easy',
      )[randomFn(7)],
    );
    add = exercises.filter(
      (e) => e.muscles === 'functional' && e.difficulty === 'easy',
    )[randomFn(7)];
    while (funct.includes(add)) {
      add = exercises.filter(
        (e) => e.muscles === 'functional' && e.difficulty === 'easy',
      )[randomFn(7)];
    }
    funct.push(add);
    funct.push(
      exercises.filter(
        (e) => e.muscles === 'functional' && e.difficulty === 'medium',
      )[randomFn(3)],
    );

    routine = [
      { order: 1, exerc: stretch[0], time: 30 },
      { exer: 'rest', time: 15 },
      { order: 2, exerc: stretch[1], time: 30 },
      { exer: 'rest', time: 15 },
      { order: 3, exerc: stretch[2], time: 30 },
      { exer: 'rest', time: 15 },
      { order: 4, exerc: abs[0], time: 30 },
      { exer: 'rest', time: 15 },
      { order: 5, exerc: upper[0], time: 90 },
      { exer: 'rest', time: 30 },
      { order: 6, exerc: low[0], time: 90 },
      { exer: 'rest', time: 30 },
      { order: 7, exerc: abs[1], time: 90 },
      { exer: 'rest', time: 30 },
      { order: 8, exerc: low[1], time: 90 },
      { exer: 'rest', time: 30 },
      { order: 9, exerc: upper[1], time: 90 },
      { exer: 'rest', time: 30 },
      { order: 10, exerc: low[2], time: 90 },
      { exer: 'rest', time: 30 },
      { order: 11, exerc: upper[2], time: 90 },
      { exer: 'rest', time: 30 },
      { order: 12, exerc: low[3], time: 90 },
      { exer: 'rest', time: 30 },
      { order: 13, exerc: funct[0], time: 30 },
      { exer: 'rest', time: 15 },
      { order: 14, exerc: funct[1], time: 30 },
      { exer: 'rest', time: 15 },
      { order: 15, exerc: funct[2], time: 30 },
    ];
  }

  return {
    exercises: routine,
    difficulty: totalAv === 3 ? 'hard' : totalAv === 2 ? 'medium' : 'easy',
    reps: totalAv > 1 ? 'long' : 'short',
    type: 'mix',
  };
}
