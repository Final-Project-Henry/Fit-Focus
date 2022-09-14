const express = require('express');
const freeAccess = require('./routes/freeAccess.js');
const authRoutes = require('./routes/authRoutes.js');
const jwt = require('jsonwebtoken');


require('dotenv').config();
const {SECRET} = process.env

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

  app.use('/', freeAccess); //Rutas que puede acceder sin estar registrado/logeado


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

  app.use('/auth', authRoutes);

 module.exports = app
