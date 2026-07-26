import { Router } from 'express';
import { exercisesService } from './exercises.service';
import { asyncHandler } from '../../shared/middleware/errorHandler';

const publicRouter = Router();
const authRouter = Router();

publicRouter.get(
  '/exercises',
  asyncHandler(async (_req, res) => {
    const exercises = await exercisesService.listExercises();
    res.status(200).send(exercises);
  }),
);

publicRouter.get(
  '/feedbackUser',
  asyncHandler(async (_req, res) => {
    const feedbacks = await exercisesService.listUserFeedbacks();
    res.status(200).send(feedbacks);
  }),
);

authRouter.get(
  '/exercise',
  asyncHandler(async (req, res) => {
    const id = String(req.query.id);
    const exercise = await exercisesService.getById(id);
    res.status(200).send(exercise);
  }),
);

authRouter.put(
  '/feedbackExercise',
  asyncHandler(async (req, res) => {
    const email = req.user!.email;
    const message = await exercisesService.addFeedback(email, req.body);
    res.status(200).send(message);
  }),
);

authRouter.put(
  '/report',
  asyncHandler(async (req, res) => {
    const reporterEmail = req.user!.email;
    const { email, id } = req.body as { email: string; id: string };
    const message = await exercisesService.reportFeedback(
      reporterEmail,
      email,
      id,
    );
    res.status(200).send(message);
  }),
);

export const exercisesPublicRoutes = publicRouter;
export const exercisesAuthRoutes = authRouter;
