import { Router } from 'express';
import { authService } from './auth.service';
import { asyncHandler } from '../../shared/middleware/errorHandler';

const router = Router();

router.post(
  '/register',
  asyncHandler(async (req, res) => {
    const user = await authService.register(req.body);
    res.status(201).send(user);
  }),
);

router.post(
  '/login',
  asyncHandler(async (req, res) => {
    const token = await authService.login(req.body);
    res.status(200).json(token);
  }),
);

router.put(
  '/account',
  asyncHandler(async (req, res) => {
    const { email, password } = req.body as { email: string; password: string };
    const message = await authService.activateAccount(email, password, true);
    res.status(200).send(message);
  }),
);

router.put(
  '/accountGoogle',
  asyncHandler(async (req, res) => {
    const { email, password } = req.body as { email: string; password: string };
    const message = await authService.activateAccount(email, password, false);
    res.status(200).send(message);
  }),
);

router.post(
  '/newpassword',
  asyncHandler(async (req, res) => {
    const { email } = req.body as { email: string };
    try {
      const message = await authService.requestNewPassword(email);
      res.status(200).send(message);
    } catch {
      res.status(500).send('An error has ocurred');
    }
  }),
);

router.get(
  '/feedback',
  asyncHandler(async (req, res) => {
    const paymentId = req.query.payment_id;
    return res.redirect(
      paymentId
        ? `http://localhost:3000/mercadopago/${paymentId}`
        : 'http://localhost:3000/mercadopago',
    );
  }),
);

export default router;
