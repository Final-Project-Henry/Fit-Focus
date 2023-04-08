import styled from 'styled-components'

const BasicDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: red;
`

export const VisitScreenContainer = styled(BasicDiv)`
  flex-direction: column;
  height: fit-content;
  position: absolute;
  top: 0;
  z-index: -1;
`
export const FrontContainer = styled(BasicDiv)`
  background: green;
`
export const DetailContainer = styled(BasicDiv)`
  background: blue;
`
export const QuestionContainer = styled(BasicDiv)`
  background: brown;
`
export const OffersContainer = styled(BasicDiv)`
  background: magenta;
`
export const MotivationalPhraseContainer = styled(BasicDiv)`
  background: purple;
`
export const BenefitsContainer = styled(BasicDiv)`
  background: ${({ theme }) => theme.colors.lightGray};
  flex-direction: column;
`
export const AboutUsContainer = styled(BasicDiv)`
  background: ${({ theme }) => theme.colors.white};
  flex-direction: column;
  height: fit-content;
  padding: 20px 0 30px;
  @media (max-width: 500px) {
    height: 100vh;
    justify-content: space-evenly;
    padding: 0;
  }
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
  border-radius: 30px;
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
