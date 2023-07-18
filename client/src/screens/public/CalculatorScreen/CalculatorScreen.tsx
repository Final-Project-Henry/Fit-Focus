import { useEffect } from 'react'
import NoVisitScreen from 'components/NoVisitScreen/NoVisitScreen'
import CalculatorBody from './components/CalculatorBody'
import { useScreenMessage } from 'contexts/ScreenMessageContext'
import { useAppSelector } from 'shared/customHooks/reduxHooks'
import { CalculatorContainer } from './styles/calculatorScreenStyles'

const CalculatorScreen = () => {
  const { setData } = useScreenMessage()

  const { userInfo } = useAppSelector(state => state.userLogin)

  useEffect(() => {
    if (!userInfo) {
      setData({
        message: 'Necesitas iniciar sesion primero.',
        type: 'warning',
      })
    }
  }, [])
  return <CalculatorContainer>{!userInfo ? <NoVisitScreen /> : <CalculatorBody />}</CalculatorContainer>
}

export default CalculatorScreen
