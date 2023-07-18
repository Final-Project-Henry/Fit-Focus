import { PayloadAction } from '@reduxjs/toolkit'
import * as types from '../constants/newsConstants'
import { ModifiedPayloadAction, NewsPayloadResponse } from 'shared/interfaces/redux'

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

export const searchNewsReducer = (state = {}, action: ModifiedPayloadAction<NewsPayloadResponse>) => {
  switch (action.type) {
    case types.SEARCH_NEWS_REQUEST:
      return { loadingSearchNewsList: true }
    case types.SEARCH_NEWS_SUCCESS:
      return {
        loadingSearchNewsList: false,
        successSearchNewsList: true,
        searchNewsList: action.payload.articles,
        totalResults: action.payload.totalResults,
      }
    case types.SEARCH_NEWS_FAIL:
      return {
        loadingSearchNewsList: false,
        errorSearchNewsList: action.payload,
      }
    case types.SEARCH_NEWS_RESET:
      return {}
    default:
      return state
  }
}
