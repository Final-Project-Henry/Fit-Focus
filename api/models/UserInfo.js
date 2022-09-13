const { Schema, model } = require('mongoose');


const userinfoSchema = new Schema({
    genre: {
        type: String,
        enum: ['man', 'woman', 'other']
    },
    age: {
        type: Number,  
    },
    weight: {
        type: Number
    }, 
    height: {
        type: Number
    }, 
    goal: {
        type: String,
        enum: ['gain muscles', 'lower fat percentage']
    }, 
    equipment: {
        type: Boolean
    }, 
    experience: {
        type: String,
        enum: ['beginner', 'medium', 'advanced']
    },
  

})

const userinfo = new model('UserInfo', userinfoSchema);

module.exports = userinfo;
