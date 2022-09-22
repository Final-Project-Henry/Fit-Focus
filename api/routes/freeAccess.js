const { Router } = require('express');
const bcrypt = require('bcrypt');
const user = require('../models/User.js');
const exercise = require('../models/Exercise.js');
const jwt = require('jsonwebtoken');
const validation = require('../validations/validations.js');

require('dotenv').config();

const {SECRET} = process.env

const router = Router();

router.post('/register', async (req, res) => {

  if(!validation.register(req.body))return res.status(500).send('Invalid parameters');

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
  
  if(!validation.register(req.body))return res.status(500).send('Invalid parameters');

  try {
    const {email , password} = req.body
    
    const User = await user.findOne({email : email})
  
    if(!User) return res.status(404).send('User not found')
  
    const isValid = await bcrypt.compare(password, User.password);
    if(isValid) {
      const token = jwt.sign({email: email, name : User.name, id : User._id}, "" + SECRET, { expiresIn : '12h'});
      return res.status(200).json(token)
    }else {
      return res.status(401).send('Password not valid')
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
});

router.get('/exercises', async (req, res) =>{ // Devuelve unos ejercicios para mostrar
  const Exercises = await exercise.find();
  res.status(200).send(Exercises)
});

router.get('/feedback', async (req, res) =>{
  try {
    const {payment_id} = req.query
    
    return res.redirect(payment_id?`http://localhost:3000/mercadopago/${payment_id}`:'http://localhost:3000/mercadopago');
  } catch (error) {
    res.status(500).send(error.message)
  }
})

module.exports = router
