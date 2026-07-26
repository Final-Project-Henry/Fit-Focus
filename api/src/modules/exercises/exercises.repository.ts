import { Exercise, ExerciseDocument, ExerciseFeedback } from '../../models/Exercise';

export const exercisesRepository = {
  findAll() {
    return Exercise.find();
  },

  findById(id: string) {
    return Exercise.findById(id);
  },

  findByName(name: string) {
    return Exercise.findOne({ name });
  },

  create(data: Partial<ExerciseDocument>) {
    return Exercise.create(data);
  },

  deleteById(id: string) {
    return Exercise.deleteOne({ _id: id });
  },

  updateById(id: string, data: Record<string, unknown>) {
    return Exercise.updateOne({ _id: id }, data);
  },

  updateFeedback(id: string, feedback: ExerciseFeedback[]) {
    return Exercise.updateOne({ _id: id }, { feedback });
  },

  updateFeedbackByName(name: string, feedback: ExerciseFeedback[]) {
    return Exercise.updateOne({ name }, { feedback });
  },

  insertMany(data: unknown[]) {
    return Exercise.insertMany(data);
  },
};
