const { Router } = require('express');
const bcrypt = require('bcrypt');
const user = require('../models/User.js');
const jwt = require('jsonwebtoken')

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

router.post('/login', async (req, res) => { // aca se crea e inicia la sesion 
  
  try {
    const {email , password} = req.body
    
    const User = await user.findOne({email : email})
  
    if(!User) return res.status(404).send('User not found')
  
    const isValid = await bcrypt.compare(password, User.password);
    if(isValid) {
      const token = jwt.sign({email: email, name : User.name}, "" + SECRET);
      return res.status(200).json(token)
    }else {
      return res.status(401).send('Password not valid')
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
});


module.exports = router