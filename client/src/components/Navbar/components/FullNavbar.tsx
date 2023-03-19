import { Link } from 'react-router-dom'
import {
  FullNavbarProps,
  RouteInterface,
} from 'shared/interfaces/navbar-interfaces'
import { logoLight, routes } from 'shared/shareData'
import {
  Container,
  Image,
  LoginArea,
  Navbar,
  RoutesArea,
  RoutesList,
} from '../styles/navbarStyles'

const FullNavbar = ({ goHome }: FullNavbarProps) => {
  return (
    <Container>
      <Navbar>
        <RoutesArea>
          <Image onClick={goHome}>
            <img src={logoLight} />
          </Image>
          <RoutesList>
            {routes.map((route: RouteInterface, index: number) => (
              <Link to={route.path} key={index}>
                <span>{route.title}</span>
              </Link>
            ))}
          </RoutesList>
        </RoutesArea>
        <LoginArea>
          <Link to='/login'>
            <span>Iniciar</span>
          </Link>
          <Link to='/register'>
            <span>Registrarse</span>
          </Link>
        </LoginArea>
      </Navbar>
    </Container>
  )
}

export default FullNavbar
