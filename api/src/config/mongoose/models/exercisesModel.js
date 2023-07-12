const mongoose = require('mongoose')

const exerciseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    name_spanish: {
      type: String,
    },
    difficulty: {
      type: Number,
      required: true,
    },
    muscles: {
      type: String,
      enum: ['upper_body', 'lower_body', 'functional', 'abs', 'stretching'],
      required: true,
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
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['active', 'delete'],
      default: 'active',
    },
    isWeekSelected: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('Exercise', exerciseSchema)
