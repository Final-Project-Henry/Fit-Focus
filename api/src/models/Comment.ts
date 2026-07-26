import { Document, Schema, model } from 'mongoose';

export type CommentDocument = Document & {
  name?: string;
  email?: string;
  asunto?: string;
  comment?: string;
  response?: string;
};

const commentSchema = new Schema<CommentDocument>({
  name: String,
  email: String,
  asunto: String,
  comment: String,
  response: String,
});

export const Comment = model<CommentDocument>('Comment', commentSchema);
