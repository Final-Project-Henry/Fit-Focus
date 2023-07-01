import { useScreenMessage } from 'contexts/ScreenMessageContext'
import {
  BenefitsTableContainer,
  BenefitsTitle,
  ButtonBenefit,
  ListBenefit,
  ListItemBenefit,
} from '../styles/homeScreenStyles'
import { useNavigate } from 'react-router-dom'

const BenefitsTable = () => {
  const { setData } = useScreenMessage()
  const navigate = useNavigate()

  const handleClick = () => {
    setData({
      message: 'Necesitas inciar sesion primero.',
      type: 'info',
    })
    navigate('/login')
  }
  return (
    <BenefitsTableContainer>
      <BenefitsTitle>Obten todo esto y mas por tu membresia Premium!</BenefitsTitle>
      <ListBenefit>
        <ListItemBenefit>Calculadora de IMC</ListItemBenefit>
        <ListItemBenefit>Rutinas PersonaListItemBenefitzadas</ListItemBenefit>
        <ListItemBenefit>Modo entrenamiento</ListItemBenefit>
        <ListItemBenefit>Ejercicios adicionales</ListItemBenefit>
        <ListItemBenefit>Tips, recomendaciones y mucho mas...</ListItemBenefit>
      </ListBenefit>
      <ButtonBenefit onClick={handleClick}>Hazte Premium ya!</ButtonBenefit>
      <span>{"* A partir de $ 3'000.00"}</span>
    </BenefitsTableContainer>
  )
}

export default BenefitsTable
