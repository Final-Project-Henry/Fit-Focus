import Navbar from 'components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { ContainerScreen, Container } from '../styles'
import { Suspense } from 'react'
import Loading from 'components/loading/Loading'

const Public = () => {
  return (
    <ContainerScreen id='public-layout'>
      <Navbar />
      <Container>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Container>
    </ContainerScreen>
  )
}

export default Public
