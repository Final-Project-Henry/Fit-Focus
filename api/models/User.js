const { Schema, model } = require('mongoose');


const userSchema = new Schema({

    name: {
        type: String,
        required: true,
      },
    email: {
        type: String,
        required: true,
      },
    password: {
        type: String,
        required: true,
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
    userinfo: [{ 
      type: Schema.Types.ObjectId, 
      ref: 'UserInfo' 
    }],


})


const user = new model('User', userSchema);

module.exports = user;
