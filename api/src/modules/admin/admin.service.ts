import { usersRepository } from '../users/users.repository';
import { exercisesRepository } from '../exercises/exercises.repository';
import { NotFoundError } from '../../shared/errors/AppError';
import { ExerciseDocument } from '../../models/Exercise';

function pick<T>(value: T | undefined | null, fallback: T): T {
  return value ? value : fallback;
}

export const adminService = {
  async listUsers() {
    return usersRepository.findAll();
  },

  async deleteUser(id: string) {
    await usersRepository.deleteById(id);
    return 'User deleted succesfully';
  },

  async deleteExercise(id: string) {
    await exercisesRepository.deleteById(id);
    return 'Exercise deleted succesfully';
  },

  async addExercise(datos: Partial<ExerciseDocument>) {
    return exercisesRepository.create(datos);
  },

  async deleteUserComment(email: string, name: string) {
    const exer = await exercisesRepository.findByName(name);
    if (!exer) {
      throw new NotFoundError('Exercise not found');
    }

    const newFeedback = exer.feedback.filter((item) => item.email !== email);
    await exercisesRepository.updateFeedbackByName(name, newFeedback);
    return 'Comment deleted successfully';
  },

  async changeUserInfo(
    id: string,
    data: Partial<{ name: string; email: string; plan: string; status: string }>,
  ) {
    const oldProfile = await usersRepository.findById(id);
    if (!oldProfile) {
      throw new NotFoundError('User not found');
    }

    await usersRepository.updateById(id, {
      name: pick(data.name, oldProfile.name),
      email: pick(data.email, oldProfile.email),
      plan: pick(data.plan, oldProfile.plan),
      status: pick(data.status, oldProfile.status),
    });

    return 'The user profile info changed';
  },

  async changeUserDetails(
    id: string,
    data: Partial<{
      genre: string;
      age: number;
      weight: number;
      height: number;
      goal: string;
      experience: string;
    }>,
  ) {
    const old = await usersRepository.findById(id);
    if (!old?.userinfo?.[0]) {
      throw new NotFoundError('User info not found');
    }

    const current = old.userinfo[0];
    await usersRepository.updateById(id, {
      userinfo: {
        genre: pick(data.genre, current.genre),
        age: pick(data.age, current.age),
        weight: pick(data.weight, current.weight),
        height: pick(data.height, current.height),
        goal: pick(data.goal, current.goal),
        experience: pick(data.experience, current.experience),
      },
    });

    return 'The user info changed';
  },

  async changeExercise(
    id: string,
    data: Partial<{
      name: string;
      difficulty: string;
      muscles: string;
      genre: string;
      video: string;
      premium: boolean;
      description: string;
    }>,
  ) {
    const oldInfo = await exercisesRepository.findById(id);
    if (!oldInfo) {
      throw new NotFoundError('Exercise not found');
    }

    await exercisesRepository.updateById(id, {
      name: pick(data.name, oldInfo.name),
      difficulty: pick(data.difficulty, oldInfo.difficulty),
      muscles: pick(data.muscles, oldInfo.muscles),
      genre: pick(data.genre, oldInfo.genre),
      video: pick(data.video, oldInfo.video),
      premium: data.premium !== undefined ? data.premium : oldInfo.premium,
      description: pick(data.description, oldInfo.description),
    });

    return 'The exercise info changed';
  },

  async toggleAdmin(id: string) {
    const user = await usersRepository.findById(id);
    if (!user) {
      throw new NotFoundError('User not found');
    }

    await usersRepository.updateById(id, { admin: !user.admin });
    return 'Change admin property';
  },
};
