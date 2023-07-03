import GridItem from 'components/Grid/GridItem'
import styled from 'styled-components'

export const ScreenContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CardContainer = styled.div`
  max-width: 100%;
  height: 500px;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadows.depth4};
  z-index: 0;
  @media (max-width: 900px) {
    width: 100%;
    height: 100%;
    box-shadow: inherit;
    overflow: hidden;
    #gridContainer {
      #image-register {
        align-self: flex-end;
      }
      #image-login {
        align-self: flex-start;
      }
      #grid-form {
        height: 60% !important;
        align-self: center;
      }
    }
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
    box-shadow: inherit;
  }
`
export const FormContainer = styled.div`
  width: 400px;
  height: 500px;
  @media (max-width: 900px) {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 500px) {
    z-index: 0;
  }
`
export const LoginFormContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px 25px;
  font-family: 'Oswald';
  @media (max-width: 900px) {
    width: 100%;
  }
`
export const ImageContainer = styled.div`
  min-width: 400px;
  width: 35vw;
  height: 500px;
  position: relative;
  @media (max-width: 900px) {
    width: 100%;
    height: 300px;
    overflow: hidden;
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 300px;
    overflow: hidden;
  }
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`
export const Phrase = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  color: white;
  gap: 10px;
  h1 {
    font-size: 2rem;
  }
  a {
    font-weight: 500;
    color: white;
    text-decoration: underline;
  }
`
export const Titles = styled.h1`
  font-size: 2.5rem;
`
export const RecoveryText = styled.span`
  color: ${({ theme }) => theme.colors.electricBlue};
  font-size: 0.8em;
  width: 100%;
  text-align: start;
  cursor: pointer;
`
export const MessageModal = styled.p`
  font-size: 1rem;
  font-family: 'Oswald';
  font-weight: 300;
  width: 100%;
`
export const GridAction = styled(GridItem)`
  padding: 5px !important;
`
