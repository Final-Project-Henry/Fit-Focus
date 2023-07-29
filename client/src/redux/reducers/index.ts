import { combineReducers } from '@reduxjs/toolkit'
import {
  avatarUpdateReducer,
  userAuthGoogleReducer,
  userLoginReducer,
  userRefreshTokenReducer,
  userRegisterReducer,
} from './userReducer'
import { exerciseByIdReducer, exercisesByFiltersReducer, exercisesLoginReducer } from './exercisesReducer'
import { newsLoginReducer, searchNewsReducer } from './newsReducer'

export default combineReducers({
  userAuthGoogle: userAuthGoogleReducer,
  userLogin: userLoginReducer,
  userRefreshToken: userRefreshTokenReducer,
  userRegister: userRegisterReducer,
  exercisesLogin: exercisesLoginReducer,
  exercisesByFilters: exercisesByFiltersReducer,
  exerciseById: exerciseByIdReducer,
  newsLogin: newsLoginReducer,
  searchNewsList: searchNewsReducer,
  avatarUpdate: avatarUpdateReducer,
})
