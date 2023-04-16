import { verifyEmail } from 'shared/validations/validationInputs'
import { DataLogin, DataRegister } from '../helpers/interfaces'

export const inputsValidation = (userInfo: DataLogin) => {
  return verifyEmail(userInfo.email) && userInfo.password.length > 8
}
export const inputsRegisterValidation = (userRegisterInfo: DataRegister) => {
  return (
    verifyEmail(userRegisterInfo.email) && userRegisterInfo.password.length > 8 && userRegisterInfo.name.length >= 3
  )
}
