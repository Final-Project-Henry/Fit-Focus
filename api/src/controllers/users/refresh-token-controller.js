'use strict'

const asyncHandler = require('express-async-handler')
const generateToken = require('../../utils/generate-token')

// @desc    GET refreshToken
// @route   GET /api/users/refreshtoken
// @access  Private/Super
const refreshToken = asyncHandler(async (req, res) => {
  let token = null

  const lastLoginDate = new Date(req.user.lastLogin)
  const todayDate = new Date()

  const isExpired = todayDate.getTime() - lastLoginDate.getTime() >= 43200000

  if (isExpired) {
    console.log('Token expirado'.yellow)
    const userInfo = {
      ...req.user._doc,
    }
    token = generateToken(userInfo)
  }

  res.status(200).json({ msg: 'Token Refrescado.', token })
})

module.exports = refreshToken
