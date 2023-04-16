import { Link } from 'react-router-dom'
import { FullNavbarProps, RouteInterface } from 'shared/interfaces/navbar-interfaces'
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
  SubMenuTitle,
} from '../styles/navbarStyles'
import { Avatar } from '@mui/material'
import UserMenu from './UserMenu'
import DropdownMenu from 'components/DropdownMenu/DropdownMenu'

const FullNavbar = ({
  goToPage,
  isLogged,
  avatar,
  name,
  email,
  openUserMenu,
  handleUserMenu,
  closeUserMenu,
  isAdmin,
  handleMenuSelect,
  openMenuRoutes,
  handleOpenMenuRoutes,
}: FullNavbarProps) => {
  const exerciseAnchorEl = document.getElementById('exercise-link-route')
  return (
    <Container>
      <Navbar>
        <RoutesArea>
          <Image onClick={() => goToPage('/home')}>
            <img src={logoLight} />
          </Image>
          <RoutesList>
            {routes.map((route: RouteInterface, index: number) => {
              if (route.subMenus) {
                return (
                  <SubMenuTitle id='exercise-link-route' key={index} onClick={handleOpenMenuRoutes}>
                    <span>{route.title}</span>
                  </SubMenuTitle>
                )
              } else {
                return (
                  <Link to={route.path} key={index}>
                    <span>{route.title}</span>
                  </Link>
                )
              }
            })}
            {openMenuRoutes && (
              <DropdownMenu
                options={
                  routes[0].menus?.map(e => ({
                    label: e.title,
                    select: () => {
                      goToPage(e.path)
                      handleOpenMenuRoutes()
                    },
                  })) || []
                }
                anchorEl={exerciseAnchorEl}
                open={openMenuRoutes}
                close={handleOpenMenuRoutes}
                sx={{
                  marginTop: '15px',
                  marginLeft: '-16px',
                  minWidth: '150px',
                  padding: 0,
                  background: 'skyblue',
                  fontFamily: 'Oswald',
                }}
                transformOrigin={{
                  horizontal: 'left',
                  vertical: 'top',
                }}
                anchorOrigin={{
                  horizontal: 'left',
                  vertical: 'bottom',
                }}
              />
            )}
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
