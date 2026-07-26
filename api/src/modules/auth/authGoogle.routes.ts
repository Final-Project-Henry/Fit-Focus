import { Router } from 'express';
import { authService } from './auth.service';
import { asyncHandler } from '../../shared/middleware/errorHandler';

const router = Router();

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { code } = req.body as { code: string };
    const token = await authService.googleLogin(code);
    res.status(200).send(token);
  }),
);

export default router;
