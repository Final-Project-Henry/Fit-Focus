import { homeLoggedBanner } from 'shared/shareData'
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

export const LoggedScreenContainer = styled.div`
  background-color: red;
  width: 100%;
  flex-direction: column;
  height: fit-content;
  position: absolute;
  top: 0;
  z-index: 0;
`
export const BannerArea = styled(ResponsiveContainer)`
  background-image: url(${homeLoggedBanner});
  background-size: cover;
  background-position: center;
`
export const BannerContent = styled(BasicDiv)`
  background-color: transparent;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding-bottom: 10%;
`
export const Title = styled.h1`
  font-family: 'Oswald';
  font-size: 4rem;
  font-weight: 500;
  width: 80%;
  text-align: center;
  color: white;
  text-shadow: ${({ theme }) => theme.shadows.depth4};
`
export const SubTitle = styled.h4`
  font-family: 'Oswald';
  font-size: 1.5rem;
  font-weight: 500;
  width: 80%;
  text-align: center;
  color: white;
  text-shadow: ${({ theme }) => theme.shadows.depth4};
`
export const BannerButton = styled.button`
  width: 200px;
  background: ${({ theme }) => theme.colors.darkBlue};
  color: white;
  padding: 10px 0;
  margin-top: 20px;
  box-shadow: ${({ theme }) => theme.shadows.depth4};
`
export const WeekExercisesArea = styled(ResponsiveContainer)`
  background-color: red;
  background-size: cover;
  background-position: center;
`
export const WeekExercisesContent = styled(BasicDiv)`
  background-color: blue;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 10%;
`
