const {Router} = require('express')
const user = require('../models/User.js')
const Exercise = require('../models/Exercise.js')

const router = Router()

router.get('/allusers', async (req, res) => {
  const Users = await user.find();
  res.status(200).json(Users)
});

router.delete('/deleteUser', async (req,res)=>{
  try {
    const {id} = req.body
    await user.deleteOne({_id : id})
    res.status(200).send('User deleted succesfully')
  } catch (error) {
    res.status(500).send(error.message)
  }
});

router.delete('/deleteExercise', async (req,res)=>{
  try {
    const {id} = req.body
    await Exercise.deleteOne({_id : id})
    res.status(200).send('Exercise deleted succesfully')
  } catch (error) {
    res.status(500).send(error.message)
  }
});

router.post('/addExercise', async (req,res) => {
  try {
    const {datos} = req.body
    const exercise = await Exercise.create(datos)
    res.status(200).json(exercise)
  } catch (error) {
    res.status(500).send(error.message)
  }
});

module.exports = router;