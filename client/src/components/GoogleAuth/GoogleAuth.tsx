import { Fragment } from 'react'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
// import { ActivecuentaGoogle, authGoogle, selectUser } from '../../features/counter/counterSlice'
import jwtDecode from 'jwt-decode'
// import { useAppDispatch } from 'shared/customHooks/reduxHooks'

const GoogleAuth = () => {
  // const dispatch = useAppDispatch()

  const handleSuccess = (res: CredentialResponse) => {
    if (res.credential && res.credential?.length > 3) {
      console.log(res.credential)
      console.log(jwtDecode(res.credential))
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

export default GoogleAuth
