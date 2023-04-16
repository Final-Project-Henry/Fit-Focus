import { Menu } from '@mui/icons-material'
import { logoLight } from 'shared/shareData'
import { Container, Image, MenuButton, Navbar, RoutesArea } from '../styles/navbarStyles'
import { MobileNavbarProps } from 'shared/interfaces/navbar-interfaces'
import DropdownMenu from 'components/DropdownMenu/DropdownMenu'
import options from '../helper/optionsRoute'
import ResponsiveMenuHeader from './ResponsiveMenuHeader'

const MobileNavbar = ({
  handleOpenMenu,
  handleMenuSelect,
  isOpenMenu,
  goToPage,
  isLogged,
  avatar,
  name,
  email,
  isAdmin,
}: MobileNavbarProps) => {
  const anchorEl = document.getElementById('mobile-menu')
  return (
    <>
      <Container>
        <Navbar>
          <RoutesArea>
            <MenuButton onClick={handleOpenMenu} id='mobile-menu'>
              <Menu />
            </MenuButton>
            <Image onClick={() => goToPage('/home')}>
              <img src={logoLight} width='70%' />
            </Image>
          </RoutesArea>
        </Navbar>
      </Container>
      {isOpenMenu && (
        <DropdownMenu
          options={options(goToPage, handleOpenMenu)}
          anchorEl={anchorEl}
          open={isOpenMenu}
          close={handleOpenMenu}
          sx={{
            width: '100vw !important',
            top: '0px !important',
            left: '0px !important',
            margin: 0,
            padding: 0,
            maxWidth: '100vw !important',
            borderRadius: 0,
            background: 'skyblue',
          }}
          header={
            <ResponsiveMenuHeader
              goToPage={goToPage}
              handleOpenMenu={handleOpenMenu}
              isLogged={isLogged}
              avatar={avatar}
              name={name}
              email={email}
              isAdmin={isAdmin}
              handleMenuSelect={handleMenuSelect}
            />
          }
        />
      )}
    </>
  )
}

export default MobileNavbar
