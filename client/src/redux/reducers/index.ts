import { combineReducers } from '@reduxjs/toolkit'
import { userLoginReducer, userRefreshTokenReducer } from './userReducer'

export default combineReducers({
  userLogin: userLoginReducer,
  userRefreshToken: userRefreshTokenReducer,
})
