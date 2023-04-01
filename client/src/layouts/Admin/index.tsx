import Navbar from 'components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { ContainerScreen, Container } from '../styles'

const AdminLayout = () => {
  return (
    <ContainerScreen>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </ContainerScreen>
  )
}

export default AdminLayout
