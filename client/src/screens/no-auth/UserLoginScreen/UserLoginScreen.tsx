import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridItem'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginScreen } from 'shared/shareData'
import LoginInputs from './components/LoginInputs'
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

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    viewPassword: false,
  })

  const handleInfo = (key: string, value: string | boolean) => {
    setUserInfo(prev => ({
      ...prev,
      [key]: value,
    }))
  }
  const recoveryPass = () => {
    navigate('/home') //modify redirect to recovery password path
  }
  const handleSubmit = () => {
    console.log(userInfo)
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
              />
            </FormContainer>
          </GridItem>
        </GridContainer>
      </CardContainer>
    </ScreenContainer>
  )
}

export default UserLoginScreen
