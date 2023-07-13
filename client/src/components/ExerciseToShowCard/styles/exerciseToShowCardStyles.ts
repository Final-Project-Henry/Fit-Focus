import { DifficultyEnum, GenreEnum, MusclesEnum } from 'screens/public/HomeScreen/helper/interfaces'
import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 350px;
  height: 500px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.depth4};
  :hover {
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.white};
  }
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
export const CardBodyContainer = styled.img`
  width: 100%;
  height: 380px;
  object-fit: cover;
`
export const CardHeaderContainer = (muscle: MusclesEnum) => styled.div`
  display: flex;
  flex-direction: column;
  height: 120px;
  padding: 0;
  margin: 0;
  background-color: ${({ theme }) => theme.bgCardColors.muscle[muscle]};
  position: relative;
`
export const NameTitle = styled.h1`
  color: white;
  font-size: ${({ theme }) => theme.dims.fonts.medium};
  font-weight: 700;
  font-family: 'Oswald';
  text-align: start;
  padding: 16px;
`
export const SubTitle = styled.div`
  height: 64px;
  width: 100%;
  background-color: transparent;
  position: relative;
  &::after {
    content: ' ';
    background-color: ${({ theme }) => theme.colors.darkBlue};
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 32px;
  }
  &::before {
    content: ' ';
    position: absolute;
    bottom: 32px;
    right: 0;
    width: 50%;
    height: 32px;
    border-left: 48px solid transparent;
    border-bottom: 32px solid ${({ theme }) => theme.colors.darkBlue};
  }
`
export const MuscleTitle = styled.h4`
  position: absolute;
  bottom: 8px;
  text-align: center;
  color: white;
  font-size: ${({ theme }) => theme.dims.fonts.small};
  z-index: 2;
  margin-left: 16px;
`
export const CharacteristicsGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 64px;
  padding: 16px;
  right: 0;
  bottom: 0;
  z-index: 2;
  gap: 5px;
  justify-content: center;
`
export const GenreIconGenerate = (genre: GenreEnum) => styled.span`
  color: white;
  font-size: ${({ theme }) => theme.dims.fonts.small};
  background: ${({ theme }) => theme.bgCardColors.genre[genre]};
  text-align: center;
  border-radius: 9999px;
  padding: 0 15px;
`
export const DifficultyIconGenerate = (difficulty: DifficultyEnum) => styled.span`
  color: white;
  font-size: ${({ theme }) => theme.dims.fonts.small};
  background-color: ${({ theme }) => theme.bgCardColors.difficulty[difficulty]};
  text-align: center;
  border-radius: 9999px;
  padding: 0 15px;
`
export const RatingIcon = styled.span`
  color: white;
  font-size: ${({ theme }) => theme.dims.fonts.small};
  font-weight: 300;
  text-align: center;
  border-radius: 9999px;
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 2;
`
