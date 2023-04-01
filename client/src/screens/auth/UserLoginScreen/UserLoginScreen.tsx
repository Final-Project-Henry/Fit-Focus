import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridItem'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Login } from 'redux/actions/userActions'
import { useAppDispatch, useAppSelector } from 'shared/customHooks/reduxHooks'
import { loginScreen } from 'shared/shareData'
import { verifyEmail } from 'shared/validations/validationInputs'
import LoginInputs from './components/LoginInputs'
import { errorInitialState, inputInitialState } from './helpers/initialStates'
import { ErrorInput } from './helpers/interfaces'
import { inputsValidation } from './helpers/validations'
import {
  CardContainer,
  FormContainer,
  Image,
  ImageContainer,
  Phrase,
  ScreenContainer,
} from './styles/userLoginScreenStyles'

const UserLoginScreen = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [userInfo, setUserInfo] = useState(inputInitialState)
  const [error, setError] = useState<ErrorInput>(errorInitialState)

  const { loadingUserLogin, successUserLogin, errorUserLogin } = useAppSelector(
    state => state.userLogin,
  )

  useEffect(() => {
    if (successUserLogin) {
      navigate('/home')
    }
  }, [successUserLogin])

  const handleInfo = (key: string, value: string | boolean) => {
    setError(errorInitialState)
    setUserInfo(prev => ({
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
        password: userInfo.password.length < 8 ? 'error' : '',
        email: !verifyEmail(userInfo.email) ? 'Escriba un correo valido' : '',
      })
    }
    dispatch(Login(userInfo.email, userInfo.password))
  }

  return (
    <ScreenContainer>
      <CardContainer id='card-container'>
        <GridContainer>
          <GridItem xs={12} md={6}>
            <ImageContainer>
              <Image src={loginScreen} alt='Login screen' />
              <Phrase>
                <i>
                  “La clave para iniciar algo es dejar de hablar y ponerse a
                  hacerlo”
                </i>
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
      </CardContainer>
    </ScreenContainer>
  )
}

export default UserLoginScreen
