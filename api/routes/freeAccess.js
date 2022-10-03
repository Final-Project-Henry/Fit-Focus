const { Router } = require('express');
const bcrypt = require('bcrypt');
const user = require('../models/User.js');
const exercise = require('../models/Exercise.js');
const jwt = require('jsonwebtoken');
const validation = require('../validations/validations.js')
const mailSettings = require('../additional/nodemailer');


require('dotenv').config();

const {SECRET} = process.env

const router = Router();

router.post('/register', async (req, res) => {

  if(!validation.register(req.body))return res.status(500).send('Invalid parameters');

  try {
    const {name, email ,password} = req.body;
    
    const oldUser = await user.findOne({email : email});
    if(oldUser) return res.status(409).send('User already exists');

    if(!/^[a-zA-Z0-9]{6,10}$/.test(password)) return res.status(403).send('Password must contain numbers and letter, between 6 and 10 characters')

    const hashPassword = await bcrypt.hash(password, 10);

    const User = await user.create({name,email,password : hashPassword});

    const transporter = mailSettings.transporter;
    const mailDetails = mailSettings.mailDetails(email);
    
    transporter.sendMail(mailDetails, (error, info) => {
      if (error) {
        console.log(error)
      } else {
        console.log('Email enviado');
      }
    });

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

    if(!User) return res.status(404).send('User not found');
    if(User.status === 'desactivated') return res.status(401).send('User desactivated');

    const isValid = await bcrypt.compare(password, User.password);

    if(isValid) {
      const token = jwt.sign({email: email, name : User.name, id : User._id, avatar:User.avatar}, "" + SECRET, { expiresIn : '12h'});
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

router.get('/feedbackUser', async (req,res)=>{
  const User = await user.find();
  const feedbacks = []
  for (let i = 0; i < User.length; i++){
    if(User[i].feedback) {
    feedbacks.push({name: User[i].name, avatar: User[i].avatar, comment: User[i].feedback})
    }
  } 
  res.status(200).send(feedbacks)
});

router.put('/account', async (req, res) =>{
  try {
    const {email, password} = req.body

    const User = await user.findOne({email : email});
    if(!User) return res.status(404).send('User not found');
    console.log(User.password)
    const Checked = await bcrypt.compare(password, User.password);
    if(Checked) {
      if(User.status === 'activated') return res.status(400).send('User already activated');
       User.status = 'activated'
       await User.save()
       res.status(200).send('Account activated')
    }else {
     res.status(403).send('Password not valid')
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
})


router.put('/accountGoogle', async (req, res) =>{
  try {
    const {email, password} = req.body
    const User = await user.findOne({email : email});
    if(!User) return res.status(404).send('User not found');
  
    if(User) {
      if(User.status === 'activated') return res.status(400).send('User already activated');
       User.status = 'activated'
       await User.save()
       res.status(200).send('Account activated')
    }else {
     res.status(403).send('Password not valid')
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
})



router.post('/newpassword', async (req, res) =>{

  const { email } = req.body
  try {
    const User = await user.findOne({email : email})
    const token = jwt.sign({ name : User.name, id : User._id}, "" + SECRET, { expiresIn : '10m'});
    const LinknewPassword="http://localhost:3000/NewPassword/"+token

    const transporter = mailSettings.transporter;
    const mailDetails = mailSettings.mailNewPassword(email, LinknewPassword);
    transporter.sendMail(mailDetails, (error, info) => {
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent');
      }
    });
    res.status(200).send("Email sent")
  } catch (error) {
    res.status(500).send("An error has ocurred")
  }

})

router.get('/feedback', async (req, res) =>{
  try {
    const {payment_id} = req.query
    
    return res.redirect(payment_id?`http://localhost:3000/mercadopago/${payment_id}`:'http://localhost:3000/mercadopago');
  } catch (error) {
    res.status(500).send(error.message)
  }
})

module.exports = router
