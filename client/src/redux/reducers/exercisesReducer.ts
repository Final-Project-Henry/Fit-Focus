import { PayloadAction } from '@reduxjs/toolkit'
import * as types from '../constants/exercisesConstants'

export const exercisesLoginReducer = (state = {}, action: PayloadAction) => {
  switch (action.type) {
    case types.GET_LOGIN_EXERCISES_REQUEST:
      return { loadingLoginExercises: true }
    case types.GET_LOGIN_EXERCISES_SUCCESS:
      return {
        loadingLoginExercises: false,
        successLoginExercises: true,
        loginExercises: action.payload,
      }
    case types.GET_LOGIN_EXERCISES_FAIL:
      return {
        loadingLoginExercises: false,
        errorLoginExercises: action.payload,
      }
    case types.GET_LOGIN_EXERCISES_RESET:
      return {}
    default:
      return state
  }
}

export const exercisesByFiltersReducer = (state = {}, action: PayloadAction) => {
  switch (action.type) {
    case types.EXERCISES_BY_FILTERS_REQUEST:
      return { loadingExercisesByFilters: true }
    case types.EXERCISES_BY_FILTERS_SUCCESS:
      return {
        loadingExercisesByFilters: false,
        successExercisesByFilters: true,
        exercisesByFiltersList: action.payload,
      }
    case types.EXERCISES_BY_FILTERS_FAIL:
      return {
        loadingExercisesByFilters: false,
        errorExercisesByFilters: action.payload,
      }
    case types.EXERCISES_BY_FILTERS_RESET:
      return {}
    default:
      return state
  }
}

export const exerciseByIdReducer = (state = {}, action: PayloadAction) => {
  switch (action.type) {
    case types.EXERCISE_BY_ID_REQUEST:
      return { loadingExerciseById: true }
    case types.EXERCISE_BY_ID_SUCCESS:
      return {
        loadingExerciseById: false,
        successExerciseById: true,
        exerciseById: action.payload,
      }
    case types.EXERCISE_BY_ID_FAIL:
      return {
        loadingExerciseById: false,
        errorExerciseById: action.payload,
      }
    case types.EXERCISE_BY_ID_RESET:
      return {}
    default:
      return state
  }
}
