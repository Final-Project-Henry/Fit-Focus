import { useEffect, useState } from 'react'
import Typewriter from 'react-ts-typewriter'
import { useNavigate } from 'react-router-dom'
import useWindowsSize from 'shared/customHooks/useWindowsSize'
import { bgMobileLanding, bgNormalLanding, landingBodyText } from 'shared/shareData'
import {
  ActionArea,
  BgVideo,
  Body,
  ButtonLanding,
  Container,
  SubTitle,
  Title,
  TitleContainer,
} from './styles/landingPageStyles'

const LandingPage = () => {
  const navigate = useNavigate()
  const { width } = useWindowsSize()

  const [isSmall, setIsSmall] = useState(false)

  useEffect(() => {
    if (width && width < 760) {
      setIsSmall(true)
    } else if (width && width >= 760) {
      setIsSmall(false)
    }
  }, [width])

  const handleOnClick = () => {
    navigate('/home')
  }

  return (
    <Container>
      <BgVideo autoPlay loop muted src={isSmall ? bgMobileLanding : bgNormalLanding} />
      <TitleContainer>
        <Title>FIT FOCUS</Title>
        <SubTitle>NO PAIN, NO GAIN</SubTitle>
      </TitleContainer>
      <Body>
        <Typewriter text={landingBodyText} speed={50} />
      </Body>
      <ActionArea>
        <ButtonLanding onClick={handleOnClick}>COMENCEMOS</ButtonLanding>
      </ActionArea>
    </Container>
  )
}

export default LandingPage
