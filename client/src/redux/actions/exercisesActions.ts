import axios from 'axios'
import { AppDispatch } from 'redux/store'
import { ExerciseLoginData, PayloadError } from 'shared/interfaces/redux'
import { RootState } from 'shared/interfaces/redux'
import * as types from '../constants/exercisesConstants'

export const getLoginExercises = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  try {
    dispatch({ type: types.GET_LOGIN_EXERCISES_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token}`,
      },
    }

    const { data } = await axios.get('/api/exercises/login', config)

    dispatch({ type: types.GET_LOGIN_EXERCISES_SUCCESS, payload: data })
  } catch (error) {
    const payloadError = error as PayloadError
    dispatch({
      type: types.GET_LOGIN_EXERCISES_FAIL,
      payload:
        payloadError.response && payloadError.response.data?.message
          ? payloadError.response.data.message
          : payloadError.message,
    })
  }
}

export const getExercises =
  (dataToSend: ExerciseLoginData | null, query: string | null) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch({ type: types.EXERCISES_BY_FILTERS_REQUEST })

      const {
        userLogin: { userInfo },
      } = getState()

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo?.token}`,
        },
      }

      const { data } = await axios.post(`/api/exercises${query ? query : ''}`, dataToSend, config)

      dispatch({ type: types.EXERCISES_BY_FILTERS_SUCCESS, payload: data })
    } catch (error) {
      const payloadError = error as PayloadError
      dispatch({
        type: types.EXERCISES_BY_FILTERS_FAIL,
        payload:
          payloadError.response && payloadError.response.data?.message
            ? payloadError.response.data.message
            : payloadError.message,
      })
    }
  }

export const getExerciseById = (id: string) => async (dispatch: AppDispatch, getState: () => RootState) => {
  try {
    dispatch({ type: types.EXERCISE_BY_ID_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token}`,
      },
    }

    const { data } = await axios.get(`/api/exercises/${id}`, config)

    dispatch({ type: types.EXERCISE_BY_ID_SUCCESS, payload: data })
  } catch (error) {
    const payloadError = error as PayloadError
    dispatch({
      type: types.EXERCISE_BY_ID_FAIL,
      payload:
        payloadError.response && payloadError.response.data?.message
          ? payloadError.response.data.message
          : payloadError.message,
    })
  }
}
