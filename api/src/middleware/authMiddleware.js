/* eslint-env node */
'use strict'

const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const userRepository = require('../shared/repositories/user-repository')

const protect = asyncHandler(async (req, res, next) => {
  let token

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1]

      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      req.user = await userRepository.findUserById(decoded._id)

      next()
    } catch (error) {
      res.status(401)
      throw new Error('No Autorizado, Token Requerido')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('No Autorizado para esta acción.')
  }
})

module.exports = {
  protect,
}
