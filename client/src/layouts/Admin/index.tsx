import NewNavbar from 'components/Navbar/NewNavbar'
import { Outlet } from 'react-router-dom'
import { ContainerScreen, Container } from '../styles'

const AdminLayout = () => {
  return (
    <ContainerScreen>
      <NewNavbar />
      <Container>
        <Outlet />
      </Container>
    </ContainerScreen>
  )
}

export default AdminLayout
