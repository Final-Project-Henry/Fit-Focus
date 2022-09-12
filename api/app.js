const express = require('express');
const freeAccess = require('./routes/freeAccess.js');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;


require('dotenv').config();

const {SECRET} = process.env

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use((req, res, next) => {  
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

  app.use(session({
    secret: SECRET,
    resave: true,
    saveUninitialized: true,
  }));

  app.use(passport.initialize());
  app.use(passport.session())

  app.use('/', freeAccess); //Rutas que puede acceder sin estar registrado/logeado
  
 


  module.exports = app
  