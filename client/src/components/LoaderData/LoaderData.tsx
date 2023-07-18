import { AllBalls, BallsContainer, Container, FirstBall, Message, SecondBall } from './styles/loaderDataStyles'

const Loader = () => {
  return (
    <>
      <Container>
        <BallsContainer>
          <FirstBall></FirstBall>
          <SecondBall></SecondBall>
          <AllBalls></AllBalls>
        </BallsContainer>
        <Message>Cargando...</Message>
      </Container>
    </>
  )
}

export default Loader
