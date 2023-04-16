/* eslint-env node */
'use strict'

const asyncHandler = require('express-async-handler')
const sendEmailByNodemailer = require('../../utils/send-email-by-nodemailer')
const userRepository = require('../../shared/repositories/user-repository')
const { subjects, templates } = require('../../config/nodemailer')
const generateToken = require('../../utils/generate-token')

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExist = await userRepository.findUserByEmail(email)

  if (userExist) {
    res.status(400)
    throw new Error('Ya existe un usuario asociado a este email.')
  }

  const user = await userRepository.createUser({
    name,
    email,
    password,
    lastLogin: Date.now(),
  })

  if (!user) {
    res.status(400)
    throw new Error('No se pudo registrar el usuario.')
  }

  if (process.env.NODE_ENV !== 'development') {
    await sendEmailByNodemailer(email, subjects.register, templates('', {}).register)
  }
  const userInfo = {
    _id: user._id,
    name: user.name,
    email: user.email,
    password: user.password,
    avatar: user.avatar,
    plan: user.plan,
    isAdmin: user.isAdmin,
    lastLogin: user.lastLogin,
    routine: user.routine,
    feedback: user.feedback,
    fav: [],
    status: user.status,
    isSuper: user.isSuper,
  }

  const token = generateToken(userInfo)

  res.status(201).json({ token })
})

module.exports = registerUser
