import { Fragment, useEffect, useState } from 'react'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
// import { ActivecuentaGoogle, authGoogle, selectUser } from '../../features/counter/counterSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import jwtDecode from 'jwt-decode'

export default function GoogleAuth() {
  const [googleToken, setGoogleToken] = useState('')
  const dispatch = useAppDispatch()

  const handleSuccess = (res: CredentialResponse) => {
    if (res.credential && res.credential?.length > 3) {
      setGoogleToken(res.credential)
      console.log(googleToken)
    }
  }
  const handleError = () => {
    alert('Ocurrio un error al iniciar sesion')
  }

  return (
    <Fragment>
      <GoogleLogin
        width='200px'
        onSuccess={handleSuccess}
        onError={handleError}
      />
    </Fragment>
  )
}
