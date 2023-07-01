import { useEffect } from 'react'
import NoVisitScreen from 'components/NoVisitScreen/NoVisitScreen'
import RoutineBody from './components/RoutineBody'
import { useScreenMessage } from 'contexts/ScreenMessageContext'
import { useAppSelector } from 'shared/customHooks/reduxHooks'
import { RoutineContainer } from './styles/routineScreenStyles'

const RoutineScreen = () => {
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

  return <RoutineContainer>{!userInfo ? <NoVisitScreen /> : <RoutineBody />}</RoutineContainer>
}

export default RoutineScreen
