const exerciseRepository = require('./shared/repositories/exercise-repository')
const exercises = require('./seederData')

const loader = async () => {
  const exercisesInDB = await exerciseRepository.getAllExercisesInDB()
  const verifyNames = exercisesInDB.map(e => e.name)

  const exercisesNotSavedInDB = exercises.filter(e => !verifyNames.includes(e.name))

  if (exercisesNotSavedInDB?.length > 0) {
    await exerciseRepository.createMany(exercisesNotSavedInDB)
    console.log('Exercises loaded successfully'.green.bold)
  } else {
    console.log('Exercises already loaded'.green.magenta)
  }
}

module.exports = loader
