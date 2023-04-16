import { PayloadAction } from '@reduxjs/toolkit'
import * as types from '../constants/userConstants'

export const userLoginReducer = (state = {}, action: PayloadAction) => {
  switch (action.type) {
    case types.GET_USER_LOGIN_REQUEST:
      return { loadingUserLogin: true }
    case types.GET_USER_LOGIN_SUCCESS:
      return {
        loadingUserLogin: false,
        successUserLogin: true,
        userInfo: action.payload,
      }
    case types.GET_USER_LOGIN_FAIL:
      return {
        loadingUserLogin: false,
        errorUserLogin: action.payload,
      }
    case types.GET_USER_LOGOUT:
      localStorage.removeItem('token-user')
      return {
        userInfo: null,
      }
    default:
      return state
  }
}

export const userRefreshTokenReducer = (state = {}, action: PayloadAction) => {
  switch (action.type) {
    case types.USER_REFRESH_TOKEN_REQUEST:
      return { loadingRefreshToken: true }
    case types.USER_REFRESH_TOKEN_SUCCESS:
      return {
        loadingRefreshToken: false,
        successRefreshToken: true,
      }
    case types.USER_REFRESH_TOKEN_FAIL:
      return {
        loadingRefreshToken: false,
        errorRefreshToken: action.payload,
      }
    case types.USER_REFRESH_TOKEN_RESET:
      return {}
    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action: PayloadAction) => {
  switch (action.type) {
    case types.USER_REGISTER_REQUEST:
      return { loadingUserRegister: true }
    case types.USER_REGISTER_SUCCESS:
      return {
        loadingUserRegister: false,
        successUserRegister: true,
      }
    case types.USER_REGISTER_FAIL:
      return {
        loadingUserRegister: false,
        errorUserRegister: action.payload,
      }
    case types.USER_REGISTER_RESET:
      return {}
    default:
      return state
  }
}

export const userAuthGoogleReducer = (state = {}, action: PayloadAction) => {
  switch (action.type) {
    case types.GOOGLE_AUTH_REQUEST:
      return { loadingUserAuthGoogle: true }
    case types.GOOGLE_AUTH_SUCCESS:
      return {
        loadingUserAuthGoogle: false,
        successUserAuthGoogle: true,
      }
    case types.GOOGLE_AUTH_FAIL:
      return {
        loadingUserAuthGoogle: false,
        errorUserAuthGoogle: action.payload,
      }
    case types.GOOGLE_AUTH_RESET:
      return {}
    default:
      return state
  }
}
