import BannerScreeen from 'components/BannerScreen/BannerScreeen'
import { exercisesBanner } from 'shared/shareData'
import { ExercisesBodyContainer } from '../styles/exercisesScreenStyles'

const ExercisesBody = () => {
  return (
    <ExercisesBodyContainer id='contactus-body-container'>
      <BannerScreeen imgBg={exercisesBanner} title='🏋️‍♀️ Ejercicios 🏋️' />
    </ExercisesBodyContainer>
  )
}

export default ExercisesBody
