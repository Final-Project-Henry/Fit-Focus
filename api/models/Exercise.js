const { Schema, model } = require('mongoose');


const exerciseSchema = new Schema({
   
    name: {
        type: String,
        unique: true
    },
    difficulty: {
        type: String,
        enum: ['easy','medium','hard']
    },
    muscles: {
        type: String,
        enum: ['upper_body', 'lower_body', 'functional', 'abs']
    },
    genre: {
        type: String,
        enum: ['man', 'woman', 'both']
    },
    accessories: {
        type: Boolean,
    },
    video: {
        type: String
    },
    description: {
        type: String
    },
    premium: {
        type: String
    }


})

module.exports = model('Exercise', exerciseSchema);


