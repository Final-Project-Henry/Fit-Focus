const { Router } = require('express')
const user = require('../config/mongoose/models/usersModel')
const Exercise = require('../config/mongoose/models/exercisesModel')
const Comment = require('../config/mongoose/models/qaAdminModel')
const mailSettings = require('../additional/nodemailer')

const router = Router()

router.get('/allusers', async (req, res) => {
  const Users = await user.find()
  res.status(200).json(Users)
})

router.delete('/deleteUser', async (req, res) => {
  try {
    const { id } = req.body
    await user.deleteOne({ _id: id })
    res.status(200).send('User deleted succesfully')
  } catch (error) {
    res.status(500).send(error.message)
  }
})

router.delete('/deleteExercise', async (req, res) => {
  try {
    const { id } = req.body
    await Exercise.deleteOne({ _id: id })
    res.status(200).send('Exercise deleted succesfully')
  } catch (error) {
    res.status(500).send(error.message)
  }
})

router.post('/addExercise', async (req, res) => {
  try {
    const { datos } = req.body
    const exercise = await Exercise.create(datos)
    res.status(200).json(exercise)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

router.delete('/deleteUserComment', async (req, res) => {
  try {
    const { email, name } = req.body
    const exer = await Exercise.findOne({ name: name })
    const newFeedback = exer.feedback.filter(e => e.email !== email)

    await Exercise.updateOne(
      { name: name },
      {
        feedback: newFeedback,
      },
    )

    res.status(200).send('Comment deleted successfully')
  } catch (error) {
    res.status(500).send(error.message)
  }
})

router.put('/changeUserInfo', async (req, res) => {
  try {
    const { _id, data } = req.body
    const oldProfile = await user.findById(_id)

    await user.updateOne(
      { _id: _id },
      {
        name: data.name ? data.name : oldProfile.name,
        email: data.email ? data.email : oldProfile.email,
        plan: data.plan ? data.plan : oldProfile.plan,
        status: data.status ? data.status : oldProfile.status,
      },
    )
    res.status(200).send('The user profile info changed')
  } catch (error) {
    res.status(500).send(error.message)
  }
})

router.put('/changeInfo', async (req, res) => {
  try {
    const { _id, data } = req.body
    const oldFeedback = await user.findById(_id)
    const { genre, age, weight, height, goal, experience } = data
    const newFeedback = {
      genre: genre ? genre : oldFeedback.userinfo[0].genre,
      age: age ? age : oldFeedback.userinfo[0].age,
      weight: weight ? weight : oldFeedback.userinfo[0].weight,
      height: height ? height : oldFeedback.userinfo[0].height,
      goal: goal ? goal : oldFeedback.userinfo[0].goal,
      experience: experience ? experience : oldFeedback.userinfo[0].experience,
    }
    const change = await user.updateOne(
      { _id: _id },
      {
        userinfo: newFeedback,
      },
    )
    res.status(200).send('The user info changed')
  } catch (error) {
    res.status(500).send(error.message)
  }
})

router.put('/change_exercise', async (req, res) => {
  try {
    const { _id, data } = req.body
    const { name, difficulty, muscles, genre, video, premium, description } = data
    const oldInfo = await Exercise.findById(_id)

    await Exercise.updateOne(
      { _id: _id },
      {
        name: name ? name : oldInfo.name,
        difficulty: difficulty ? difficulty : oldInfo.difficulty,
        muscles: muscles ? muscles : oldInfo.muscles,
        genre: genre ? genre : oldInfo.genre,
        video: video ? video : oldInfo.video,
        premium: premium ? premium : oldInfo.premium,
        description: description ? description : oldInfo.description,
      },
    )

    res.status(200).send('The exercise info changed')
  } catch (error) {
    res.status(500).send(error.message)
  }
})

router.get('/questions', async (req, res) => {
  try {
    const questions = await Comment.find()
    res.status(200).send(questions)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

router.put('/response_ask', async (req, res) => {
  try {
    const { email, response } = req.body
    const question = await Comment.findOne({ email: email })

    const transporter = mailSettings.transporter
    const mailDetails = mailSettings.mailResponse(email, question.name, response, question.comment)
    transporter.sendMail(mailDetails, (error, info) => {
      if (error) {
        console.log(error)
      } else {
        console.log('Email enviado')
      }
    })

    await Comment.deleteOne({ email: email })

    res.status(201).send('success')
  } catch (error) {
    res.status(500).send(error.message)
  }
})

module.exports = router
