import { exercisesRepository } from './exercises.repository';
import { usersRepository } from '../users/users.repository';
import {
  ForbiddenError,
  NotFoundError,
  ValidationError,
} from '../../shared/errors/AppError';
import { isEmpty } from '../../shared/utils/isEmpty';
import {
  feedbackCommentSchema,
  ratingSchema,
} from '../../shared/validation/schemas';
import { ExerciseFeedback } from '../../models/Exercise';

export const exercisesService = {
  async listExercises() {
    return exercisesRepository.findAll();
  },

  async listUserFeedbacks() {
    const users = await usersRepository.findAll();
    const feedbacks: { name: string; avatar?: string; comment: string }[] = [];

    for (const user of users) {
      if (user.feedback) {
        feedbacks.push({
          name: user.name,
          avatar: user.avatar,
          comment: user.feedback,
        });
      }
    }

    return feedbacks;
  },

  async getById(id: string) {
    const exercise = await exercisesRepository.findById(id);
    if (!exercise) {
      throw new ValidationError('Token invalido');
    }
    return exercise;
  },

  async addFeedback(
    email: string,
    body: { comment: string; rating: string | number; id: string; avatar?: string },
  ) {
    const commentParsed = feedbackCommentSchema.safeParse(body.comment);
    if (!commentParsed.success) {
      throw new ForbiddenError('Comment must contain at least 10 characters');
    }

    const ratingParsed = ratingSchema.safeParse(body.rating);
    if (!ratingParsed.success) {
      throw new ForbiddenError('Rating has to be between 1 and 5');
    }

    const existing = await exercisesRepository.findById(body.id);
    let feedback: ExerciseFeedback[] = [
      {
        email,
        comment: body.comment,
        rating: String(body.rating),
        avatar: body.avatar,
      },
    ];

    if (existing) {
      const filter = existing.feedback.filter((item) => item.email !== email);
      feedback = [...filter, ...feedback];
    }

    await exercisesRepository.updateFeedback(body.id, feedback);
    return 'Feedback added';
  },

  async reportFeedback(reporterEmail: string, email: string, id: string) {
    if (reporterEmail === email) {
      throw new ForbiddenError('You cannot report your own feedback');
    }

    const exercise = await exercisesRepository.findById(id);
    if (!exercise) {
      throw new NotFoundError('Feedback not found');
    }

    const target = exercise.feedback.find((item) => item.email === email);
    if (!target || isEmpty(exercise.feedback)) {
      throw new NotFoundError('Feedback not found');
    }

    target.report = target.report ?? [];
    if (target.report.includes(reporterEmail)) {
      throw new ForbiddenError('Report already added');
    }

    target.report.push(reporterEmail);
    await exercise.save();
    return 'Report added';
  },
};
