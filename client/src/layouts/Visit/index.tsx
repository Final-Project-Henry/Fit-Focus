import Navbar from 'components/Navbar/Navbar'
import { Container, ContainerScreen } from '../styles'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import Loading from 'components/loading/Loading'

const Visit = () => {
  return (
    <ContainerScreen>
      <Navbar />
      <Container>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Container>
    </ContainerScreen>
  )
}

export default Visit
