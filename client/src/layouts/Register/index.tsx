import Navbar from 'components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { ContainerScreen, Container } from '../styles'

const Register = () => {
  return (
    <ContainerScreen id='layout-container'>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </ContainerScreen>
  )
}

export default Register
