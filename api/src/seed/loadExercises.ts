import path from 'path';
import { exercisesRepository } from '../modules/exercises/exercises.repository';

// Keep seed data in the existing Exercises/exercises.js file
// eslint-disable-next-line @typescript-eslint/no-var-requires
const exercises = require(path.join(__dirname, '../../Exercises/exercises.js'));

export async function loadExercises(): Promise<void> {
  try {
    await exercisesRepository.insertMany(exercises);
    console.log('exercisesInDB');
  } catch {
    console.log('EXERCISE ALREADY LOADED');
  }
}
