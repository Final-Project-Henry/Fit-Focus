import {
  comparePassword,
  hashPassword,
  isValidPasswordFormat,
} from '../../src/shared/security/password';
import {
  signAuthToken,
  verifyAuthToken,
} from '../../src/shared/security/jwt';
import { loadEnv, resetEnvCache } from '../../src/config/env';

describe('Phase 1 — security helpers', () => {
  beforeAll(() => {
    resetEnvCache();
    loadEnv({ SECRET: 'phase1-secret' });
  });

  it('hashes and compares passwords', async () => {
    const hash = await hashPassword('abc123');
    expect(hash).not.toBe('abc123');
    expect(await comparePassword('abc123', hash)).toBe(true);
    expect(await comparePassword('wrong', hash)).toBe(false);
  });

  it('validates password format', () => {
    expect(isValidPasswordFormat('abc123')).toBe(true);
    expect(isValidPasswordFormat('short')).toBe(false);
    expect(isValidPasswordFormat('toolongpass1')).toBe(false);
  });

  it('signs and verifies JWT', () => {
    const token = signAuthToken({
      email: 'a@b.com',
      name: 'A',
      id: '1',
      avatar: 'x',
    });
    const payload = verifyAuthToken(token);
    expect(payload.email).toBe('a@b.com');
    expect(payload.id).toBe('1');
  });

  it('rejects invalid JWT', () => {
    expect(() => verifyAuthToken('not-a-token')).toThrow();
  });
});
