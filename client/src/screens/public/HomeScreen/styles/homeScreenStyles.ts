import styled from 'styled-components'

const BasicDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: red;
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
  z-index: -1;
`
export const FrontContainer = styled(BasicDiv)`
  background: transparent;
`
export const FrontCover = styled(ResponsiveContainer)`
  background: green;
`
export const DetailContainer = styled(BasicDiv)`
  background: transparent;
`
export const DetailCover = styled(ResponsiveContainer)`
  background: blue;
`
export const QuestionContainer = styled(BasicDiv)`
  background: transparent;
`
export const QuestionCover = styled(ResponsiveContainer)`
  background: brown;
`
export const OffersContainer = styled(BasicDiv)`
  background: transparent;
`
export const OfferCover = styled(ResponsiveContainer)`
  background: magenta;
`
export const MotivationalPhraseContainer = styled(BasicDiv)`
  background: transparent;
`
export const MotivationalCover = styled(ResponsiveContainer)`
  background: purple;
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
  font-size: 3rem;
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
  /* border-radius: 30px; */
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
