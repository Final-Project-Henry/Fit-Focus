/* eslint-env node */
'use strict'

const asyncHandler = require('express-async-handler')
const userRepository = require('../../shared/repositories/user-repository')
const generateToken = require('../../utils/generate-token')
const { deleteCloudinaryImage } = require('../../utils/manage-cloudinary-functions')

const updateAvatar = asyncHandler(async (req, res) => {
  const file = req.file
  const userId = req.user._id
  let oldAvatar

  if (!file) {
    res.status(400)
    throw new Error('Ocurrio un error al subir la foto.')
  }

  const user = await userRepository.findUserById(userId)

  if (!user) {
    res.status(400)
    throw new Error('No se encontro el usuario en la base de datos.')
  }

  if (
    user.avatar !==
    'https://res.cloudinary.com/dm0fwscsy/image/upload/v1690505444/Fit-Focus/assets/jzbdj0ye09xxhe5rwf0p.jpg'
  ) {
    oldAvatar = user.avatar
  }

  user.avatar = file.path

  const userUpdate = await userRepository.saveUser(user)

  if (!userUpdate) {
    res.status(400)
    throw new Error('No se pudo actualizar el avatar del usuario.')
  }

  if (oldAvatar) {
    await deleteCloudinaryImage(oldAvatar, 'avatar')
  }

  const token = generateToken({ ...userUpdate._doc })
  res.status(201).json({ token })
})

module.exports = updateAvatar
