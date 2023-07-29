require('dotenv').config()
const cloudinary = require('../config/cloudinary')

const folders = {
  avatar: process.env.CLOUD_FOLDER_AVATAR,
}

const deleteCloudinaryImage = async (url, folder) => {
  if (!url) return
  const public_id = url.split('/').pop().split('.')[0]
  await cloudinary.uploader.destroy(`${folders[folder]}/${public_id}`, function (error, result) {
    console.log('result', result)
    console.log('error', error)
  })
}

module.exports = {
  deleteCloudinaryImage,
}
