import styled from 'styled-components'

export const ScreenContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CardContainer = styled.div`
  width: 800px;
  height: 500px;
  position: relative;
  box-shadow: 0 4px 10px #000e3e55;
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
export const ImageContainer = styled.div`
  width: 400px;
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
  gap: 15px;
`
export const Titles = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ActionArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`
export const RecoveryText = styled.span`
  color: ${({ theme }) => theme.colors.electricBlue};
  font-size: 0.8em;
  &:hover {
    cursor: pointer;
  }
`
export const SubmitButton = styled.button`
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  padding: 5px 15px;
  font-weight: 500;
  width: 40%;
  border-radius: 3px;
`
