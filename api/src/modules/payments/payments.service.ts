import { usersRepository } from '../users/users.repository';
import { ForbiddenError } from '../../shared/errors/AppError';
import { getEnv } from '../../config/env';
import { getPreference } from './preference';
import { getPaymentGateway } from './mercadoPagoClient';

function resolveCheckoutUrl(body: {
  init_point?: string;
  sandbox_init_point?: string;
}): string | undefined {
  const accessToken = getEnv().ACCESS_TOKEN || '';
  const forceSandbox = getEnv().MERCADOPAGO_USE_SANDBOX === 'true';
  // Legacy TEST- credentials must use sandbox_init_point. Using init_point
  // opens production checkout and triggers:
  // "Una de las partes con la que intentas hacer el pago es de prueba."
  const useSandbox = forceSandbox || accessToken.startsWith('TEST-');

  if (useSandbox) {
    return body.sandbox_init_point || body.init_point;
  }

  return body.init_point || body.sandbox_init_point;
}

function paymentMatchesUser(
  payment: {
    status?: string;
    external_reference?: string;
  },
  userId: string,
): boolean {
  return payment.status === 'approved' && payment.external_reference === userId;
}

export const paymentsService = {
  async createPreference(name: string, email: string, id: string) {
    const preferences = getPreference(name, email, id);
    const response = await getPaymentGateway().createPreference(preferences);
    const checkoutUrl = resolveCheckoutUrl(response.body);

    return {
      id: response.body.id,
      collector_id: response.body.collector_id,
      init_point: response.body.init_point,
      sandbox_init_point: response.body.sandbox_init_point,
      checkout_url: checkoutUrl,
      response,
    };
  },

  async confirmPremium(userId: string, paymentId: string) {
    const response = await getPaymentGateway().findPaymentById(paymentId);
    const status = response.body.status || response.response?.status;
    const externalReference =
      response.body.external_reference ||
      response.response?.external_reference ||
      response.response?.additional_info?.payer?.last_name;

    if (paymentMatchesUser({ status, external_reference: externalReference }, userId)) {
      await usersRepository.updateById(userId, { plan: 'premium' });
      return 'Ya eres premium!!';
    }

    throw new ForbiddenError('Pago rechazado');
  },

  /**
   * Fallback when Mercado Pago does not redirect to localhost after payment.
   * Looks up the latest approved payment by external_reference (= Fit Focus user id).
   */
  async syncPremiumFromMercadoPago(userId: string) {
    const user = await usersRepository.findById(userId);
    if (user?.plan === 'premium') {
      return 'Ya eres premium!!';
    }

    const payments =
      await getPaymentGateway().searchPaymentsByExternalReference(userId);
    const approved = payments.find((payment) =>
      paymentMatchesUser(
        {
          status: payment.status,
          external_reference: payment.external_reference || userId,
        },
        userId,
      ),
    );

    // search already filters by external_reference; accept approved even if field omitted
    const approvedPayment =
      approved ||
      payments.find((payment) => payment.status === 'approved');

    if (!approvedPayment) {
      throw new ForbiddenError('No se encontró un pago aprobado');
    }

    await usersRepository.updateById(userId, { plan: 'premium' });
    return 'Ya eres premium!!';
  },
};
