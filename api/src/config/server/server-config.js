/* eslint-env node */
'use strict'

const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require('../mongoose/db')
const apiRoutes = require('../../routes')
const { notFound, errorHandler } = require('../../middleware/errorMiddleware')
const loadExercisesToDB = require('../../loadExercisesToDB')

// const { checkOrigin } = require('../../middleware/authMiddleware')
colors
// Server Config
dotenv.config()
connectDB().then(async () => {
  await loadExercisesToDB()
})

//apply middlewares
const app = express()

app.use(cors())
app.use(express.json())
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

//  Server Routes
app.use('/api', apiRoutes)

// app.use('/public/*', checkOrigin)
app.use('/public', express.static(path.join(__dirname, '../../../public')))

// if (process.env.NODE_ENV === 'production') {
//   app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../../../public', 'index.html')))
// }

// Server Middlewares
app.use(notFound)
app.use(errorHandler)

module.exports = app
