import BannerScreeen from 'components/BannerScreen/BannerScreeen'
import { routineBanner } from 'shared/shareData'
import { RoutineBodyContainer } from '../styles/routineScreenStyles'

const RoutineBody = () => {
  return (
    <RoutineBodyContainer id='contactus-body-container'>
      <BannerScreeen imgBg={routineBanner} title='Rutinas Personalizadas 💪' />
    </RoutineBodyContainer>
  )
}

export default RoutineBody
