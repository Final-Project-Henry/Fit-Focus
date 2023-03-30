const ejercicio = require('./Exercises/exercises.js')
const exerciseRepository = require('./shared/repositories/exercise-repository')

const loader = async () => {
  try {
    await exerciseRepository.createMany(ejercicio)
    console.log('Exercises loaded successfully'.green.bold)
  } catch (err) {
    console.log('Exercises already loaded'.red.bold)
    return
  }
}

module.exports = loader
