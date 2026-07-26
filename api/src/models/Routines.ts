import { Schema } from 'mongoose';

export type Routine = {
  exercises: unknown[];
  difficulty: 'easy' | 'medium' | 'hard';
  reps: 'short' | 'long';
  type: 'accesories' | 'home' | 'mix';
};

export const routinesSchema = new Schema<Routine>({
  exercises: {
    type: Array,
    default: [],
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
  },
  reps: {
    type: String,
    enum: ['short', 'long'],
  },
  type: {
    type: String,
    enum: ['accesories', 'home', 'mix'],
  },
});
