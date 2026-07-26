import { describe, expect, it } from 'vitest';
import {
  contactSchema,
  exerciseFormSchema,
  feedbackSchema,
  loginSchema,
  newPasswordSchema,
  registerSchema,
  userInfoSchema,
} from './schemas';

describe('validators (unit)', () => {
  describe('registerSchema', () => {
    it('accepts a valid payload', () => {
      const result = registerSchema.safeParse({
        name: 'Martin',
        email: 'martin@test.com',
        password: 'abc123',
      });
      expect(result.success).toBe(true);
    });

    it('rejects short names and invalid emails', () => {
      expect(
        registerSchema.safeParse({
          name: 'Al',
          email: 'bad',
          password: 'abc123',
        }).success,
      ).toBe(false);
    });

    it('rejects invalid password format', () => {
      expect(
        registerSchema.safeParse({
          name: 'Martin',
          email: 'martin@test.com',
          password: 'short',
        }).success,
      ).toBe(false);
    });
  });

  describe('loginSchema', () => {
    it('requires password and valid email', () => {
      expect(
        loginSchema.safeParse({ email: 'a@b.com', password: 'x' }).success,
      ).toBe(true);
      expect(
        loginSchema.safeParse({ email: 'bad', password: 'x' }).success,
      ).toBe(false);
      expect(
        loginSchema.safeParse({ email: 'a@b.com', password: '' }).success,
      ).toBe(false);
    });
  });

  describe('userInfoSchema', () => {
    it('accepts valid routine profile data', () => {
      const result = userInfoSchema.safeParse({
        genre: 'man',
        age: 28,
        weight: 78,
        height: 180,
        goal: 'gain muscles',
        experience: 'medium',
        equipment: false,
      });
      expect(result.success).toBe(true);
    });

    it('rejects out-of-range age/height', () => {
      expect(
        userInfoSchema.safeParse({
          genre: 'man',
          age: 10,
          weight: 78,
          height: 180,
          goal: 'gain muscles',
          experience: 'medium',
        }).success,
      ).toBe(false);
    });
  });

  describe('feedbackSchema / contactSchema / newPasswordSchema', () => {
    it('enforces feedback length 10-50', () => {
      expect(feedbackSchema.safeParse({ comment: 'short' }).success).toBe(false);
      expect(
        feedbackSchema.safeParse({ comment: '1234567890' }).success,
      ).toBe(true);
    });

    it('validates contact payload', () => {
      expect(
        contactSchema.safeParse({
          name: 'Martin',
          email: 'm@test.com',
          asunto: 'Help',
          comment: 'Necesito ayuda con mi cuenta',
        }).success,
      ).toBe(true);
    });

    it('validates password reset email', () => {
      expect(newPasswordSchema.safeParse({ email: 'm@test.com' }).success).toBe(
        true,
      );
      expect(newPasswordSchema.safeParse({ email: 'bad' }).success).toBe(false);
    });
  });

  describe('exerciseFormSchema', () => {
    it('transforms premium string to boolean', () => {
      const result = exerciseFormSchema.safeParse({
        name: 'Push Up',
        difficulty: 'easy',
        muscles: 'upper_body',
        genre: 'both',
        video: '',
        premium: 'true',
        description: 'A basic push up',
      });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.premium).toBe(true);
      }
    });
  });
});
