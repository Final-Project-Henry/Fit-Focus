import BannerScreeen from 'components/BannerScreen/BannerScreeen'
import { calculatorBanner } from 'shared/shareData'
import { CalculatorBodyContainer } from '../styles/calculatorScreenStyles'

const CalculatorBody = () => {
  return (
    <CalculatorBodyContainer id='calculator-body-container'>
      <BannerScreeen imgBg={calculatorBanner} title='Calculadora de IMC 📱' />
    </CalculatorBodyContainer>
  )
}

export default CalculatorBody
