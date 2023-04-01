const mongoose = require('mongoose')

const commentExerciseSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    comment: {
      type: String,
    },
    rating: {
      type: Number,
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

module.exports = mongoose.model('CommentExercise', commentExerciseSchema)
