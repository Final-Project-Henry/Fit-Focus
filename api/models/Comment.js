const {Schema, model} = require('mongoose')

const commentSchema = new Schema({
      name : String,
      email : String,
      comment: String
})

module.exports = model('Comment', commentSchema)