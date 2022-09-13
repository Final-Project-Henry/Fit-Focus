const { Schema, model } = require('mongoose');


const exerciseSchema = new Schema({
   
    name: {
        type: String
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
    accesories: {
        type: Boolean,
    },
    video: {
        type: String
    }

})

const exercise = new model('Exercise', exerciseSchema);

module.exports = exercise;
