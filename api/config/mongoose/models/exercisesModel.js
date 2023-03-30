const mongoose = require('mongoose')

const exerciseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    difficulty: {
      type: String,
      enum: ['easy', 'medium', 'hard'],
    },
    muscles: {
      type: String,
      enum: ['upper-body', 'lower-body', 'functional', 'abs', 'stretching'],
    },
    genre: {
      type: String,
      enum: ['man', 'woman', 'both'],
    },
    needsAccessories: {
      type: Boolean,
    },
    videoUrl: {
      type: String,
    },
    gifUrl: {
      type: String,
      required: true,
    },
    isPremium: {
      type: Boolean,
    },
    description: {
      type: String,
    },
    status: {
      type: 'string',
      enum: ['active', 'delete'],
      default: 'active',
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Comment',
      },
    ],
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('Exercise', exerciseSchema)
