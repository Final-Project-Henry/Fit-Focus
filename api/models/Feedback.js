const { Schema, model } = require('mongoose');


const feedbackSchema = new Schema({
    
    feedback: {
        type: String,
      }

})


module.exports = feedbackSchema
