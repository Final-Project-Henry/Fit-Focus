import { commentsRepository } from './comments.repository';
import { ConflictError, NotFoundError } from '../../shared/errors/AppError';
import { createResponseMail, sendMail } from '../../shared/mail/mailer';

export const commentsService = {
  async ask(name: string, email: string, asunto: string, comment: string) {
    const existing = await commentsRepository.findByEmail(email);
    if (existing) {
      throw new ConflictError('You already sent a question');
    }

    await commentsRepository.create({ name, email, asunto, comment });
    return 'Question sent succesfully';
  },

  async listQuestions() {
    return commentsRepository.findAll();
  },

  async respond(email: string, response: string) {
    const question = await commentsRepository.findByEmail(email);
    if (!question) {
      throw new NotFoundError('Question not found');
    }

    await sendMail(
      createResponseMail(
        email,
        question.name ?? '',
        response,
        question.comment ?? '',
      ),
    );
    await commentsRepository.deleteByEmail(email);
    return 'success';
  },
};
