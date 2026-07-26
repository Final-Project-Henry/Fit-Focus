import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { connectDb, disconnectDb } from '../../src/config/db';
import { loadEnv, resetEnvCache } from '../../src/config/env';

let mongo: MongoMemoryServer | null = null;

export async function setupTestDb(): Promise<void> {
  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();
  resetEnvCache();
  loadEnv({ MONGODB_URI: uri });
  await connectDb(uri);
}

export async function teardownTestDb(): Promise<void> {
  await mongoose.connection.dropDatabase().catch(() => undefined);
  await disconnectDb();
  if (mongo) {
    await mongo.stop();
    mongo = null;
  }
  resetEnvCache();
}

export async function clearDb(): Promise<void> {
  const collections = mongoose.connection.collections;
  for (const key of Object.keys(collections)) {
    await collections[key].deleteMany({});
  }
}
