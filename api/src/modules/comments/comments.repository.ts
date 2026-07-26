import { Comment, CommentDocument } from '../../models/Comment';

export const commentsRepository = {
  findAll() {
    return Comment.find();
  },

  findByEmail(email: string) {
    return Comment.findOne({ email });
  },

  create(data: Partial<CommentDocument>) {
    return Comment.create(data);
  },

  deleteByEmail(email: string) {
    return Comment.deleteOne({ email });
  },
};
