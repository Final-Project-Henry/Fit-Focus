'use strict'

const Exercise = require('../../config/mongoose/models/exercisesModel')

/**
 * @param {Array} exercises
 * @returns all new exercises
 */
const createMany = async exercises => {
  return Exercise.insertMany(exercises)
}

module.exports = {
  createMany,
}
