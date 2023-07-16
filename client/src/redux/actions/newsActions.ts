import axios from 'axios'
import { AppDispatch } from 'redux/store'
import { NewsPayloadResponse, PayloadError } from 'shared/interfaces/redux'
import * as types from '../constants/newsConstants'

export const getLoginNews = () => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: types.GET_LOGIN_NEWS_REQUEST })

    const newsApi = process.env.REACT_APP_NEWS_API_KEY

    const { data } = await axios.get(
      `https://newsapi.org/v2/everything?sortBy=publishedAt&apiKey=${newsApi}&q=nutrición&language=es&pagesize=3&searchIn=title`,
    )

    const newsData = (data as NewsPayloadResponse).articles

    dispatch({ type: types.GET_LOGIN_NEWS_SUCCESS, payload: newsData })
  } catch (error) {
    const payloadError = error as PayloadError
    dispatch({
      type: types.GET_LOGIN_NEWS_FAIL,
      payload:
        payloadError.response && payloadError.response.data?.message
          ? payloadError.response.data.message
          : payloadError.message,
    })
  }
}
