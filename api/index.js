/* eslint-env node */
const app = require('./app.js')
require('dotenv').config()
const { connection } = require('./db.js')
const dbLoader = require('./addDB')

const { PORT } = process.env

connection
  .syncIndexes()
  .then(async () => {
    await dbLoader()
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening on PORT: ${PORT}`)
    })
  })
