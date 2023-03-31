'use strict'

const express = require('express')
const router = express.Router()
const { getTestAPI } = require('../controllers/comments')

router.route('/').get(getTestAPI)

module.exports = router
