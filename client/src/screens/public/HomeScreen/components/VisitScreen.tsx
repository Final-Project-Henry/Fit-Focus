import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from 'components/Footer/Footer'
import CardDev from './CardDev'
import CardOffer from './CardOffer'
import BenefitsTable from './BenefitsTable'
import { DevInterface } from '../helper/interfaces'
import devs from 'shared/shareData/devs'
import useWindowsSize from 'shared/customHooks/useWindowsSize'
import {
  squadAnimation,
  visitImage1,
  visitImage2,
  visitImageBar,
  visitImageFront,
  visitImageFrontMobile,
  visitVideo,
} from 'shared/shareData'
import {
  AboutUsContainer,
  AboutUsCover,
  AnimatedContainer,
  BarQuestion,
  BenefitCover,
  BenefitsContainer,
  BgImageVisit,
  DetailContainer,
  DetailCover,
  DevsContainer,
  FrontContainer,
  FrontCover,
  Message,
  MotivationalCover,
  MotivationalPhraseContainer,
  OfferCover,
  OffersContainer,
  QuestionContainer,
  QuestionCover,
  TextDescription,
  TextFront,
  TextQuestion,
  TitleSection,
  VisitImageContainer,
  VisitScreenContainer,
} from '../styles/homeScreenStyles'

const VisitScreen = () => {
  const { width } = useWindowsSize()
  const navigate = useNavigate()

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (width && width <= 500) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [width])
  return (
    <VisitScreenContainer id='visit-container'>
      {/* ------------------------Front Area------------------------ */}
      <FrontCover>
        <FrontContainer>
          <img src={isMobile ? visitImageFrontMobile : visitImageFront} />
          <TextFront>
            <h1>Fit Focus</h1>
            <h3>¿No sabes como empezar a cambiar tu vida y mejorar tu salud?</h3>
            <h4>No tienes que preocuparte, nosotros te ayudamos a lograrlo!!</h4>
            <button onClick={() => navigate('/register')}>Haz click AQUI</button>
          </TextFront>
        </FrontContainer>
      </FrontCover>
      {/* ------------------------Detail Area------------------------ */}
      <DetailCover>
        <DetailContainer>
          <video src={visitVideo} autoPlay loop muted />
          <TextDescription>
            <h2>Esta aplicación:</h2>
            <p>
              Ofrece una gran variedad de ejercicios para realizarlos en casa, dependiendo la parte del cuerpo que se
              desee trabajar. Tambien nos brinda una calculadora para conocer el indice de masa corporal y asi tener un
              mayor conocimiento de nuestra salud.
            </p>
          </TextDescription>
        </DetailContainer>
      </DetailCover>
      {/* -----------------------Question Area----------------------- */}
      <QuestionCover>
        <QuestionContainer>
          <BarQuestion>
            <TextQuestion>
              <h2>¿Tienes mas de 20?</h2>
              <span>Entonces esta app esta hecha a tu medida</span>
              <Link to='/register'>Empieza a cambiar tu vida ya!</Link>
            </TextQuestion>
            <img src={visitImageBar} />
          </BarQuestion>
        </QuestionContainer>
      </QuestionCover>
      {/* -------------------------Offer Area------------------------- */}
      <OfferCover>
        <OffersContainer>
          <AnimatedContainer>
            <img src={squadAnimation} alt='squat animation' />
            <span>SENTADILLA</span>
          </AnimatedContainer>
          <CardOffer isFree={false} />
          <CardOffer isFree={true} />
        </OffersContainer>
      </OfferCover>
      {/* ------------------Motivational Phrase Area------------------ */}
      <MotivationalCover>
        <MotivationalPhraseContainer>
          <BgImageVisit src={visitImage2} alt='background visit' />
          <Message>
            <i>“La edad no es una barrera. Es una limitación que pones en tu mente.”</i>
          </Message>
        </MotivationalPhraseContainer>
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
      <Footer />
    </VisitScreenContainer>
  )
}

export default VisitScreen
