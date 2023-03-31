const exerciseRepository = require('./shared/repositories/exercise-repository')
const exercises = require('./seederData')

const loader = async () => {
  try {
    await exerciseRepository.createMany(exercises)
    console.log('Exercises loaded successfully'.green.bold)
  } catch (err) {
    console.log('Exercises already loaded'.red.bold)
    return
  }
}

module.exports = loader
