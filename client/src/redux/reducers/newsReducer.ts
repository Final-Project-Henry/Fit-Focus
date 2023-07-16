import { PayloadAction } from '@reduxjs/toolkit'
import * as types from '../constants/newsConstants'

export const newsLoginReducer = (state = {}, action: PayloadAction) => {
  switch (action.type) {
    case types.GET_LOGIN_NEWS_REQUEST:
      return { loadingLoginNews: true }
    case types.GET_LOGIN_NEWS_SUCCESS:
      return {
        loadingLoginNews: false,
        successLoginNews: true,
        loginNews: action.payload,
      }
    case types.GET_LOGIN_NEWS_FAIL:
      return {
        loadingLoginNews: false,
        errorLoginNews: action.payload,
      }
    case types.GET_LOGIN_NEWS_RESET:
      return {}
    default:
      return state
  }
}
