const mongoose = require('mongoose')

const routinesSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    exercises: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Exercise',
      },
    ],
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
    status: {
      type: String,
      enum: ['active', 'delete'],
      default: 'active',
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('Routine', routinesSchema)
