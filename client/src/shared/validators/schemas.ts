import { z } from 'zod';

export const registerSchema = z.object({
  name: z
    .string()
    .regex(/^[a-zA-Z ]{3,15}$/, 'Name must be 3-15 letters'),
  email: z
    .string()
    .regex(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, 'Invalid email'),
  password: z
    .string()
    .regex(
      /^[a-zA-Z0-9]{6,10}$/,
      'Password must be 6-10 alphanumeric characters',
    ),
});

export const loginSchema = z.object({
  email: z
    .string()
    .regex(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, 'Invalid email'),
  password: z.string().min(1, 'Password is required'),
});

export const userInfoSchema = z.object({
  genre: z.enum(['man', 'woman', 'other']),
  age: z.coerce.number().min(20).max(60),
  weight: z.coerce.number().positive(),
  height: z.coerce.number().min(150).max(215),
  goal: z.enum(['gain muscles', 'lower fat percentage']),
  equipment: z.boolean().optional().default(false),
  experience: z.enum(['beginner', 'medium', 'advanced']),
});

export const feedbackSchema = z.object({
  comment: z
    .string()
    .regex(/^.{10,50}$/, 'Comment must be between 10 and 50 characters'),
});

export const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z
    .string()
    .regex(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, 'Invalid email'),
  asunto: z.string().min(3, 'Subject is required').optional(),
  comment: z.string().min(10, 'Comment must be at least 10 characters'),
});

export const newPasswordSchema = z.object({
  email: z
    .string()
    .regex(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, 'Invalid email'),
});

export const exerciseFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  difficulty: z.enum(['easy', 'medium', 'hard']),
  muscles: z.enum([
    'upper_body',
    'lower_body',
    'functional',
    'abs',
    'stretching',
  ]),
  genre: z.enum(['man', 'woman', 'both']),
  video: z.string().optional().default(''),
  premium: z
    .union([z.boolean(), z.enum(['true', 'false'])])
    .transform((value) => value === true || value === 'true'),
  description: z.string().min(5, 'Description is required'),
  accessories: z.boolean().optional().default(false),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type UserInfoInput = z.infer<typeof userInfoSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type ExerciseFormInput = z.infer<typeof exerciseFormSchema>;
