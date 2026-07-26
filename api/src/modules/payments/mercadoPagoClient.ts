import mercadopago from 'mercadopago';
import { getEnv } from '../../config/env';

let configured = false;

export function getMercadoPago() {
  if (!configured) {
    mercadopago.configure({
      access_token: getEnv().ACCESS_TOKEN,
    });
    configured = true;
  }
  return mercadopago;
}

export type MercadoPagoPayment = {
  id?: string | number;
  status?: string;
  external_reference?: string;
};

export type PaymentGateway = {
  createPreference: (preferences: unknown) => Promise<{
    body: {
      id: string;
      collector_id: string;
      init_point?: string;
      sandbox_init_point?: string;
    };
    [key: string]: unknown;
  }>;
  findPaymentById: (paymentId: string) => Promise<{
    body: {
      status: string;
      external_reference?: string;
    };
    response?: {
      status?: string;
      external_reference?: string;
      additional_info?: { payer?: { last_name?: string } };
    };
  }>;
  searchPaymentsByExternalReference: (
    externalReference: string,
  ) => Promise<MercadoPagoPayment[]>;
};

export const defaultPaymentGateway: PaymentGateway = {
  async createPreference(preferences) {
    const response = await getMercadoPago().preferences.create(preferences as never);
    return response as never;
  },
  async findPaymentById(paymentId) {
    const response = await getMercadoPago().payment.findById(paymentId);
    return response as never;
  },
  async searchPaymentsByExternalReference(externalReference) {
    const response = (await getMercadoPago().payment.search({
      qs: {
        external_reference: externalReference,
        sort: 'date_created',
        criteria: 'desc',
      },
    })) as { body?: { results?: MercadoPagoPayment[] }; results?: MercadoPagoPayment[] };

    return response.body?.results || response.results || [];
  },
};

let gateway: PaymentGateway = defaultPaymentGateway;

export function getPaymentGateway(): PaymentGateway {
  return gateway;
}

export function setPaymentGatewayForTests(custom: PaymentGateway): void {
  gateway = custom;
}

export function resetPaymentGateway(): void {
  gateway = defaultPaymentGateway;
}
