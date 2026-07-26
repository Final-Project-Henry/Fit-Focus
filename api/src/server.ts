import { createApp } from './app';
import { connectDb } from './config/db';
import { getEnv, loadEnv } from './config/env';
import { loadExercises } from './seed/loadExercises';
import { mongoose } from './config/db';

async function bootstrap() {
  loadEnv();
  await connectDb();
  await mongoose.connection.syncIndexes();
  await loadExercises();

  const app = createApp();
  const { PORT } = getEnv();

  app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
  });
}

bootstrap().catch((error) => {
  console.error('Failed to start server', error);
  process.exit(1);
});
