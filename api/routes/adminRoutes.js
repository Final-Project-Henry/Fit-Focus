const { Router } = require('express')
const user = require('../models/User.js')
const Exercise = require('../models/Exercise.js')

const router = Router()

router.get('/allusers', async (req, res) => {
  const Users = await user.find();
  res.status(200).json(Users)
});

router.delete('/deleteUser', async (req, res) => {
  try {
    const { id } = req.body
    await user.deleteOne({ _id: id })
    res.status(200).send('User deleted succesfully')
  } catch (error) {
    res.status(500).send(error.message)
  }
});

router.delete('/deleteExercise', async (req, res) => {
  try {
    const { id } = req.body
    await Exercise.deleteOne({ _id: id })
    res.status(200).send('Exercise deleted succesfully')
  } catch (error) {
    res.status(500).send(error.message)
  }
});

router.post('/addExercise', async (req, res) => {
  try {
    const { datos } = req.body
    const exercise = await Exercise.create(datos)
    res.status(200).json(exercise)
  } catch (error) {
    res.status(500).send(error.message)
  }
});


router.delete('/deleteUserComment', async (req, res) => {
  try {
    const { email, name } = req.body;
    const exer = await Exercise.findOne({ name: name });
    const newFeedback = exer.feedback.filter(e => e.email !== email);

    await Exercise.updateOne(
      { name: name },
      {
        feedback: newFeedback,
      }
    );

    res.status(200).send('Comment deleted successfully')
  } catch (error) {
    res.status(500).send(error.message)
  }
});

router.put("/changeUserInfo", async (req, res) => {
  try {
    const { _id, data } = req.body;

    await user.updateOne(
      { _id: _id },
      {
        name: data.name,
        email: data.email,
        plan: data.plan,
        status: data.status,
      }
    );
    res.status(200).send("The user profile info changed");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/changeInfo", async (req, res) => {
  try {
    const { _id, data } = req.body;

    const change = await user.updateOne(
      { _id: _id },
      {
        userinfo: data
      }
    );
    res.status(200).send("The user info changed");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;