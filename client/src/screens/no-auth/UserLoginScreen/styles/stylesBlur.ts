import styled from 'styled-components'
import { loginScreenMobile, logoLight } from 'shared/shareData/images-links'

export const ScreenContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    height: 100%;
    background: url(${loginScreenMobile}) no-repeat fixed center / cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -2;
  }
`
export const CardContainer = styled.div`
  width: 800px;
  height: 400px;
  position: relative;
  box-shadow: 0 4px 10px #000e3e55;
  z-index: 0;
  @media (max-width: 500px) {
    width: 90vw;
    height: auto;
    box-shadow: inherit;
  }
`
export const BlurBackground = styled.div`
  display: none;
  @media (max-width: 500px) {
    display: initial;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
  }
`
export const BlurImage = styled(ScreenContainer)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  filter: blur(20px);
`
export const FormContainer = styled.div`
  width: 400px;
  height: 400px;
  @media (max-width: 500px) {
    width: 90%;
    height: 60vh;
    z-index: 0;
  }
`
export const ImageContainer = styled.div`
  width: 400px;
  height: 400px;
  position: relative;
  @media (max-width: 500px) {
    display: none;
  }
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const Logo = styled.div`
  display: none;
  background-image: url(${logoLight});
  @media (max-width: 500px) {
    display: initial;
    height: 100px;
    width: 100px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`
export const Phrase = styled.span`
  position: absolute;
  width: 80%;
  bottom: 10px;
  left: 10px;
  color: white;
`
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const Titles = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
