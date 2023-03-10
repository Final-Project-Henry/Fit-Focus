import NewNavbar from 'components/Navbar/NewNavbar'
import Navbar from 'components/Navbar/Navbar'
import { Container, ContainerScreen } from '../styles'

const Visit = () => {
  return (
    <ContainerScreen>
      <NewNavbar />
      <Navbar />
      <Container>
        <span>Visit</span>
      </Container>
    </ContainerScreen>
  )
}

export default Visit
