import { useEffect } from 'react'
import NoVisitScreen from 'components/NoVisitScreen/NoVisitScreen'
import FavoritesBody from './components/FavoritesBody'
import { useScreenMessage } from 'contexts/ScreenMessageContext'
import { useAppSelector } from 'shared/customHooks/reduxHooks'
import { FavoritesContainer } from './styles/favoritesScreenStyles'

const FavoritesExercisesScreen = () => {
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

  return <FavoritesContainer>{!userInfo ? <NoVisitScreen /> : <FavoritesBody />}</FavoritesContainer>
}

export default FavoritesExercisesScreen
