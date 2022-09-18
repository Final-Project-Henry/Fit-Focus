const { Router } = require('express');
const user = require('../models/User.js')
const router = Router();

router.get('/getexercises', async (req,res) => { // Ruta de prueba. 
   const {email} = req.user
   const User = await user.findOne({email : email}).select('plan')
   
res.status(200).send(User)
});

router.put('/userinfo', async (req, res) =>{ // Ruta para actualizar la informacion del usuario para crear una rutina(PREMIUM)
try {
   const {email} = req.user
   const {genre, age, weight, height, goal, equipment, experience} = req.body

   const check = await user.findOne({email : email}).select('userinfo');
   if(check.userinfo.length !== 0) {
      return res.status(409).send('Info already added ')
   }

    await user.updateOne({email : email}, {
      $push : {
        userinfo : {genre, age, weight, height, goal, equipment, experience}
      }
   })
   res.status(200).send('User updated')
} catch (error) {
   res.status(500).send(error.message)
}
});

router.put('/userfeedback', async (req, res) => {
  try {
   const {comment, email} = req.body

   const check = await user.findOne({email : email}).select('feedback')
   if(check.feedback.length !== 0) {
     return res.status(409).send('Feedback already added')
   } 
   await user.updateOne({email : email}, {
      $push : {
         feedback : {feedback : comment}
      }
   });
  res.status(200).send('Feedback sent')
  } catch (error) {
   res.status(500).send(error.message)
  }
});

module.exports = router