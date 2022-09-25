const { Router } = require('express');
const user = require('../models/User.js');
const exercise = require('../models/Exercise.js');
const bcrypt = require('bcrypt');
const router = Router();
const get_Routine = require('../getRoutine.js');
const validation = require('../validations/validations');
const mercadopago = require('../service/mercadoPago.js');
const {get_preference} = require('../additional/preference.js');
const mailSettings = require('../additional/nodemailer');

router.put('/userinfo', async (req, res) => { // Ruta para actualizar la informacion del usuario para crear una rutina(PREMIUM)
  if(!validation.userinfo(req.body))res.status(500).send('Invalid info');

  try {
    const { email } = req.user
    const { genre, age, weight, height, goal, equipment, experience } = req.body

    const check = await user.findOne({ email: email }).select('userinfo');
    if (check.userinfo.length !== 0) {
      return res.status(409).send('Info already added ')
    }

    await user.updateOne({ email: email }, {
      $push: {
        userinfo: { genre, age, weight, height, goal, equipment, experience }
      }
    })
    res.status(200).send('User updated')
  } catch (error) {
    res.status(500).send(error.message)
  }
});

router.put('/userfeedback', async (req, res) => {
  try {
    const { comment, email } = req.body

    await user.updateOne({ email: email }, {
      feedback: comment
    });
    res.status(200).send('Feedback sent')
  } catch (error) {
    res.status(500).send(error.message)
  }
});

router.get('/getroutine', async (req, res) => {
  const { email } = req.user;

  try {
    const exercises = await exercise.find();
    const check = await user.findOne({ email: email }).select('userinfo');
    const routine = get_Routine(check.userinfo[0], exercises);
    
    await user.updateOne({ email: email }, {
        routines: routine.exercises
    });
    res.status(200).json(routine);
  } catch (error) {
    res.status(500).send(error.message)
  }
});

router.put('/changeinfo', async (req, res) => {
 try {
    const {id} = req.user
    const {prop, value} = req.query
    if(prop === 'password'){
      const hashPassword = await bcrypt.hash(value, 10);
      await user.updateOne({_id : id}, {
        [prop] : hashPassword 
      });
    } else {
      await user.updateOne({_id : id}, {
        [prop] : value
      })
    }
    res.status(200).send('Info changed succesfully')
  } catch (error) {
    res.status(500).send(error.message)
  }
});

router.delete('/delete', async (req, res) => {
  try {
    const { id, email} = req.user
    await user.updateOne({ _id: id }, {
      status : 'desactivated'
    });
    const transporter = mailSettings.transporter;
    const mailDetails = mailSettings.mailDelete(email);
    transporter.sendMail(mailDetails, (error, info) => {
      if (error) {
        console.log(error)
      } else {
        console.log('Email enviado');
      }
    });
    res.status(200).send('Deleted succesfully');
  } catch (error) {
    res.status(500).send(error.message)
  }
});

router.put('/addfav', async (req, res) => {
  const {id} = req.user
  const {name} = req.body
   await user.updateOne({_id : id}, {
     $push : {
      fav : {name: name}
     }
   });
   res.status(200).send('Exercise added to fav')
});

router.get('/profile', async (req, res) => {
  const {id} = req.user
  const User = await user.findOne({_id : id});
  res.status(200).send(User)
});

router.get('/payment', async (req, res) => {
  try {
    const {email,name,id} = req.user
    const preferences = get_preference(name,email,id);
  const response = await mercadopago.preferences.create(preferences);
  res.status(200).json({id: response.body.id, collector_id : response.body.collector_id, response});
  } catch (error) {
    res.status(500).send(error.message)
  }
});

router.get('/confirmation', async (req, res) =>{
  try {
    const {payment_id} = req.query
    const {id} = req.user
    const response = await mercadopago.payment.findById(payment_id);
    if(response.response.additional_info.payer.last_name === id && response.body.status === 'approved'){
      await user.updateOne({_id : id},{
       plan : 'premium'
      });
      res.status(200).send('Ya eres premium!!')
    }else res.status(403).send('Pago rechazado')
  } catch (error) {
    res.status(500).send(error.message)
  }
})

module.exports = router
