import { Router } from 'express';
import { paymentsService } from './payments.service';
import { asyncHandler } from '../../shared/middleware/errorHandler';

const router = Router();

router.get(
  '/payment',
  asyncHandler(async (req, res) => {
    const { email, name, id } = req.user!;
    const result = await paymentsService.createPreference(name, email, id);
    res.status(200).json(result);
  }),
);

router.get(
  '/confirmation',
  asyncHandler(async (req, res) => {
    const paymentId = req.query.payment_id
      ? String(req.query.payment_id)
      : '';

    // With payment_id (redirect from MP) or sync by external_reference (localhost fallback)
    const message =
      paymentId && paymentId !== 'null' && paymentId !== 'undefined'
        ? await paymentsService.confirmPremium(req.user!.id, paymentId)
        : await paymentsService.syncPremiumFromMercadoPago(req.user!.id);

    res.status(200).send(message);
  }),
);

router.get(
  '/payment/sync',
  asyncHandler(async (req, res) => {
    const message = await paymentsService.syncPremiumFromMercadoPago(
      req.user!.id,
    );
    res.status(200).json({ message, plan: 'premium' });
  }),
);

export default router;
