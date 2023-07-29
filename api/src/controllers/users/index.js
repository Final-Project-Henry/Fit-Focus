const googleAuth = require('./google-auth-controller')
const loginUser = require('./login-user-controller')
const refreshToken = require('./refresh-token-controller')
const registerUser = require('./register-user-controller')
const updateAvatar = require('./update-avatar-controller')

module.exports = {
  googleAuth,
  loginUser,
  refreshToken,
  registerUser,
  updateAvatar,
}
