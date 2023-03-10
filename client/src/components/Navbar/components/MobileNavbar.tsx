import { Menu } from '@mui/icons-material'
import { logoLight } from 'shared/shareData'
import {
  Container,
  Image,
  MenuButton,
  Navbar,
  RoutesArea,
} from '../styles/navbarStyles'
import { MobileNavbarInterfaces } from 'shared/interfaces/navbar-interfaces'

const MobileNavbar = ({
  handleOpenMenu,
  isOpenMenu,
}: MobileNavbarInterfaces) => {
  return (
    <>
      <Container>
        <Navbar>
          <RoutesArea>
            <MenuButton onClick={handleOpenMenu}>
              <Menu />
            </MenuButton>
            <Image>
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
