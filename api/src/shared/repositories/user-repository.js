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
 * @param {String} id
 * @returns user by id
 */
const findUserById = id => {
  return User.findById(id)
}

/**
 * @param {Object} user
 * @returns User
 */
const createUser = async user => {
  return User.create(user)
}

/**
 * @param {Object} user
 * @returns User
 */
const saveUser = async user => {
  return user.save()
}

module.exports = {
  findUserByEmail,
  findUserById,
  createUser,
  saveUser,
}
