import GridContainer from 'components/Grid/GridContainer'
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
export const GridContainerStyled = styled(GridContainer)`
  gap: 20px;
`
export const Logo = styled.img`
  width: 200px;
`
export const ErrorImage = styled.img`
  max-width: 80%;
  @media (max-width: 500px) {
    margin-bottom: 50px;
  }
`
export const CenterContainer = styled.div`
  margin: 0;
  display: flex;
  width: 80%;
  gap: 20px;
  align-items: center;
  justify-content: center;
`
