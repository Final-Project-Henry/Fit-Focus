'use strict'

const express = require('express')
const router = express.Router()
const { registerUser } = require('../controllers/users')

router.route('/').post(registerUser)

module.exports = router
