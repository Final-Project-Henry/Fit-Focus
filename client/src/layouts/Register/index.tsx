import NewNavbar from 'components/Navbar/NewNavbar'
import { Outlet } from 'react-router-dom'
import { ContainerScreen, Container } from '../styles'

const Register = () => {
  return (
    <ContainerScreen id='layout-container'>
      <NewNavbar />
      <Container>
        <Outlet />
      </Container>
    </ContainerScreen>
  )
}

export default Register
