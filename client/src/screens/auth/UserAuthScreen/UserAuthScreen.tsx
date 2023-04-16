import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridItem'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Login, Register } from 'redux/actions/userActions'
import { useAppDispatch, useAppSelector } from 'shared/customHooks/reduxHooks'
import { loginScreen } from 'shared/shareData'
import { verifyEmail } from 'shared/validations/validationInputs'
import LoginInputs from './components/LoginInputs'
import {
  errorInitialState,
  errorRegisterInitialState,
  inputInitialState,
  inputRegisterInitialState,
} from './helpers/initialStates'
import { ErrorInput, ErrorRegisterInput } from './helpers/interfaces'
import { inputsRegisterValidation, inputsValidation } from './helpers/validations'
import {
  CardContainer,
  FormContainer,
  Image,
  ImageContainer,
  Phrase,
  ScreenContainer,
} from './styles/userLoginScreenStyles'
import RegisterInputs from './components/RegisterInputs'
import { USER_REGISTER_RESET } from 'redux/constants/userConstants'

const UserLoginScreen = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const location = useLocation()

  const [userInfo, setUserInfo] = useState(inputInitialState)
  const [userRegisterInfo, setUserRegisterInfo] = useState(inputRegisterInitialState)
  const [error, setError] = useState<ErrorInput>(errorInitialState)
  const [errorRegister, setErrorRegister] = useState<ErrorRegisterInput>(errorRegisterInitialState)
  const [isLogin, setIsLogin] = useState<boolean>(true)

  const { loadingUserLogin, successUserLogin, errorUserLogin } = useAppSelector(state => state.userLogin)
  const { loadingUserRegister, successUserRegister, errorUserRegister } = useAppSelector(state => state.userRegister)

  useEffect(() => {
    return () => {
      dispatch({ type: USER_REGISTER_RESET })
    }
  }, [])
  useEffect(() => {
    if (successUserLogin) {
      navigate('/home')
    }
  }, [successUserLogin])
  useEffect(() => {
    if (successUserRegister) {
      navigate('/home')
    }
  }, [successUserRegister])
  useEffect(() => {
    setUserInfo(inputInitialState)
    setUserRegisterInfo(inputRegisterInitialState)
    setError(errorInitialState)
    setErrorRegister(errorRegisterInitialState)
    const path = location.pathname.replace('/', '')
    let isLogin
    if (path === 'login') {
      isLogin = true
    } else {
      isLogin = false
    }
    setIsLogin(isLogin)
  }, [location])

  const handleInfo = (key: string, value: string | boolean) => {
    setError(errorInitialState)
    setUserInfo(prev => ({
      ...prev,
      [key]: value,
    }))
  }
  const handleRegisterInfo = (key: string, value: string | boolean) => {
    setErrorRegister(errorRegisterInitialState)
    setUserRegisterInfo(prev => ({
      ...prev,
      [key]: value,
    }))
  }
  const recoveryPass = () => {
    navigate('/home') //modify redirect to recovery password path
  }
  const handleSubmit = () => {
    if (!inputsValidation(userInfo)) {
      return setError({
        password: userInfo.password.length < 8 ? 'La contraseña debe tener 8 caracteres' : '',
        email: !verifyEmail(userInfo.email) ? 'Escriba un correo valido' : '',
      })
    }
    dispatch(Login(userInfo.email, userInfo.password))
  }
  const handleRegisterSubmit = () => {
    if (!inputsRegisterValidation(userRegisterInfo)) {
      return setErrorRegister({
        name: userRegisterInfo.name.length < 3 ? 'El nombre debe tener al menos 3 letras' : '',
        password: userRegisterInfo.password.length < 8 ? 'La contraseña debe tener 8 caracteres' : '',
        email: !verifyEmail(userRegisterInfo.email) ? 'Escriba un correo valido' : '',
      })
    }
    dispatch(Register(userRegisterInfo.name, userRegisterInfo.email, userRegisterInfo.password))
  }

  return (
    <ScreenContainer>
      <CardContainer id='card-container'>
        {isLogin ? (
          <GridContainer>
            <GridItem xs={12} md={6}>
              <ImageContainer>
                <Image src={loginScreen} alt='Login screen' />
                <Phrase>
                  <h1>
                    <i>“La clave para iniciar algo es dejar de hablar y ponerse a hacerlo”</i>
                  </h1>
                  <Link to={'/register'}>Aún no tengo una cuenta.</Link>
                </Phrase>
              </ImageContainer>
            </GridItem>
            <GridItem xs={12} md={6}>
              <FormContainer id='form-container'>
                <LoginInputs
                  data={userInfo}
                  handleInfo={handleInfo}
                  recoveryPass={recoveryPass}
                  submit={handleSubmit}
                  error={error}
                  errorLogin={errorUserLogin}
                  disableButton={!!loadingUserLogin}
                />
              </FormContainer>
            </GridItem>
          </GridContainer>
        ) : (
          <GridContainer>
            <GridItem xs={12} md={6}>
              <FormContainer id='form-container'>
                <RegisterInputs
                  data={userRegisterInfo}
                  handleInfo={handleRegisterInfo}
                  submit={handleRegisterSubmit}
                  error={errorRegister}
                  errorLogin={errorUserRegister}
                  disableButton={!!loadingUserRegister}
                />
              </FormContainer>
            </GridItem>
            <GridItem xs={12} md={6}>
              <ImageContainer>
                <Image src={loginScreen} alt='Login screen' />
                <Phrase>
                  <h1>
                    <i>“La clave para iniciar algo es dejar de hablar y ponerse a hacerlo”</i>
                  </h1>
                  <Link to={'/login'}>Ya tengo una cuenta.</Link>
                </Phrase>
              </ImageContainer>
            </GridItem>
          </GridContainer>
        )}
      </CardContainer>
    </ScreenContainer>
  )
}

export default UserLoginScreen
