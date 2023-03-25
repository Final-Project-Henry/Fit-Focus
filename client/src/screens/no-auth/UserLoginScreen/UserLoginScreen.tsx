import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridItem'
import { useState } from 'react'
import { loginScreen } from 'shared/shareData'
import LoginInputs from './components/LoginInputs'

const UserLoginScreen = () => {
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

  return (
    <GridContainer>
      <GridItem xs={12} md={6}>
        <div>
          <img src={loginScreen} alt='Login screen' />
        </div>
      </GridItem>
      <GridItem xs={12} md={6}>
        <LoginInputs data={userInfo} handleInfo={handleInfo} />
      </GridItem>
    </GridContainer>
  )
}

export default UserLoginScreen
