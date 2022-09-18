const express = require('express');
const freeAccess = require('./routes/freeAccess.js');
const authRoutes = require('./routes/authRoutes.js');
const authGoogleRoutes = require('./routes/authGoogleRoutes.js')
const jwt = require('jsonwebtoken');
const querystring = require('node:querystring');
const cors = require('cors')



require('dotenv').config();
const {SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, REDIRECT_URI} = process.env

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(cors({origin: 'http://localhost:3002'||'http://localhost:3001'||'http://localhost:3002'}))

app.use((req, res, next) => {  
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

  function getGoogleURL(){
   const rootURL = 'https://accounts.google.com/o/oauth2/v2/auth';
   const options = {
     redirect_uri : REDIRECT_URI,
     client_id : GOOGLE_CLIENT_ID,
     access_type : 'offline',
     response_type : 'code',
     prompt : 'consent',
     scope : [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
     ].join(' ')
   };
   return `${rootURL}?${querystring.stringify(options)}`;
  }

  app.use('/', freeAccess); //Rutas que puede acceder sin estar registrado/logeado

  app.use('/authGoogle', authGoogleRoutes); //Rutas para los que estan logeados con google

  app.use((req, res, next) => {

    const header = req.headers['authorization'];
    const token = header && header.split(' ')[1]
     jwt.verify(token, '' + SECRET, (err, decoded)=> {
      if(err) {
         return res.status(403).json({message : err.message })
      }
      req.user = decoded
      next()
     })
  });

  app.use('/auth', authRoutes); //Rutas para usuarios logeados con credenciales, si queres acceder a estas rutas van a necesitar un JWT

 module.exports = app
