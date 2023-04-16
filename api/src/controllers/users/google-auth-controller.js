/* eslint-env node */
'use strict'

const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const userRepository = require('../../shared/repositories/user-repository')
const { verifyEmail } = require('../../shared/validations/validationInputs')
const generateToken = require('../../utils/generate-token')
const sendEmailByNodemailer = require('../../utils/send-email-by-nodemailer')
const { subjects, templates } = require('../../config/nodemailer')

const googleAuth = asyncHandler(async (req, res) => {
  const { token } = req.body

  const { email, name, picture } = jwt.decode(token)

  if (!verifyEmail(email)) {
    res.status(400)
    throw new Error('El email es inválido.')
  }

  let userExist = await userRepository.findUserByEmail(email)

  if (!userExist) {
    const newUser = await userRepository.createUser({
      name,
      email,
      avatar: picture,
      password: '123456789',
      lastLogin: Date.now(),
    })

    if (!newUser) {
      res.status(400)
      throw new Error('No se pudo registrar el usuario.')
    }

    if (process.env.NODE_ENV !== 'development') {
      await sendEmailByNodemailer(email, subjects.register, templates('', {}).register)
    }

    userExist = newUser
  } else {
    if (userExist.status !== 'active') {
      res.status(400)
      throw new Error('El usuario esta inactivo.')
    }

    userExist.lastLogin = Date.now()

    await userRepository.saveUser(userExist)
  }

  const userInfo = {
    _id: userExist._id,
    name: userExist.name,
    email: userExist.email,
    avatar: userExist.avatar,
    plan: userExist.plan,
    isAdmin: userExist.isAdmin,
    lastLogin: userExist.lastLogin,
    routine: userExist.routine,
    feedback: userExist.feedback,
    fav: [],
    status: userExist.status,
    isSuper: userExist.isSuper,
  }

  const newToken = generateToken(userInfo)

  res.status(200).json({ token: newToken })
})

module.exports = googleAuth
