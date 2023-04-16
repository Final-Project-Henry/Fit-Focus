import { UserInfoInterface } from './payloads'

//TYPES
export type userLoginInterface = {
  loadingUserLogin?: boolean
  successUserLogin?: boolean
  errorUserLogin?: string
  userInfo?: UserInfoInterface
}
export type userRegisterInterface = {
  loadingUserRegister?: boolean
  successUserRegister?: boolean
  errorUserRegister?: string
}
export type userAuthGoogleInterface = {
  loadingUserAuthGoogle?: boolean
  successUserAuthGoogle?: boolean
  errorUserAuthGoogle?: string
}
