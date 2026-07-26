import { User, UserDocument } from '../../models/User';
import { UserInfo } from '../../models/UserInfo';
import { Routine } from '../../models/Routines';

export const usersRepository = {
  findByEmail(email: string) {
    return User.findOne({ email });
  },

  findById(id: string) {
    return User.findById(id);
  },

  findAll() {
    return User.find();
  },

  create(data: Partial<UserDocument>) {
    return User.create(data);
  },

  updateByEmail(email: string, data: Record<string, unknown>) {
    return User.updateOne({ email }, data);
  },

  updateById(id: string, data: Record<string, unknown>) {
    return User.updateOne({ _id: id }, data);
  },

  updateManyById(id: string, data: Record<string, unknown>) {
    return User.updateMany({ _id: id }, data);
  },

  deleteById(id: string) {
    return User.deleteOne({ _id: id });
  },

  setUserInfo(email: string, userinfo: UserInfo) {
    return User.updateOne({ email }, { userinfo });
  },

  setRoutines(email: string, routines: Routine) {
    return User.updateOne({ email }, { routines });
  },

  addFavorite(id: string, exerciseId: string) {
    return User.updateOne(
      { _id: id },
      {
        $push: {
          fav: { id: exerciseId },
        },
      },
    );
  },

  findUserInfo(email: string) {
    return User.findOne({ email }).select('userinfo routines');
  },
};
