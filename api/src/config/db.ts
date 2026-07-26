import mongoose from 'mongoose';
import { getEnv } from './env';

export async function connectDb(uri?: string): Promise<typeof mongoose> {
  const connectionUri = uri ?? getEnv().MONGODB_URI;
  mongoose.set('strictQuery', true);
  await mongoose.connect(connectionUri);
  return mongoose;
}

export async function disconnectDb(): Promise<void> {
  await mongoose.disconnect();
}

export { mongoose };
