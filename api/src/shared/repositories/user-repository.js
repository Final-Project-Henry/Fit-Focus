'use strict'

const User = require('../../config/mongoose/models/usersModel')

/**
 * @param {String} email
 * @returns user by email
 */
const findUserByEmail = async email => {
  return User.findOne({ email })
}

/**
 * @param {Object} user
 * @returns User
 */
const createUser = async user => {
  return User.create(user)
}

module.exports = {
  findUserByEmail,
  createUser,
}
