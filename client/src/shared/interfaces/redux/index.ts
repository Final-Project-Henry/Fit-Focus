import { RootState as DefaultRootState } from 'redux/store'
import { userAuthGoogleInterface, userLoginInterface, userRegisterInterface } from './reducers'
export * from './payloads'
export * from './reducers'

export interface PayloadError extends Error {
  response?: {
    data?: {
      message?: string
    }
    status?: number
  }
}

export type RootState = DefaultRootState & {
  userLogin?: userLoginInterface
  userRegister?: userRegisterInterface
  userAuthGoogle?: userAuthGoogleInterface
}
