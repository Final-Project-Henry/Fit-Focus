const mongoose = require('mongoose')

const opinionSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    opinion: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('Opinion', opinionSchema)
