import { useAppSelector } from 'shared/customHooks/reduxHooks'
import VisitScreen from './components/VisitScreen'
import LoggedScreen from './components/LoggedScreen'

const HomeScreen = () => {
  const { userInfo } = useAppSelector(state => state.userLogin)

  return userInfo ? <LoggedScreen /> : <VisitScreen />
}

export default HomeScreen
