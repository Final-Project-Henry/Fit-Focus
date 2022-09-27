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
        unique : true,
        required: true
      },
    avatar: {
      type: String,
      default: 'https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg',
      required: false
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
    feedback: {
      type : String
    },
    fav : [{
      id : {
        type : String
      },
      name: {
        type : String
      }
    }],
    status : {
      type : String,
      default : 'activated'
    }
})


module.exports = model('User', userSchema);

