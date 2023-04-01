import { CommentExerciseInterface } from 'shared/interfaces/payloads-interfaces'

export default (data: CommentExerciseInterface[]) => {
  if (data.length < 3) return data
  const result = []
  const randomNumber = () => Math.floor(Math.random() * data.length)
  //fix it
  result.push(data[randomNumber()])
  result.push(data[randomNumber()])
  result.push(data[randomNumber()])

  return result
}
