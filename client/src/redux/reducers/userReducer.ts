import { PayloadAction } from '@reduxjs/toolkit'
import * as types from '../constants/userConstants'

export const userProfileReducer = (state = {}, action: PayloadAction) => {
  switch (action.type) {
    case types.GET_USER_PROFILE_REQUEST:
      return { loadingUserProfile: true }
    case types.GET_USER_PROFILE_SUCCESS:
      return {
        successUserProfile: true,
        loadingUserProfile: false,
        backupListData: action.payload,
      }
    case types.GET_USER_PROFILE_FAIL:
      return {
        loadingUserProfile: false,
        errorUserProfile: action.payload,
      }
    case types.GET_USER_PROFILE_RESET:
      return {}
    default:
      return state
  }
}
