'use strict'

const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')
const { registerUser, loginUser, refreshToken, googleAuth, updateAvatar } = require('../controllers/users')
const { upload } = require('../config/multer/config')
const { AVATAR_FIELD } = require('../config/multer/fields')

router.route('/').post(registerUser)
router.route('/login').post(loginUser)
router.route('/google').post(googleAuth)
router.route('/refresh-token').get(protect, refreshToken)
router.route('/avatar').put(protect, upload.single(AVATAR_FIELD), updateAvatar)

module.exports = router
