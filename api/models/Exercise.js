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
        enum: ['upper_body', 'lower_body', 'functional', 'abs', 'stretching']
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
    premium : {
        type : Boolean
    },
    description : {
        type : String
    },
    feedback:[{
        email : {type : String},
        comment : {type : String},
        rating : {type : String},
        avatar : {type : String}
        report : [{type : String}]
    }]
})

module.exports = model('Exercise', exerciseSchema);


