const mongoose = require('mongoose')

const userInfoSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
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
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('UserInfo', userInfoSchema)
