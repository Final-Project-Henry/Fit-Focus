import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import { useAppDispatch } from 'shared/customHooks/reduxHooks'
import { AuthGoogle } from 'redux/actions/userActions'
import { ButtonContainer } from './styles/googleAuthStyles'
import { GoogleAuthProps } from './helpers/interfaces'

const GoogleAuth = ({ isLogin }: GoogleAuthProps) => {
  const dispatch = useAppDispatch()

  const handleSuccess = (res: CredentialResponse) => {
    if (res.credential && res.credential?.length > 3) {
      dispatch(AuthGoogle(res.credential))
    }
  }
  const handleError = () => {
    alert('Ocurrio un error al iniciar sesion')
  }

  return (
    <ButtonContainer>
      <GoogleLogin
        shape='pill'
        context={isLogin ? 'signin' : 'signup'}
        theme='filled_blue'
        logo_alignment='left'
        width='310'
        onSuccess={handleSuccess}
        onError={handleError}
      />
    </ButtonContainer>
  )
}

export default GoogleAuth
