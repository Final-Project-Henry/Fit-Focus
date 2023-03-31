'use strict'

const asyncHandler = require('express-async-handler')
const sendEmailByNodemailer = require('../../utils/send-email-by-nodemailer')
const userRepository = require('../../shared/repositories/user-repository')
const { subjects, templates } = require('../../config/nodemailer')

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
  })

  if (!user) {
    res.status(400)
    throw new Error('No se pudo registrar el usuario.')
  }
  await sendEmailByNodemailer(email, subjects.register, templates('', {}).register)

  res.status(201).json(user)
})

module.exports = registerUser
