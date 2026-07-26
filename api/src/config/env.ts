import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().default(3001),
  MONGODB_URI: z.string().min(1),
  SECRET: z.string().min(1),
  NODEMAILER: z.string().optional().default(''),
  ACCESS_TOKEN: z.string().optional().default(''),
  // Force sandbox checkout URL even with APP_USR tokens (useful while testing)
  MERCADOPAGO_USE_SANDBOX: z
    .enum(['true', 'false'])
    .optional()
    .default('false'),
  CLIENT_URL: z.string().optional().default('http://localhost:3000'),
  GOOGLE_CLIENT_ID: z.string().optional().default(''),
  GOOGLE_CLIENT_SECRET: z.string().optional().default(''),
  REDIRECT_URI: z.string().optional().default('http://localhost:3000'),
  NODE_ENV: z.string().optional().default('development'),
});

export type Env = z.infer<typeof envSchema>;

let cached: Env | null = null;

export function loadEnv(overrides: Partial<Record<keyof Env, unknown>> = {}): Env {
  const parsed = envSchema.safeParse({
    PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI,
    SECRET: process.env.SECRET,
    NODEMAILER: process.env.NODEMAILER,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    MERCADOPAGO_USE_SANDBOX: process.env.MERCADOPAGO_USE_SANDBOX,
    CLIENT_URL: process.env.CLIENT_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    REDIRECT_URI: process.env.REDIRECT_URI,
    NODE_ENV: process.env.NODE_ENV,
    ...overrides,
  });

  if (!parsed.success) {
    throw new Error(`Invalid environment: ${parsed.error.message}`);
  }

  cached = parsed.data;
  return cached;
}

export function getEnv(): Env {
  if (!cached) {
    return loadEnv();
  }
  return cached;
}

export function resetEnvCache(): void {
  cached = null;
}
