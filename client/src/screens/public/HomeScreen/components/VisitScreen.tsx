import devs from 'shared/shareData/devs'
import {
  AboutUsContainer,
  AboutUsCover,
  BenefitCover,
  BenefitsContainer,
  DetailContainer,
  DetailCover,
  DevsContainer,
  FrontContainer,
  FrontCover,
  MotivationalCover,
  MotivationalPhraseContainer,
  OfferCover,
  OffersContainer,
  QuestionContainer,
  QuestionCover,
  TitleSection,
  VisitImageContainer,
  VisitScreenContainer,
} from '../styles/homeScreenStyles'
import CardDev from './CardDev'
import { DevInterface } from '../helper/interfaces'
import { visitImage1 } from 'shared/shareData'
import BenefitsTable from './BenefitsTable'

const VisitScreen = () => {
  return (
    <VisitScreenContainer>
      {/* ------------------------Front Area------------------------ */}
      <FrontCover>
        <FrontContainer>Algo 1</FrontContainer>
      </FrontCover>
      {/* ------------------------Detail Area------------------------ */}
      <DetailCover>
        <DetailContainer>Algo 2</DetailContainer>
      </DetailCover>
      {/* -----------------------Question Area----------------------- */}
      <QuestionCover>
        <QuestionContainer>Algo 3</QuestionContainer>
      </QuestionCover>
      {/* -------------------------Offer Area------------------------- */}
      <OfferCover>
        <OffersContainer>Algo 4</OffersContainer>
      </OfferCover>
      {/* ------------------Motivational Phrase Area------------------ */}
      <MotivationalCover>
        <MotivationalPhraseContainer>Algo 5</MotivationalPhraseContainer>
      </MotivationalCover>
      {/* -------------------Premium Benefits Area------------------- */}
      <BenefitCover>
        <BenefitsContainer>
          <TitleSection>¿Por que esperar?</TitleSection>
          <VisitImageContainer src={visitImage1} />
          <BenefitsTable />
        </BenefitsContainer>
      </BenefitCover>
      {/* -----------------------AboutUs Area----------------------- */}
      <AboutUsCover>
        <AboutUsContainer>
          <TitleSection>Acerca de Nosotros</TitleSection>
          <DevsContainer>
            {devs.map((dev: DevInterface, index: number) => (
              <CardDev dev={dev} key={index} />
            ))}
          </DevsContainer>
        </AboutUsContainer>
      </AboutUsCover>
      {/* -------------------------Footer------------------------- */}
    </VisitScreenContainer>
  )
}

export default VisitScreen
