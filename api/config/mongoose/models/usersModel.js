const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      unique: true,
      required: true,
    },
    avatar: {
      type: String,
    },
    plan: {
      type: String,
      enum: ['normal', 'premium'],
      default: 'normal',
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    lastLogin: {
      type: Date,
    },
    routine: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Routine',
    },
    feedback: {
      type: String,
    },
    fav: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercise',
      },
    ],
    status: {
      type: String,
      enum: ['active', 'banned', 'delete'],
      default: 'active',
    },
    isSuper: {
      type: Boolean,
      default: false,
    },
    rol: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('User', userSchema)
