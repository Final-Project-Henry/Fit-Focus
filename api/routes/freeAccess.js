const { Router } = require('express');
const bcrypt = require('bcrypt');
const user = require('../models/User.js');
const exercise = require('../models/Exercise.js');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const {SECRET} = process.env

const router = Router();

router.post('/register', async (req, res) => {
  try {
    const {name, email ,password} = req.body;
    
    const oldUser = await user.findOne({email : email});
    if(oldUser) return res.status(409).send('User already exists');

    const hashPassword = await bcrypt.hash(password, 10);

    const User = await user.create({name,email,password : hashPassword});

    res.status(201).send(User);
  } catch (error) {
    res.status(500).send(error.message);
  }

});

router.post('/login', async (req, res) => { // Validando las credenciales y devuelve el token.
  
  try {
    const {email , password} = req.body
    
    const User = await user.findOne({email : email})
  
    if(!User) return res.status(404).send('User not found')
  
    const isValid = await bcrypt.compare(password, User.password);
    if(isValid) {
      const token = jwt.sign({email: email, name : User.name, id : User._id}, "" + SECRET);
      return res.status(200).json(token)
    }else {
      return res.status(401).send('Password not valid')
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
});

router.get('/login/google', (req,res) => {
  res.redirect('https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fauth&client_id=553882700243-5u6lingb04c86igau7nr6kjpicu042cl.apps.googleusercontent.com&access_type=offline&response_type=code&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email')
})

router.get('/exercises', async (req, res) =>{ // Devuelve unos ejercicios para mostrar
  const Exercises = await exercise.find().limit(15);
  res.status(200).send(Exercises)
});

module.exports = router