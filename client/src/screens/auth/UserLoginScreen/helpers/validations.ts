import { verifyEmail } from 'shared/validations/validationInputs'
import { DataLogin } from '../helpers/interfaces'

export const inputsValidation = (userInfo: DataLogin) => {
  return verifyEmail(userInfo.email) && userInfo.password.length > 8
}
