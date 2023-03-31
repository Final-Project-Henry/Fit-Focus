'use strict'

const asyncHandler = require('express-async-handler')
//Aqui se importa el repositorio

// @desc    GET countries by name
// @route   GET /api/country/name/:keyword
// @access  Private
const getTestAPI = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Funciona' })
})

module.exports = getTestAPI
