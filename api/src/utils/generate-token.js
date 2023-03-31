/* eslint-env node */
const jwt = require('jsonwebtoken')

const generateToken = userInfo => {
  const token = jwt.sign(userInfo, process.env.JWT_SECRET, {
    expiresIn: '12h',
  })

  return token
}

module.exports = generateToken
