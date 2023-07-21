import { visitImage2, visitImageFront } from 'shared/shareData'
import styled from 'styled-components'

const BasicDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  max-width: 1280px;
`
const ResponsiveContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const VisitScreenContainer = styled(BasicDiv)`
  max-width: 100%;
  flex-direction: column;
  height: fit-content;
  position: absolute;
  top: 0;
  z-index: 0;
`
export const FrontContainer = styled(BasicDiv)`
  background: transparent;
  position: relative;
  align-items: center;
  z-index: 0;
  img {
    height: 100%;
    max-height: 100vh;
    object-fit: cover;
    opacity: 0.7;
    position: absolute;
    top: 0;
    left: 0;
  }
`
export const FrontCover = styled(ResponsiveContainer)`
  background: transparent;
  position: relative;
  overflow: hidden;
  z-index: -1;
  &::before {
    background-image: url(${visitImageFront});
    background-repeat: repeat-x;
    background-size: contain;
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    transform: scale(1.2);
    filter: blur(20px);
  }
`
export const DetailContainer = styled(BasicDiv)`
  background: transparent;
  height: fit-content;
  align-items: stretch;
  justify-content: space-evenly;
  padding: 20px 0;
  video {
    width: 50%;
    margin: 30px 0;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    video {
      width: 90%;
    }
  }
`
export const DetailCover = styled(ResponsiveContainer)`
  background: transparent;
`
export const QuestionContainer = styled(BasicDiv)`
  background: transparent;
  height: 600px;
  align-items: center;
`
export const QuestionCover = styled(ResponsiveContainer)`
  background: transparent;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 300px;
    top: 150px;
    left: 0;
    background: ${({ theme }) => theme.colors.gray};
    z-index: -1;
  }
`
export const OffersContainer = styled(BasicDiv)`
  background: transparent;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: fit-content;
  padding: 30px;
  gap: 30px;
  flex-wrap: wrap;
`
export const OfferCover = styled(ResponsiveContainer)`
  background: ${({ theme }) => theme.colors.lightGray};
`
export const MotivationalPhraseContainer = styled(BasicDiv)`
  background: transparent;
  justify-content: center;
  height: 50vh;
  z-index: 1;
`
export const MotivationalCover = styled(ResponsiveContainer)`
  position: relative;
  overflow: hidden;
  &::before {
    background-image: url(${visitImage2});
    background-repeat: repeat-x;
    background-size: contain;
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    transform: scale(1.2);
    filter: blur(20px);
  }
`
export const BenefitsContainer = styled(BasicDiv)`
  background: transparent;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: fit-content;
  @media (max-width: 500px) {
    padding-top: 10px;
  }
`
export const BenefitCover = styled(ResponsiveContainer)`
  padding-top: 20px;
  background: ${({ theme }) => theme.colors.lightGray};
`
export const AboutUsContainer = styled(BasicDiv)`
  background: transparent;
  flex-direction: column;
  height: fit-content;
  padding: 20px 0 30px;
  @media (max-width: 500px) {
    height: 100vh;
    justify-content: space-evenly;
    padding: 0;
  }
`
export const AboutUsCover = styled(ResponsiveContainer)`
  background: ${({ theme }) => theme.colors.white};
`
export const TitleSection = styled.h2`
  font-family: 'Oswald';
  font-weight: 700;
  font-size: ${({ theme }) => theme.dims.fonts.section};
  text-align: center;
  color: ${({ theme }) => theme.colors.darkBlue};
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`
export const DevsContainer = styled.div`
  display: grid;
  padding: 20px 20px 0 20px;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 30px;
`
export const DevCardContainer = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  background: white;
  box-shadow: ${({ theme }) => theme.shadows.depth4};
`
export const UserInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`
export const AvatarContainer = styled.div`
  cursor: pointer;
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`
export const Name = styled.span`
  font-weight: 500;
  font-size: 1rem;
`
export const Email = styled.span`
  font-weight: 500;
  font-size: 0.8rem;
`
export const SocialContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
`
export const VisitImageContainer = styled.img`
  width: 70%;
  height: 450px;
  object-fit: cover;
  object-position: bottom right;
  margin: 20px 0 30px 0;
  max-width: 800px;
  @media (max-width: 760px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 100%;
    height: auto;
    margin: 0;
    margin-top: 10px;
  }
`
export const BenefitsTableContainer = styled.div`
  position: absolute;
  left: 10%;
  top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  width: 30%;
  background: ${({ theme }) => theme.colors.darkBlue};
  color: white;
  font-family: 'Oswald';
  gap: 10px;
  margin-bottom: 20px;
  span {
    font-size: 0.7rem;
    align-self: flex-start;
    margin-left: 20px;
    padding-bottom: 20px;
  }
  @media (max-width: 760px) {
    top: 100px;
    left: 10px;
  }
  @media (max-width: 500px) {
    position: initial;
    width: 100%;
    margin: 0;
  }
`
export const BenefitsTitle = styled.h2`
  font-weight: 700;
  font-size: 1.8rem;
  text-align: center;
  padding: 10px;
`
export const ListBenefit = styled.ul`
  align-self: flex-start;
  margin-left: 20px;
`
export const ListItemBenefit = styled.li`
  padding-top: 10px;
`
export const ButtonBenefit = styled.button`
  width: 90%;
  height: 40px;
  background: white;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.darkBlue};
`
export const BgImageVisit = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
  @media (max-width: 500px) {
    object-position: top 0 right 60%;
  }
`
export const Message = styled.p`
  padding: 30px;
  font-family: 'Oswald';
  font-size: ${({ theme }) => theme.dims.fonts.section};
  color: white;
  position: absolute;
  text-align: center;
  max-width: 50%;
  top: 25%;
  background: rgba(${({ theme }) => theme.backgrounds.dark});
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
  @media (max-width: 760px) {
    top: 8%;
  }
  @media (min-width: 1280px) {
    max-width: 40%;
  }
`
export const BarQuestion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 300px;
  width: 100%;
  img {
    height: 500px;
    filter: drop-shadow(${({ theme }) => theme.shadows.depth4});
  }
  @media (max-width: 500px) {
    flex-direction: column;
    position: relative;
  }
  @media (max-width: 760px) {
    img {
      height: 450px;
    }
  }
`
export const TextQuestion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-family: 'Oswald';
  h2 {
    font-size: ${({ theme }) => theme.dims.fonts.section};
    font-weight: 500;
  }
  span {
    font-size: 1.5rem;
  }
  a {
    font-size: 1rem;
    text-decoration: underline;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.electricBlue};
  }
  @media (max-width: 500px) {
    position: absolute;
    padding: 20px;
    z-index: 1;
    background: rgba(${({ theme }) => theme.backgrounds.dark});
  }
  @media (max-width: 760px) {
    h2 {
      font-size: 2rem;
    }
    span {
      font-size: 1rem;
    }
  }
`
export const TextDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-family: 'Oswald';
  h2 {
    font-weight: 500;
    font-size: 2.5rem;
  }
  p {
    font-size: 1.2rem;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
  @media (max-width: 760px) {
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`
export const TextFront = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-family: 'Oswald';
  width: 60%;
  height: 60%;
  text-align: center;
  color: white;
  z-index: 1;
  padding: 30px 30px 30px 0;
  background: rgba(${({ theme }) => theme.backgrounds.dark});
  clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0 51%, 0% 0%);
  h1 {
    font-size: 4rem;
    font-weight: 500;
  }
  h3 {
    font-size: ${({ theme }) => theme.dims.fonts.section};
    width: 80%;
  }
  h4 {
    font-size: 1.5rem;
    width: 70%;
  }
  button {
    width: 200px;
    padding: 10px;
    background: ${({ theme }) => theme.colors.darkBlue};
    cursor: pointer;
  }
  @media (max-width: 760px) {
    width: 90%;
    h1 {
      font-size: ${({ theme }) => theme.dims.fonts.section};
    }
    h3 {
      font-size: 2rem;
    }
    h4 {
      font-size: 1rem;
    }
  }
`
export const AnimatedContainer = styled.div`
  width: 300px;
  height: fit-content;
  display: flex;
  flex: 300px 0 300px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadows.depth4};
  img {
    width: 100%;
  }
  span {
    width: 100%;
    background: ${({ theme }) => theme.colors.darkBlue};
    color: white;
    text-align: center;
    padding: 10px 0;
    font-family: 'Oswald';
    font-weight: 500;
  }
`
export const CardOfferContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 350px 0 350px;
  align-items: flex-start;
  padding: 30px;
  width: 350px;
  height: fit-content;
  background: white;
  font-family: 'Oswald';
  box-shadow: ${({ theme }) => theme.shadows.depth4};
  span {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.gray};
  }
  button {
    width: 100%;
    background: ${({ theme }) => theme.colors.darkBlue};
    color: white;
    padding: 10px 0;
  }
`
export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  p {
    font-size: 1.5rem;
    font-weight: 400;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: 500;
  }
  a {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray};
  }
`
