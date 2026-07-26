import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().regex(/^[a-zA-Z ]{3,15}$/),
  email: z.string().regex(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/),
  password: z.string().min(1),
});

export const loginSchema = z.object({
  email: z.string().regex(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/),
  password: z.string().min(1),
});

export const userInfoSchema = z.object({
  genre: z.enum(['man', 'woman', 'other']),
  age: z.coerce.number().refine((age) => age >= 20 && age <= 60),
  weight: z.coerce.number(),
  height: z.coerce.number().refine((h) => h >= 150 && h <= 215),
  goal: z.enum(['gain muscles', 'lower fat percentage']),
  equipment: z.boolean().optional().default(false),
  experience: z.enum(['beginner', 'medium', 'advanced']),
});

export const feedbackCommentSchema = z
  .string()
  .regex(/^.{10,50}$/, 'Comment must contain at least 10 characters');

export const ratingSchema = z
  .union([z.string(), z.number()])
  .refine((value) => /[1-5]/.test(String(value)), {
    message: 'Rating has to be between 1 and 5',
  });

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type UserInfoInput = z.infer<typeof userInfoSchema>;
