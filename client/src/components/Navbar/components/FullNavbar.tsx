import { Link } from 'react-router-dom'
import {
  FullNavbarProps,
  RouteInterface,
} from 'shared/interfaces/navbar-interfaces'
import { defaultAvatar, logoLight, routes } from 'shared/shareData'
import {
  AvatarContainer,
  Container,
  ExmailText,
  Image,
  LoginArea,
  Navbar,
  RoutesArea,
  RoutesList,
} from '../styles/navbarStyles'
import { Avatar } from '@mui/material'
import UserMenu from './UserMenu'

const FullNavbar = ({
  goHome,
  isLogged,
  avatar,
  name,
  email,
  openUserMenu,
  handleUserMenu,
  closeUserMenu,
  isAdmin,
  handleMenuSelect,
}: FullNavbarProps) => {
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
        {isLogged ? (
          <LoginArea>
            <ExmailText>{email}</ExmailText>
            <AvatarContainer onClick={handleUserMenu} id='avatar-logo'>
              <Avatar src={avatar || defaultAvatar} alt='avatar' />
              {openUserMenu && (
                <UserMenu
                  openUserMenu={openUserMenu}
                  close={closeUserMenu}
                  isAdmin={isAdmin}
                  name={name}
                  email={email}
                  handleMenuSelect={handleMenuSelect}
                />
              )}
            </AvatarContainer>
          </LoginArea>
        ) : (
          <LoginArea>
            <Link to='/login'>
              <span>Iniciar</span>
            </Link>
            <Link to='/register'>
              <span>Registrarse</span>
            </Link>
          </LoginArea>
        )}
      </Navbar>
    </Container>
  )
}

export default FullNavbar
