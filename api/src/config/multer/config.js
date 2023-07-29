'use strict'

require('dotenv').config()
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const multer = require('multer')
const cloudinary = require('../cloudinary')

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: process.env.CLOUD_FOLDER_AVATAR,
  },
})

const upload = multer({ storage })

module.exports = { upload }
