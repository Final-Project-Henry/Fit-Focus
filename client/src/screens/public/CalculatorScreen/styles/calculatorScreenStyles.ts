import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridItem'
import styled from 'styled-components'

export const CalculatorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CalculatorBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`
export const InfoContainer = styled(GridContainer)`
  padding: 16px;
`
export const Title = styled.h1`
  font-size: ${({ theme }) => theme.dims.fonts.title};
  color: ${({ theme }) => theme.colors.darkBlue};
  text-align: center;
  font-weight: 500;
`
export const SubTitle = styled.h1`
  font-size: ${({ theme }) => theme.dims.fonts.medium};
  color: ${({ theme }) => theme.colors.darkBlue};
  text-align: center;
  font-weight: 500;
`
export const InfoContent = styled.p`
  padding: 16px;
  font-size: ${({ theme }) => theme.dims.fonts.extraSmall};
  text-align: justify;
  font-weight: 300;
`
export const InputsContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  width: 300px;
`
export const CalcuBody = styled(GridContainer)`
  justify-content: center;
`
export const ButtonsArea = styled.div`
  width: 300px;
`
export const ButtonContainer = styled(GridItem)`
  padding: 5px !important;
`
export const ResultData = styled.span`
  text-align: start;
  width: 90%;
  padding-top: 10px;
`
export const DangerBar = styled.div`
  position: relative;
  height: 30px;
  width: 90%;
  z-index: 0;
  margin-top: 35px;
  margin-bottom: 25px;
  background: linear-gradient(
    90deg,
    rgba(19, 119, 205, 1) 5%,
    rgba(93, 197, 172, 1) 30%,
    rgba(127, 188, 121, 1) 50%,
    rgba(237, 183, 53, 1) 70%,
    rgba(182, 64, 62, 1) 95%
  );
`
export const TextResult = styled.p`
  padding: 16px;
  text-align: justify;
`
