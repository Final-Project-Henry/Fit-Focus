const { Schema, model } = require('mongoose');


const usergoogleSchema = new Schema({

    name: {
        type: String,
        required: true,
      },
    email: {
        type: String,
        required: true,
      },
    id: {
        type: String,
        required: true,
        unique : true
      },

})


module.exports = model('UserGoogle', usergoogleSchema);

