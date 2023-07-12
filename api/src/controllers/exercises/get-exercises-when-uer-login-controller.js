'use strict'

const asyncHandler = require('express-async-handler')
const exerciseRepository = require('../../shared/repositories/exercise-repository')

// @desc    GET exercises for home page
// @route   GET /api/exercises/login
// @access  Private
const getExercisesWhenUserLogin = asyncHandler(async (req, res) => {
  const weekExercises = await exerciseRepository.findWeekExercises()
  const topExercises = await exerciseRepository.findTopExercises()

  if (weekExercises.length < 1 || topExercises.length < 1) {
    res.status(500)
    throw new Error('Error al buscar los ejercicios en la DB.')
  }

  res.status(200).json({
    week: weekExercises,
    top: topExercises,
  })
})

module.exports = getExercisesWhenUserLogin
