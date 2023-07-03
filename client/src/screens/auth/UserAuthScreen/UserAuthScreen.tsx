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
import { GOOGLE_AUTH_RESET, USER_REGISTER_RESET } from 'redux/constants/userConstants'
import { useScreenMessage } from 'contexts/ScreenMessageContext'
import PasswordRecoveryModal from './components/PasswordRecoveryModal'

const UserLoginScreen = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const location = useLocation()

  const [userInfo, setUserInfo] = useState(inputInitialState)
  const [userRegisterInfo, setUserRegisterInfo] = useState(inputRegisterInitialState)
  const [error, setError] = useState<ErrorInput>(errorInitialState)
  const [errorRegister, setErrorRegister] = useState<ErrorRegisterInput>(errorRegisterInitialState)
  const [isLogin, setIsLogin] = useState<boolean>(true)
  const [showRecoveryModal, setShowRecoveryModal] = useState<boolean>(false)
  const { setData } = useScreenMessage()

  const { loadingUserLogin, successUserLogin, errorUserLogin } = useAppSelector(state => state.userLogin)
  const { loadingUserRegister, successUserRegister, errorUserRegister } = useAppSelector(state => state.userRegister)
  const { loadingUserAuthGoogle, successUserAuthGoogle, errorUserAuthGoogle } = useAppSelector(
    state => state.userAuthGoogle,
  )

  useEffect(() => {
    return () => {
      dispatch({ type: USER_REGISTER_RESET })
      dispatch({ type: GOOGLE_AUTH_RESET })
    }
  }, [])
  useEffect(() => {
    if (successUserLogin || successUserRegister || successUserAuthGoogle) {
      showMessage()
      navigate('/home')
    }
  }, [successUserLogin, successUserRegister, successUserAuthGoogle])
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
    // navigate('/home') //modify redirect to recovery password path
    setShowRecoveryModal(true)
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
  const showMessage = () => {
    setData({
      message: 'Bienvenido!',
      type: 'success',
    })
  }
  const closeRecoveryModal = () => {
    setShowRecoveryModal(false)
  }

  return (
    <ScreenContainer>
      <CardContainer id='card-container'>
        {isLogin ? (
          <GridContainer id='gridContainer'>
            <GridItem xs={12} md={6} id='image-login'>
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
            <GridItem xs={12} md={6} id='grid-form'>
              <FormContainer id='form-container'>
                <LoginInputs
                  data={userInfo}
                  handleInfo={handleInfo}
                  recoveryPass={recoveryPass}
                  submit={handleSubmit}
                  error={error}
                  errorLogin={errorUserLogin || errorUserAuthGoogle}
                  disableButton={!!loadingUserLogin || !!loadingUserAuthGoogle}
                />
              </FormContainer>
            </GridItem>
          </GridContainer>
        ) : (
          <GridContainer id='gridContainer'>
            <GridItem xs={12} md={6} id='grid-form'>
              <FormContainer id='form-container'>
                <RegisterInputs
                  data={userRegisterInfo}
                  handleInfo={handleRegisterInfo}
                  submit={handleRegisterSubmit}
                  error={errorRegister}
                  errorLogin={errorUserRegister || errorUserAuthGoogle}
                  disableButton={!!loadingUserRegister || !!loadingUserAuthGoogle}
                />
              </FormContainer>
            </GridItem>
            <GridItem xs={12} md={6} id='image-register'>
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
      {showRecoveryModal && <PasswordRecoveryModal openModal={showRecoveryModal} closeModal={closeRecoveryModal} />}
    </ScreenContainer>
  )
}

export default UserLoginScreen
