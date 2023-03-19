import { Menu } from '@mui/icons-material'
import { logoLight } from 'shared/shareData'
import {
  Container,
  Image,
  MenuButton,
  Navbar,
  RoutesArea,
} from '../styles/navbarStyles'
import { MobileNavbarProps } from 'shared/interfaces/navbar-interfaces'

const MobileNavbar = ({
  handleOpenMenu,
  isOpenMenu,
  goHome,
}: MobileNavbarProps) => {
  return (
    <>
      <Container>
        <Navbar>
          <RoutesArea>
            <MenuButton onClick={handleOpenMenu}>
              <Menu />
            </MenuButton>
            <Image onClick={goHome}>
              <img src={logoLight} width='70%' />
            </Image>
          </RoutesArea>
        </Navbar>
      </Container>
      {isOpenMenu && <span>Se Abrio el menu</span>}
    </>
  )
}

export default MobileNavbar
