const  Exercise = require('./models/Exercise.js')
const ejercicio = require('./Exercises/exercises.js')


async function loader(){
    try {
    const push = await Exercise.insertMany(ejercicio)
    console.log('exercisesInDB')
   
    } catch(err){
      console.log('EXERCISE ALREADY LOADED')
      return 
   
    }
  }

module.exports = loader




