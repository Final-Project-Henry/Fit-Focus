import { combineReducers } from '@reduxjs/toolkit'
import { userAuthGoogleReducer, userLoginReducer, userRefreshTokenReducer, userRegisterReducer } from './userReducer'

export default combineReducers({
  userAuthGoogle: userAuthGoogleReducer,
  userLogin: userLoginReducer,
  userRefreshToken: userRefreshTokenReducer,
  userRegister: userRegisterReducer,
})
