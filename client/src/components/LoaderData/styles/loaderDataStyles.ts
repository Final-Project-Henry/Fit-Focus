import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const BallsContainer = styled.div`
  width: 3.5em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`
export const AllBalls = styled.div`
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  transform: translateY(-100%);
  animation: wave 0.2s ease-in-out alternate infinite;
  @keyframes wave {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }
`
export const FirstBall = styled(AllBalls)`
  animation-delay: -0.2s;
`
export const SecondBall = styled(AllBalls)`
  animation-delay: -0.1s;
`
export const Message = styled.div`
  margin-top: 20px;
`
