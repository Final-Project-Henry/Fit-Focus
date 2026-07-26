import { Router } from 'express';
import { routinesService } from './routines.service';
import { asyncHandler } from '../../shared/middleware/errorHandler';

const router = Router();

router.get(
  '/getroutine',
  asyncHandler(async (req, res) => {
    const email = req.user!.email;
    const get = req.query.get as string | undefined;
    const routine = await routinesService.getRoutine(email, get);
    res.status(200).json(routine);
  }),
);

export default router;
