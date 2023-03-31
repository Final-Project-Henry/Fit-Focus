/* eslint-env node */
'use strict'

const asyncHandler = require('express-async-handler')
const userRepository = require('../../shared/repositories/user-repository')
const { verifyEmail } = require('../../shared/validations/validationInputs')
const generateToken = require('../../utils/generate-token')

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  if (!verifyEmail(email)) {
    res.status(400)
    throw new Error('El email es inválido.')
  }

  const user = await userRepository.findUserByEmail(email)

  if (!user) {
    res.status(404)
    throw new Error('No se encontro un usuario este email.')
  }
  const isCorrectPass = await user.matchPassword(password)

  if (!isCorrectPass) {
    res.status(400)
    throw new Error('Contraseña incorrecta.')
  }

  if (user.status !== 'active') {
    res.status(400)
    throw new Error('El usuario esta inactivo.')
  }

  user.lastLogin = Date.now()

  await userRepository.saveUser(user)

  const userInfo = {
    _id: user._id,
    name: user.name,
    email: user.email,
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

  res.status(200).json({ token })
})

module.exports = loginUser
