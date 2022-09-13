const express = require('express');
const freeAccess = require('./routes/freeAccess.js');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;

const session = require('express-session');
const bcrypt = require('bcrypt');

const user = require('./models/User.js')

const MongoStore = require('connect-mongo');  // Para guardar datos de la sesion en mongo


require('dotenv').config();
const {SECRET, MONGODB_URI} = process.env

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use((req, res, next) => {  
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });


  app.use(session({ // creando una sesion
  secret: SECRET,
  resave : true,
  saveUninitialized: true,
  store : MongoStore.create({ // definiendo la store donde se van a guardar los datos de la sesion en connect-mongo
    mongoUrl : MONGODB_URI,
    collectionName : 'sessions'
  })
}))

app.use(passport.initialize());
app.use(passport.session());

 passport.use(new passportLocal({passwordField: 'password', usernameField: 'email'}, function (email,password,done){
       user.findOne({email : email}, function (err, usuario) {
        if(err) { return done(err);}
       if(!usuario) { return done(null,false)}
       bcrypt.compare(password, usuario.password)
       .then((Check) => {
        if(!Check){
          return done(null,false)
        }else {
          return done(null,usuario)
        }
       });

      });
}));

passport.serializeUser((user,done) => {
  done(null, user.id);
})

passport.deserializeUser((userid, done) => {
  User.findById(userid)
  .then((user)=>{
    done(null,user)
  })
  .catch(error => {
    done(error)
  })
})



  app.use('/', freeAccess); //Rutas que puede acceder sin estar registrado/logeado

  module.exports = app