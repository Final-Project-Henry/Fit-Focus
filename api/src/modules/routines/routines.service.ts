import { exercisesRepository } from '../exercises/exercises.repository';
import { usersRepository } from '../users/users.repository';
import { generateRoutine } from './routineGenerator';
import { AppError } from '../../shared/errors/AppError';

export const routinesService = {
  async getRoutine(email: string, forceNew?: string) {
    const exercises = await exercisesRepository.findAll();
    const check = await usersRepository.findUserInfo(email);

    if (!check || check.userinfo.length === 0) {
      throw new AppError('You need userInfo', 500);
    }

    if (!forceNew) {
      if (check.routines.length > 0) {
        return check.routines[0];
      }
    }

    const routine = generateRoutine(check.userinfo[0], exercises);
    await usersRepository.setRoutines(email, routine);
    return routine;
  },
};
