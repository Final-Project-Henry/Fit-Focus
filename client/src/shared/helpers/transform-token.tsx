import { sha256 } from 'js-sha256'

export const transformToken = (token: string) => {
  const salt = 'mysecret'
  const hashedToken = sha256(token + salt)
  const transformedToken =
    hashedToken.slice(0, 10) + token + hashedToken.slice(10)
  return transformedToken
}

export const restoreToken = (transformedToken: string) => {
  const salt = 'mysecret'
  const token = transformedToken.slice(10, -10)
  const hashedToken = sha256(token + salt)
  const isValid =
    transformedToken.slice(0, 10) === hashedToken.slice(0, 10) &&
    transformedToken.slice(-10) === hashedToken.slice(-10)
  return isValid ? token : null
}
