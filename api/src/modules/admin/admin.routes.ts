import { Router } from 'express';
import { adminService } from './admin.service';
import { commentsAdminRoutes } from '../comments/comments.routes';
import { asyncHandler } from '../../shared/middleware/errorHandler';

const adminRouter = Router();
const superAdminRouter = Router();

adminRouter.get(
  '/allusers',
  asyncHandler(async (_req, res) => {
    const users = await adminService.listUsers();
    res.status(200).json(users);
  }),
);

adminRouter.delete(
  '/deleteUser',
  asyncHandler(async (req, res) => {
    const { id } = req.body as { id: string };
    const message = await adminService.deleteUser(id);
    res.status(200).send(message);
  }),
);

adminRouter.delete(
  '/deleteExercise',
  asyncHandler(async (req, res) => {
    const { id } = req.body as { id: string };
    const message = await adminService.deleteExercise(id);
    res.status(200).send(message);
  }),
);

adminRouter.post(
  '/addExercise',
  asyncHandler(async (req, res) => {
    const { datos } = req.body as { datos: Record<string, unknown> };
    const exercise = await adminService.addExercise(datos);
    res.status(200).json(exercise);
  }),
);

adminRouter.delete(
  '/deleteUserComment',
  asyncHandler(async (req, res) => {
    const { email, name } = req.body as { email: string; name: string };
    const message = await adminService.deleteUserComment(email, name);
    res.status(200).send(message);
  }),
);

adminRouter.put(
  '/changeUserInfo',
  asyncHandler(async (req, res) => {
    const { _id, data } = req.body as {
      _id: string;
      data: Record<string, string>;
    };
    const message = await adminService.changeUserInfo(_id, data);
    res.status(200).send(message);
  }),
);

adminRouter.put(
  '/changeInfo',
  asyncHandler(async (req, res) => {
    const { _id, data } = req.body as {
      _id: string;
      data: Record<string, unknown>;
    };
    const message = await adminService.changeUserDetails(_id, data as never);
    res.status(200).send(message);
  }),
);

adminRouter.put(
  '/change_exercise',
  asyncHandler(async (req, res) => {
    const { _id, data } = req.body as {
      _id: string;
      data: Record<string, unknown>;
    };
    const message = await adminService.changeExercise(_id, data as never);
    res.status(200).send(message);
  }),
);

adminRouter.use(commentsAdminRoutes);

superAdminRouter.post(
  '/admin',
  asyncHandler(async (req, res) => {
    const { _id } = req.body as { _id: string };
    const message = await adminService.toggleAdmin(_id);
    res.status(200).send(message);
  }),
);

export { adminRouter, superAdminRouter };
