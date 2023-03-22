import styled from 'styled-components'

export const Button = styled.button`
  background: blue;
  color: white;
  font-weight: 500;
  font-size: 1rem;
  padding: 10px 20px;
`
export const ErrorMessage = styled.span`
  font-size: 1rem;
  font-weight: 700;
`
export const ButtonArea = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 0;
  }
`
export const GridContainerStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin: 20px;
`
export const Logo = styled.img`
  width: 200px;
  margin: auto;
`
export const ErrorImage = styled.img`
  max-width: 80%;
  margin: auto;
  @media (max-width: 500px) {
    margin-bottom: 50px;
    margin-top: 20px;
  }
`
export const CenterContainer = styled.div`
  padding: 0 20px;
  text-align: center;
  width: 80%;
  align-items: center;
`
