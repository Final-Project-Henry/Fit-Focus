const { Schema, model } = require('mongoose');
const userinfo = require('./UserInfo.js')

const userSchema = new Schema({

    name: {
        type: String,
        required: true,
      },
    email: {
        type: String,
        required: true,
        unique : true
      },
    password: {
        type: String,
        required: true,
        unique : true
      },
    avatar: {
      type: String
    },
  
    plan: {
        type: String,
        enum: ['normal', 'premium'],
        default: 'normal'
      },
    admin: {
        type: Boolean,  
        default: false
    },
    signupDate: {
        type: Date,
        default: Date.now()
    },
    lastLogin: {
        type: Date
    },
    routines: [{ 
      type: Schema.Types.ObjectId, 
      ref: 'Routines' 
    }],
    userinfo: [userinfo],


})


module.exports = model('User', userSchema);

