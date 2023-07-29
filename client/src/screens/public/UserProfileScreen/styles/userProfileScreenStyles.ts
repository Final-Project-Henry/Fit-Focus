import { IconButton } from '@mui/material'
import GridContainer from 'components/Grid/GridContainer'
import styled from 'styled-components'

const BasicDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  max-width: 1280px;
`
export const UserProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`
export const UserProfileBodyContainer = styled(BasicDiv)`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: fit-content; */
  padding-bottom: 20px;
  position: relative;
`
export const FooterInfo = styled.span`
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: ${({ theme }) => theme.dims.fonts.small};
  font-weight: 300;
`
export const TabContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;
`
export const UserInfoContainer = styled.div`
  width: 100%;
  height: 100%;
`
export const GridContainerCenter = styled(GridContainer)`
  align-items: center;
`
export const ProfileImage = styled.div`
  clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
  margin: 0 auto;
  width: 200px;
  height: 200px;
  overflow: hidden;
  object-position: center;
  transform: rotate(15deg);
  box-shadow: ${({ theme }) => theme.shadows.depth4};
  position: relative;
`
export const ChangeImage = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  font-weight: 300;
  color: white;
  transform: rotate(-15deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  opacity: 0;
  :hover {
    opacity: 1;
  }
`
export const UserInfoBasicData = styled.div`
  width: 100%;
  height: 100px;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-family: 'Oswald';
`
export const NameInfo = styled.h2`
  font-size: ${({ theme }) => theme.dims.fonts.medium};
  font-weight: 700;
`
export const EmailInfo = styled.h2`
  font-size: ${({ theme }) => theme.dims.fonts.extraSmall};
  font-weight: 500;
`
export const GroupButtons = styled.div`
  position: absolute;
  z-index: 3;
  top: 0;
  display: flex;
  width: 100%;
  height: fit-content;
  gap: 20px;
  justify-content: center;
  align-items: center;
`
export const AvatarButton = styled(IconButton)`
  height: 40px;
  width: 40px;
`
