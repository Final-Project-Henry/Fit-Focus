'use strict'

const express = require('express')
const { protect } = require('../middleware/authMiddleware')
const { getExercisesWhenUserLogin, getExercises, getExerciseById } = require('../controllers/exercises')
const router = express.Router()

router.route('').post(protect, getExercises)
router.route('/login').get(protect, getExercisesWhenUserLogin)
router.route('/:id').get(protect, getExerciseById)

module.exports = router
