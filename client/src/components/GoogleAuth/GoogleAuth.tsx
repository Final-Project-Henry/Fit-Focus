import { Fragment } from 'react'
import jwtDecode from 'jwt-decode'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
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
        width='350px'
        onSuccess={handleSuccess}
        onError={handleError}
      />
    </Fragment>
  )
}

export default GoogleAuth
