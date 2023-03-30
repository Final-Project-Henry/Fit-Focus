import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { AppDispatch } from 'redux/store'
import { PayloadError } from 'shared/interfaces/redux'
import { RootState } from 'shared/interfaces/routes-interfaces'
import * as types from '../constants/userConstants'

export const Loginn =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: types.GET_USER_LOGIN_REQUEST })

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const { data } = await axios.post('/', { email, password }, config)

      const decode = jwtDecode(data.token)
      const userInfo = {
        ...(decode as object),
        token: data.token,
      }
      dispatch({ type: types.GET_USER_LOGIN_SUCCESS, paylaod: userInfo })

      localStorage.setItem('token-user', JSON.stringify(data.token))
    } catch (error) {
      const payloadError = error as PayloadError
      dispatch({
        type: types.GET_USER_LOGIN_FAIL,
        payload:
          payloadError.response && payloadError.response.data?.message
            ? payloadError.response.data.message
            : payloadError.message,
      })
    }
  }

export const refreshToken =
  () => async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch({ type: types.USER_REFRESH_TOKEN_REQUEST })

      const {
        userLogin: { userInfo },
      } = getState()

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo?.token}`,
        },
      }

      const { data } = await axios.get('ruta para refrescar', config)

      if (data.token) {
        const decoded = jwtDecode(data.token)
        const userSession = {
          ...(decoded as object),
          token: data.token,
        }

        dispatch({ type: types.GET_USER_LOGIN_SUCCESS, payload: userSession })
        localStorage.setItem('setCHGG', JSON.stringify(data.token))
      }

      dispatch({ type: types.USER_REFRESH_TOKEN_SUCCESS })
    } catch (error) {
      const payloadError = error as PayloadError
      const message =
        payloadError.response && payloadError.response.data?.message
          ? payloadError.response.data.message
          : payloadError.message
      if (
        payloadError?.response?.status === 401 ||
        payloadError?.response?.status === 403
      ) {
        dispatch({
          type: types.GET_USER_LOGOUT,
        })
      }
      dispatch({
        type: types.USER_REFRESH_TOKEN_FAIL,
        payload: message,
      })
    }
  }
