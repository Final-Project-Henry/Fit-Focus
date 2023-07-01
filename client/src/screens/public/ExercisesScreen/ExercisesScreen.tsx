import { useEffect } from 'react'
import { useScreenMessage } from 'contexts/ScreenMessageContext'
import { useAppSelector } from 'shared/customHooks/reduxHooks'
import { ExercisesContainer } from './styles/exercisesScreenStyles'
import NoVisitScreen from 'components/NoVisitScreen/NoVisitScreen'
import ExercisesBody from './components/ExercisesBody'

const ExercisesScreen = () => {
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

  return <ExercisesContainer>{!userInfo ? <NoVisitScreen /> : <ExercisesBody />}</ExercisesContainer>
}

export default ExercisesScreen
