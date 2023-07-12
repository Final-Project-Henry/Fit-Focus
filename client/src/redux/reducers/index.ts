import { combineReducers } from '@reduxjs/toolkit'
import { userAuthGoogleReducer, userLoginReducer, userRefreshTokenReducer, userRegisterReducer } from './userReducer'
import { exerciseByIdReducer, exercisesByFiltersReducer, exercisesLoginReducer } from './exercisesReducer'

export default combineReducers({
  userAuthGoogle: userAuthGoogleReducer,
  userLogin: userLoginReducer,
  userRefreshToken: userRefreshTokenReducer,
  userRegister: userRegisterReducer,
  exercisesLogin: exercisesLoginReducer,
  exercisesByFilters: exercisesByFiltersReducer,
  exerciseById: exerciseByIdReducer,
})
