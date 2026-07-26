import { getEnv } from '../../config/env';

export function getPreference(name: string, email: string, id: string) {
  const clientUrl = getEnv().CLIENT_URL || 'http://localhost:3000';
  const isHttps = clientUrl.startsWith('https://');

  return {
    // Links the payment back to the Fit Focus user without forcing payer email
    // (a mismatched email vs logged-in MP buyer often keeps "Pagar" disabled).
    external_reference: id,
    metadata: {
      fitfocus_user_id: id,
      fitfocus_user_email: email,
      fitfocus_user_name: name,
    },
    items: [
      {
        id: 'premium-plan',
        title: 'Premium Plan',
        unit_price: 10,
        quantity: 1,
        currency_id: 'PEN',
        description: 'Pago de servicio para obtener el plan premium',
        category_id: 'services',
      },
    ],
    payment_methods: {
      installments: 1,
      default_installments: 1,
    },
    back_urls: {
      success: `${clientUrl}/mercadopago/feedback`,
      failure: `${clientUrl}/mercadopago`,
      pending: `${clientUrl}/mercadopago/feedback`,
    },
    // auto_return only works with HTTPS back_urls (not http://localhost)
    ...(isHttps ? { auto_return: 'approved' as const } : {}),
  };
}
