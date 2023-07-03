import { useAppSelector } from 'shared/customHooks/reduxHooks'
import VisitScreen from './components/VisitScreen'
import LoggedScreen from './components/LoggedScreen'
import { premiumValidation } from './helper/functions'
import { useNavigate } from 'react-router-dom'

const HomeScreen = () => {
  const navigate = useNavigate()

  const { userInfo } = useAppSelector(state => state.userLogin)

  const handleStartNow = () => {
    const isPremium = userInfo ? premiumValidation(userInfo) : false

    let path = '/premium'
    if (isPremium) {
      path = '/routine'
    }
    navigate(path)
  }

  return userInfo ? <LoggedScreen onClick={handleStartNow} /> : <VisitScreen />
}

export default HomeScreen
