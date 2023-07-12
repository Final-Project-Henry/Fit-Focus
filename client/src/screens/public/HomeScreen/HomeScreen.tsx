import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'shared/customHooks/reduxHooks'
import VisitScreen from './components/VisitScreen'
import LoggedScreen from './components/LoggedScreen'
import { premiumValidation } from './helper/functions'
import { getLoginExercises } from 'redux/actions/exercisesActions'
import Loading from 'components/loading/Loading'

const HomeScreen = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { userInfo } = useAppSelector(state => state.userLogin)
  const { loadingLoginExercises, successLoginExercises, loginExercises } = useAppSelector(state => state.exercisesLogin)

  const handleStartNow = () => {
    const isPremium = userInfo ? premiumValidation(userInfo) : false

    let path = '/premium'
    if (isPremium) {
      path = '/routine'
    }
    navigate(path)
  }

  useEffect(() => {
    if (userInfo && !successLoginExercises) {
      dispatch(getLoginExercises())
    }
  }, [userInfo])

  return userInfo ? (
    loadingLoginExercises ? (
      <Loading />
    ) : (
      <LoggedScreen onClick={handleStartNow} loginExercises={loginExercises || null} />
    )
  ) : (
    <VisitScreen />
  )
}

export default HomeScreen
