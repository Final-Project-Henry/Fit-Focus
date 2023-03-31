'use strict'

const mongoose = require('mongoose')

const verifyEmail = value => {
  let emailRex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (emailRex.test(value)) {
    return true
  }
  return false
}

const mongoIdValidator = _id => {
  return mongoose.Types.ObjectId.isValid(_id)
}

module.exports = {
  mongoIdValidator,
  verifyEmail,
}
