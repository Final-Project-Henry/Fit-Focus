import { Document, Schema, model } from 'mongoose';
import { UserInfo, userInfoSchema } from './UserInfo';
import { Routine, routinesSchema } from './Routines';

export type UserDocument = Document & {
  name: string;
  email: string;
  password: string;
  avatar?: string;
  plan: 'normal' | 'premium';
  admin: boolean;
  signupDate?: Date;
  lastLogin?: Date;
  routines: Routine[];
  userinfo: UserInfo[];
  feedback?: string;
  fav: { id: string }[];
  status: string;
  superAdmin: boolean;
};

const userSchema = new Schema<UserDocument>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    unique: true,
    required: true,
  },
  avatar: {
    type: String,
    default:
      'https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg',
    required: false,
  },
  plan: {
    type: String,
    enum: ['normal', 'premium'],
    default: 'normal',
  },
  admin: {
    type: Boolean,
    default: false,
  },
  signupDate: {
    type: Date,
    default: Date.now,
  },
  lastLogin: {
    type: Date,
  },
  routines: [routinesSchema],
  userinfo: [userInfoSchema],
  feedback: {
    type: String,
  },
  fav: [
    {
      id: {
        type: String,
      },
    },
  ],
  status: {
    type: String,
    default: 'activated',
  },
  superAdmin: {
    type: Boolean,
    default: false,
  },
});

export const User = model<UserDocument>('User', userSchema);
