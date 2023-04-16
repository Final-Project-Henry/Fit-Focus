import {
  BenefitsTableContainer,
  BenefitsTitle,
  ButtonBenefit,
  ListBenefit,
  ListItemBenefit,
} from '../styles/homeScreenStyles'

const BenefitsTable = () => {
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
      <ButtonBenefit>Hazte Premium ya!</ButtonBenefit>
      <span>{"* A partir de $ 3'000.00"}</span>
    </BenefitsTableContainer>
  )
}

export default BenefitsTable
