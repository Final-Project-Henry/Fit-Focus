import Navbar from 'components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { ContainerScreen, Container } from '../styles'
import { Suspense } from 'react'
import Loading from 'components/loading/Loading'

const Register = () => {
  return (
    <ContainerScreen id='layout-container'>
      <Navbar />
      <Container>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Container>
    </ContainerScreen>
  )
}

export default Register
