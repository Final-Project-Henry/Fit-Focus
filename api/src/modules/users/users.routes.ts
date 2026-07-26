import { Router } from 'express';
import { usersService } from './users.service';
import { asyncHandler } from '../../shared/middleware/errorHandler';

const router = Router();

router.put(
  '/userinfo',
  asyncHandler(async (req, res) => {
    const message = await usersService.updateUserInfo(req.user!.email, req.body);
    res.status(200).send(message);
  }),
);

router.put(
  '/userfeedback',
  asyncHandler(async (req, res) => {
    const { comment } = req.body as { comment: string };
    const message = await usersService.submitFeedback(req.user!.email, comment);
    res.status(200).send(message);
  }),
);

router.put(
  '/changeinfo',
  asyncHandler(async (req, res) => {
    const message = await usersService.changeInfo(req.user!.id, req.body);
    res.status(200).send(message);
  }),
);

router.delete(
  '/delete',
  asyncHandler(async (req, res) => {
    const message = await usersService.deleteAccount(
      req.user!.id,
      req.user!.email,
    );
    res.status(200).send(message);
  }),
);

router.put(
  '/addfav',
  asyncHandler(async (req, res) => {
    const { _id } = req.body as { _id: string };
    const message = await usersService.addFavorite(req.user!.id, _id);
    res.status(200).send(message);
  }),
);

router.get(
  '/profile',
  asyncHandler(async (req, res) => {
    const user = await usersService.getProfile(req.user!.id);
    res.status(200).send(user);
  }),
);

router.get(
  '/ValidToken',
  asyncHandler(async (req, res) => {
    const message = await usersService.validateToken(req.user!.id);
    res.status(200).send(message);
  }),
);

export default router;
