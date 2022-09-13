const mongoose = require('mongoose');
const dotenv = require ('dotenv');

dotenv.config();

 mongoose 
.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then (()=>{
    console.log('DB connected');
})
.catch(err=> console.log(err));

module.exports = {connection: mongoose}