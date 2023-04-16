import { combineReducers } from '@reduxjs/toolkit'
import { userLoginReducer, userRefreshTokenReducer, userRegisterReducer } from './userReducer'

export default combineReducers({
  userLogin: userLoginReducer,
  userRefreshToken: userRefreshTokenReducer,
  userRegister: userRegisterReducer,
})
