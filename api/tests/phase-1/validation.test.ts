import {
  loginSchema,
  registerSchema,
  userInfoSchema,
} from '../../src/shared/validation/schemas';

describe('Phase 1 — Zod schemas', () => {
  it('accepts valid register payload', () => {
    const result = registerSchema.safeParse({
      name: 'Martin',
      email: 'martin@test.com',
      password: 'abc123',
    });
    expect(result.success).toBe(true);
  });

  it('rejects invalid register name/email', () => {
    expect(
      registerSchema.safeParse({
        name: 'ab',
        email: 'bad',
        password: 'abc123',
      }).success,
    ).toBe(false);
  });

  it('accepts valid login and rejects invalid email', () => {
    expect(
      loginSchema.safeParse({ email: 'a@b.com', password: 'x' }).success,
    ).toBe(true);
    expect(
      loginSchema.safeParse({ email: 'bad', password: 'x' }).success,
    ).toBe(false);
  });

  it('validates userinfo ranges', () => {
    expect(
      userInfoSchema.safeParse({
        genre: 'man',
        age: 30,
        weight: 80,
        height: 180,
        goal: 'gain muscles',
        experience: 'beginner',
      }).success,
    ).toBe(true);

    expect(
      userInfoSchema.safeParse({
        genre: 'man',
        age: 10,
        weight: 80,
        height: 180,
        goal: 'gain muscles',
        experience: 'beginner',
      }).success,
    ).toBe(false);
  });
});
