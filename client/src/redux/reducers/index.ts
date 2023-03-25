import { combineReducers } from '@reduxjs/toolkit'
import { userProfileReducer } from './userReducer'

export default combineReducers({
  userProfile: userProfileReducer,
})
