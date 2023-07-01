import { useEffect } from 'react'
import NoVisitScreen from 'components/NoVisitScreen/NoVisitScreen'
import NewsBody from './components/NewsBody'
import { useScreenMessage } from 'contexts/ScreenMessageContext'
import { useAppSelector } from 'shared/customHooks/reduxHooks'
import { NewsContainer } from './styles/newsScreenStyles'

const NewsScreen = () => {
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

  return <NewsContainer>{!userInfo ? <NoVisitScreen /> : <NewsBody />}</NewsContainer>
}

export default NewsScreen
