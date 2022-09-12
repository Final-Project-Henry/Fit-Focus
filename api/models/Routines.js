const { Schema, model } = require('mongoose');


const routinesSchema = new Schema({

    exercises: {
        type: Array,
        default: []
    },   
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard']
    },
    reps: {
        type: String,
        enum: ['short', 'long']
    },
    type: {
        type: String,
        enum: ['accesories', 'home', 'mix']
    }

})


const routines = new model('Routines', routinesSchema );

module.exports = routines;
