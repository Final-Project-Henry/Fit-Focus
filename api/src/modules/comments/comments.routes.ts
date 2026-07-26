import { Router } from 'express';
import { commentsService } from './comments.service';
import { asyncHandler } from '../../shared/middleware/errorHandler';

const authRouter = Router();
const adminRouter = Router();

authRouter.post(
  '/ask',
  asyncHandler(async (req, res) => {
    const { name, email } = req.user!;
    const { asunto, comment } = req.body as { asunto: string; comment: string };
    const message = await commentsService.ask(name, email, asunto, comment);
    res.status(201).send(message);
  }),
);

adminRouter.get(
  '/questions',
  asyncHandler(async (_req, res) => {
    const questions = await commentsService.listQuestions();
    res.status(200).send(questions);
  }),
);

adminRouter.put(
  '/response_ask',
  asyncHandler(async (req, res) => {
    const { email, response } = req.body as { email: string; response: string };
    const message = await commentsService.respond(email, response);
    res.status(201).send(message);
  }),
);

export const commentsAuthRoutes = authRouter;
export const commentsAdminRoutes = adminRouter;
