/* eslint-env node */
'use strict'

const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false)
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // useCreateIndex: true,
    })
    console.log(
      `MongoDB Connected: ${conn.connection.host === 'localhost' ? 'localhost' : 'MongoDB Atlas'}`.cyan.underline,
    )
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

module.exports = connectDB
