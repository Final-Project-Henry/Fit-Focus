'use strict'

const asyncHandler = require('express-async-handler')
const exerciseRepository = require('../../shared/repositories/exercise-repository')
const { mongoIdValidator } = require('../../shared/validations/validationInputs')

// @desc    GET exercise by id
// @route   GET /api/exercises/:id
// @access  Private
const getExerciseById = asyncHandler(async (req, res) => {
  const { id } = req.params

  if (!mongoIdValidator(id)) {
    res.status(400)
    throw new Error('El id es invalido.')
  }

  const exercise = await exerciseRepository.findExerciseById(id)

  if (exercise.length < 1) {
    res.status(500)
    throw new Error('Error al buscar el ejercicio en la DB.')
  }

  res.status(200).json(exercise[0])
})

module.exports = getExerciseById
