import { Schema } from 'mongoose';

export type UserInfo = {
  genre: 'man' | 'woman' | 'other';
  age: number;
  weight: number;
  height: number;
  goal: 'gain muscles' | 'lower fat percentage';
  equipment?: boolean;
  experience: 'beginner' | 'medium' | 'advanced';
};

export const userInfoSchema = new Schema<UserInfo>({
  genre: {
    type: String,
    enum: ['man', 'woman', 'other'],
  },
  age: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  height: {
    type: Number,
  },
  goal: {
    type: String,
    enum: ['gain muscles', 'lower fat percentage'],
  },
  equipment: {
    type: Boolean,
    default: false,
  },
  experience: {
    type: String,
    enum: ['beginner', 'medium', 'advanced'],
  },
});
