import devs from 'shared/shareData/devs'
import {
  AboutUsContainer,
  BenefitsContainer,
  DetailContainer,
  DevsContainer,
  FrontContainer,
  MotivationalPhraseContainer,
  OffersContainer,
  QuestionContainer,
  TitleSection,
  VisitScreenContainer,
} from '../styles/homeScreenStyles'
import CardDev from './CardDev'
import { DevInterface } from '../helper/interfaces'

const VisitScreen = () => {
  return (
    <VisitScreenContainer>
      <FrontContainer>Algo 1</FrontContainer>
      <DetailContainer>Algo 2</DetailContainer>
      <QuestionContainer>Algo 3</QuestionContainer>
      <OffersContainer>Algo 4</OffersContainer>
      <MotivationalPhraseContainer>Algo 5</MotivationalPhraseContainer>
      <BenefitsContainer>
        <TitleSection>¿Por que esperar?</TitleSection>
      </BenefitsContainer>
      <AboutUsContainer>
        <TitleSection>Acerca de Nosotros</TitleSection>
        <DevsContainer>
          {devs.map((dev: DevInterface, index: number) => (
            <CardDev dev={dev} key={index} />
          ))}
        </DevsContainer>
      </AboutUsContainer>
    </VisitScreenContainer>
  )
}

export default VisitScreen
