import { RootState as DefaultRootState } from 'redux/store'
import {
  exerciseByIdInterface,
  exercisesByFiltersInterface,
  exercisesLoginInterface,
  newsLoginInterface,
  userAuthGoogleInterface,
  userLoginInterface,
  userRegisterInterface,
} from './reducers'
export * from './payloads'
export * from './reducers'
export * from './dataToSend'

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
  exercisesLogin?: exercisesLoginInterface
  exercisesByFilters?: exercisesByFiltersInterface
  exerciseById?: exerciseByIdInterface
  newsLogin?: newsLoginInterface
}
