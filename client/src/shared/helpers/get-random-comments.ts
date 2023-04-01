export default (data: any) => {
  const comments = Object.keys(data)
  const result: any = []
  const result2 = []
  let index: number

  while (result.length < 3) {
    index = Math.floor(Math.random() * comments.length)
    if (!result.includes(comments[index])) {
      result.push(comments[index])
    }
  }

  for (let i = 0; i < result.length; i++) {
    result2.push(data[result[i]])
  }

  return result2
}
