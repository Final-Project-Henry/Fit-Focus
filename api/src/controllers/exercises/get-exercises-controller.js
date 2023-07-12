'use strict'

const asyncHandler = require('express-async-handler')
const exerciseRepository = require('../../shared/repositories/exercise-repository')

// @desc    POST all exercise by filters
// @route   POST /api/exercises
// @access  Private
const getExercises = asyncHandler(async (req, res) => {
  const { page = 1, limit = 15, sort = 'name-desc' } = req.query
  const { filters } = req.body

  /*
  {
    genre: ['man','woman','both'],
    muscles: ['upper_body', 'lower_body', 'functional', 'abs', 'stretching'],
    difficulty: [1,2,3],
    needsAccessories: true||false||null,
    plan: 'free'||'premium',
  }
  */

  const newLimit = Number(limit)
  const newSkip = page > 1 ? Number(page - 1) : 0

  const [{ exercises, total }] = await exerciseRepository.findExercises(newSkip, newLimit, sort, filters)

  if (exercises.length < 1) {
    res.status(500)
    throw new Error('No se encontraron ejercicios.')
  }

  const totalPages = Math.ceil(total / newLimit)

  res.status(200).json({
    data: exercises,
    totalDocs: total,
    currentPage: newSkip + 1,
    nextPage: page < totalPages ? `?page=${newSkip + 2}&limit=${newLimit}&sort=${sort}` : null,
    totalPages,
  })
})

module.exports = getExercises
