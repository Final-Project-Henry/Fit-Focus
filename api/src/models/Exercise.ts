import { Document, Schema, model } from 'mongoose';

export type ExerciseFeedback = {
  email?: string;
  comment?: string;
  rating?: string;
  avatar?: string;
  report?: string[];
};

export type ExerciseDocument = Document & {
  name?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  muscles?: 'upper_body' | 'lower_body' | 'functional' | 'abs' | 'stretching';
  genre?: 'man' | 'woman' | 'both';
  accessories?: boolean;
  video?: string;
  premium?: boolean;
  description?: string;
  feedback: ExerciseFeedback[];
};

const exerciseSchema = new Schema<ExerciseDocument>({
  name: {
    type: String,
    unique: true,
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
  },
  muscles: {
    type: String,
    enum: ['upper_body', 'lower_body', 'functional', 'abs', 'stretching'],
  },
  genre: {
    type: String,
    enum: ['man', 'woman', 'both'],
  },
  accessories: {
    type: Boolean,
  },
  video: {
    type: String,
  },
  premium: {
    type: Boolean,
  },
  description: {
    type: String,
  },
  feedback: [
    {
      email: { type: String },
      comment: { type: String },
      rating: { type: String },
      avatar: { type: String },
      report: [{ type: String }],
    },
  ],
});

export const Exercise = model<ExerciseDocument>('Exercise', exerciseSchema);
