import { defaultAvatar } from 'shared/shareData'
import {
  AvatarContainer,
  HeaderContainer,
  MenuEmail,
  MenuName,
  MenuTitle,
  MenuTitleMobile,
} from '../styles/navbarStyles'
import { MenuHeaderProps } from 'shared/interfaces/navbar-interfaces'
import { Avatar, Divider, ListItemIcon, MenuItem } from '@mui/material'
import {
  AdminPanelSettings,
  LockOpen,
  Logout,
  Person,
  PersonAdd,
} from '@mui/icons-material'

const ResponsiveMenuHeader = ({
  goToPage,
  handleOpenMenu,
  isLogged,
  avatar,
  name,
  email,
  isAdmin,
  handleMenuSelect,
}: MenuHeaderProps) => {
  return isLogged ? (
    <HeaderContainer>
      <MenuTitleMobile>
        <AvatarContainer>
          <Avatar
            src={avatar || defaultAvatar}
            alt='avatar'
            sx={{ width: '50px', height: '50px' }}
          />
        </AvatarContainer>
        <MenuTitle>
          <MenuName>{name}</MenuName>
          <MenuEmail>{email}</MenuEmail>
        </MenuTitle>
      </MenuTitleMobile>
      <Divider style={{ width: '90vw' }} />
      <MenuItem
        style={{
          paddingLeft: 0,
        }}
        onClick={() => {
          goToPage('/profile')
          handleOpenMenu()
        }}
      >
        <ListItemIcon>
          <Person />
        </ListItemIcon>
        Mi Perfil
      </MenuItem>
      {isAdmin && (
        <MenuItem
          style={{
            paddingLeft: 0,
          }}
          onClick={() => {
            goToPage('/admin')
            handleOpenMenu()
          }}
        >
          <ListItemIcon>
            <AdminPanelSettings />
          </ListItemIcon>
          Panel Admin
        </MenuItem>
      )}
      <MenuItem
        style={{
          paddingLeft: 0,
        }}
        onClick={() => {
          handleMenuSelect('logout')
          handleOpenMenu()
        }}
      >
        <ListItemIcon>
          <Logout fontSize='small' />
        </ListItemIcon>
        Cerrar Sesión
      </MenuItem>
      <Divider />
    </HeaderContainer>
  ) : (
    <HeaderContainer>
      <MenuTitleMobile>
        <AvatarContainer>
          <Avatar
            src={avatar || defaultAvatar}
            alt='avatar'
            sx={{ width: '50px', height: '50px' }}
          />
        </AvatarContainer>
        <MenuTitle>
          <MenuName>Visitante</MenuName>
        </MenuTitle>
      </MenuTitleMobile>
      <Divider style={{ width: '90vw' }} />
      <MenuItem
        style={{
          paddingLeft: 0,
        }}
        onClick={() => {
          goToPage('/login')
          handleOpenMenu()
        }}
      >
        <ListItemIcon>
          <LockOpen />
        </ListItemIcon>
        Iniciar
      </MenuItem>
      <MenuItem
        style={{
          paddingLeft: 0,
        }}
        onClick={() => {
          goToPage('/register')
          handleOpenMenu()
        }}
      >
        <ListItemIcon>
          <PersonAdd />
        </ListItemIcon>
        Registrarse
      </MenuItem>
      <Divider />
    </HeaderContainer>
  )
}

export default ResponsiveMenuHeader
