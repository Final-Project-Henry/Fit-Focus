const express = require('express');
const freeAccess = require('./routes/freeAccess.js');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;

const MongoStore = require('connect-mongo');
const session = require('express-session');


require('dotenv').config();


const app = express();

app.use(express.json());
app.use((req, res, next) => {  
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });



  app.use('/', freeAccess); //Rutas que puede acceder sin estar registrado/logeado

  module.exports = app