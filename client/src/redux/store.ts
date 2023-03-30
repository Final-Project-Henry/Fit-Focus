import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import jwtDecode from 'jwt-decode'
import reducer from './reducers'

const userInfoFromStorage = localStorage.getItem('token-user')
  ? JSON.parse(localStorage.getItem('token-user') || 'no llegara aqui')
  : null
const decoded =
  userInfoFromStorage === null ? null : jwtDecode(userInfoFromStorage)

const userSession =
  userInfoFromStorage === null
    ? null
    : {
        ...(decoded as object),
        token: userInfoFromStorage,
      }

const preloadedState = {
  userLogin: {
    userInfo: userSession,
  },
  userRefreshToken: {},
}

export const store = configureStore({
  reducer,
  preloadedState,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof reducer>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
