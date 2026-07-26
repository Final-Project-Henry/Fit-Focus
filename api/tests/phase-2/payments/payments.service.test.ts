import { paymentsService } from '../../../src/modules/payments/payments.service';
import {
  resetPaymentGateway,
  setPaymentGatewayForTests,
} from '../../../src/modules/payments/mercadoPagoClient';
import { setupTestDb, teardownTestDb, clearDb } from '../../helpers/db';
import { usersRepository } from '../../../src/modules/users/users.repository';
import { hashPassword } from '../../../src/shared/security/password';
import { loadEnv, resetEnvCache } from '../../../src/config/env';

describe('Phase 2 — payments service', () => {
  beforeAll(async () => {
    resetEnvCache();
    loadEnv({ SECRET: 'phase2-secret' });
    await setupTestDb();
  });

  afterAll(async () => {
    resetPaymentGateway();
    await teardownTestDb();
  });

  beforeEach(async () => {
    await clearDb();
    resetPaymentGateway();
  });

  it('confirms premium when payment is approved for the user', async () => {
    const user = await usersRepository.create({
      name: 'Pay',
      email: 'pay@test.com',
      password: await hashPassword('abc123'),
      plan: 'normal',
    });

    setPaymentGatewayForTests({
      createPreference: async () => ({
        body: { id: 'pref', collector_id: 'c1' },
      }),
      findPaymentById: async () => ({
        body: {
          status: 'approved',
          external_reference: String(user._id),
        },
      }),
      searchPaymentsByExternalReference: async () => [],
    });

    const message = await paymentsService.confirmPremium(
      String(user._id),
      'pay-1',
    );
    expect(message).toBe('Ya eres premium!!');

    const updated = await usersRepository.findById(String(user._id));
    expect(updated?.plan).toBe('premium');
  });

  it('uses sandbox_init_point when ACCESS_TOKEN is TEST-', async () => {
    resetEnvCache();
    loadEnv({
      SECRET: 'phase2-secret',
      ACCESS_TOKEN: 'TEST-fake-token',
      MERCADOPAGO_USE_SANDBOX: 'false',
    });

    setPaymentGatewayForTests({
      createPreference: async () => ({
        body: {
          id: 'pref',
          collector_id: 'c1',
          init_point: 'https://www.mercadopago.com.pe/checkout/prod',
          sandbox_init_point: 'https://sandbox.mercadopago.com.pe/checkout/test',
        },
      }),
      findPaymentById: async () => ({
        body: { status: 'approved', external_reference: 'x' },
      }),
      searchPaymentsByExternalReference: async () => [],
    });

    const result = await paymentsService.createPreference(
      'A',
      'a@test.com',
      'id1',
    );
    expect(result.checkout_url).toBe(
      'https://sandbox.mercadopago.com.pe/checkout/test',
    );
  });

  it('syncs premium from approved Mercado Pago payments by external_reference', async () => {
    const user = await usersRepository.create({
      name: 'Sync',
      email: 'sync@test.com',
      password: await hashPassword('abc123'),
      plan: 'normal',
    });

    setPaymentGatewayForTests({
      createPreference: async () => ({
        body: { id: 'pref', collector_id: 'c1' },
      }),
      findPaymentById: async () => ({
        body: { status: 'pending' },
      }),
      searchPaymentsByExternalReference: async () => [
        {
          id: 99,
          status: 'approved',
          external_reference: String(user._id),
        },
      ],
    });

    const message = await paymentsService.syncPremiumFromMercadoPago(
      String(user._id),
    );
    expect(message).toBe('Ya eres premium!!');

    const updated = await usersRepository.findById(String(user._id));
    expect(updated?.plan).toBe('premium');
  });

  it('rejects payment when status is not approved', async () => {
    setPaymentGatewayForTests({
      createPreference: async () => ({
        body: { id: 'pref', collector_id: 'c1' },
      }),
      findPaymentById: async () => ({
        body: {
          status: 'rejected',
          external_reference: 'x',
        },
      }),
      searchPaymentsByExternalReference: async () => [],
    });

    await expect(
      paymentsService.confirmPremium('x', 'pay-2'),
    ).rejects.toMatchObject({ statusCode: 403 });
  });
});
