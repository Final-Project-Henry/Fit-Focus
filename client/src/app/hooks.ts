import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { useEffect, useState } from 'react'
import { selectUser, sigendOut } from '../features/counter/counterSlice'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import funcion from '../additional_info/functions'
import { useNavigate } from 'react-router-dom'
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

//Hooks para el manteniminedo de seccion del usuario

export function useSesion() {
  const userStado = useAppSelector(selectUser)
  const dispatch = useAppDispatch()
  const Navegation = useNavigate()

  const [user, setuser] = useState<any>(false)
  useEffect(() => {
    let userJSON = window.localStorage.getItem('Login_userFit_Focus')
    if (userJSON) {
      if (userJSON.length > 3) {
        let userlogin = JSON.parse(userJSON)
        let respuesta = funcion.caducaToken(userlogin.time)
        if (!respuesta) {
          userlogin = jwtDecode(userlogin.token)
          setuser(userlogin)
        } else {
          dispatch(sigendOut(null))
          Navegation('/home')
          window.location.reload()
        }
      }
    }
  }, [userStado])
  return user
}

//hook para obtener

export function useToken() {
  const [token, setToken] = useState<string>('')
  const userStado = useAppSelector(selectUser)

  useEffect(() => {
    let userJSON = window.localStorage.getItem('Login_userFit_Focus')
    if (userJSON) {
      if (userJSON.length > 3) {
        let userlogin = JSON.parse(userJSON)
        setToken(userlogin.token)
      }
    }
  }, [userStado])

  return token
}

export async function opiniom(token: string, feedback: object) {
  let headersList = {
    Accept: '*/*',
    Authorization: 'Bearer ' + token,
    'Content-Type': 'application/json',
  }

  let bodyContent = JSON.stringify(feedback)

  let reqOptions = {
    url: 'http://localhost:3001/auth/userfeedback',
    method: 'PUT',
    headers: headersList,
    data: bodyContent,
  }

  let response = await axios.request(reqOptions)
}
