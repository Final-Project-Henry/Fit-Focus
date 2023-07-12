const mongoose = require('mongoose')

const commentExerciseSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    exercise: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Exercise',
    },
    comment: {
      type: String,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    status: {
      type: String,
      enum: ['active', 'banned', 'delete'],
      default: 'active',
    },
    report: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
)

commentExerciseSchema.index({ user: 1, exercise: 1 }, { unique: true })

module.exports = mongoose.model('CommentExercise', commentExerciseSchema)
