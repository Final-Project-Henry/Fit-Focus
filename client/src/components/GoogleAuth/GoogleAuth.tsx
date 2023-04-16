import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import { useAppDispatch } from 'shared/customHooks/reduxHooks'
import { AuthGoogle } from 'redux/actions/userActions'

const GoogleAuth = () => {
  const dispatch = useAppDispatch()

  const handleSuccess = (res: CredentialResponse) => {
    if (res.credential && res.credential?.length > 3) {
      dispatch(AuthGoogle(res.credential))
    }
  }
  const handleError = () => {
    alert('Ocurrio un error al iniciar sesion')
  }

  return <GoogleLogin width='350px' onSuccess={handleSuccess} onError={handleError} auto_select />
}

export default GoogleAuth
