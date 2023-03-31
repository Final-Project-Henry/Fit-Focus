'use strict'

const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')
const { registerUser, loginUser, refreshToken } = require('../controllers/users')

router.route('/').post(registerUser)
router.route('/login').post(loginUser)
router.route('/refresh-token').get(protect, refreshToken)

module.exports = router
