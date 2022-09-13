const { Router } = require('express');
const bcrypt = require('bcrypt');
const user = require('../models/User.js');
const passport = require('passport');


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

router.post('/login', passport.authenticate('local',{failureRedirect: '/'}), (req, res) => {
  res.redirect('/getexercises')
});

router.get('/getexercises', async (req,res) => {
   try {
     res.status(200).send('fuaaaa')
    
   } catch (error) {
     res.status(500).send(error.message)
   }
});

router.get('/', (req, res) => {
res.status(200).send('fallaste')

});

module.exports = router
