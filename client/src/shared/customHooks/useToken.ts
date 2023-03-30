import { useEffect, useState } from 'react'
import { useAppSelector } from 'shared/customHooks/reduxHooks'

const useToken = () => {
  //This hook isn't necesary because the store get the local storage key automatically
  const [token, setToken] = useState<string>('')
  const userStado = useAppSelector(state => state.userLogin)

  useEffect(() => {
    const userJSON = window.localStorage.getItem('token-user')
    if (userJSON) {
      if (userJSON.length > 3) {
        const tokenParsed = JSON.parse(userJSON)
        setToken(tokenParsed)
      }
    }
  }, [userStado])
  return token
}

export default useToken
