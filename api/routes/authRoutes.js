const { Router } = require('express');
const user = require('../models/User.js');
const exercise = require('../models/Exercise.js');
const bcrypt = require('bcrypt');
const router = Router();

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
   await user.updateOne({email : email}, {
         feedback : comment
   });
  res.status(200).send('Feedback sent')
  } catch (error) {
   res.status(500).send(error.message)
  }
});

router.get('/getroutine', async (req, res)=> {
  try {
    const Exercises = await exercise.find().limit(5)
    res.status(200).send(Exercises)
  } catch (error) {
   res.status(500).send(error.message)
  }
});

router.put('/changepassword', async (req, res) => {
 try {
    const {id} = req.user
    const {password} = req.body 
    const hashPassword = await bcrypt.hash(password, 10);
    await user.updateOne({_id : id}, {
      password : hashPassword
    });
    res.status(200).send('Password changed succesfully')
 } catch (error) {
   res.status(500).send(error.message)
 }
});

router.delete('/delete', async (req, res)=>{
  try {
      const {id} = req.user
      await user.deleteOne({_id : id});
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
      fav : name
     }
   });
   res.status(200).send('Exercise added to fav')
});

module.exports = router