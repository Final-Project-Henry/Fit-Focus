import styled from 'styled-components'

export const ScreenContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CardContainer = styled.div`
  min-width: 800px;
  height: 500px;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadows.depth4};
  z-index: 0;
  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
    box-shadow: inherit;
  }
`
export const FormContainer = styled.div`
  width: 400px;
  height: 500px;
  @media (max-width: 500px) {
    width: 90%;
    z-index: 0;
  }
`
export const LoginFormContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px 10px;
  font-family: 'Oswald';
`
export const ImageContainer = styled.div`
  min-width: 400px;
  width: 35vw;
  height: 500px;
  position: relative;
  @media (max-width: 500px) {
    width: 100%;
    height: 200px;
    overflow: hidden;
  }
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 10px;
`
export const Titles = styled.h1`
  font-size: 2.5rem;
`
export const RecoveryText = styled.span`
  color: ${({ theme }) => theme.colors.electricBlue};
  font-size: 0.8em;
  cursor: pointer;
`
export const SubmitButton = styled.button`
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 15px;
  font-weight: 500;
  width: 350px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`
