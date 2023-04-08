import { AdminPanelSettings, Logout, Person } from '@mui/icons-material'
import { Divider, ListItemIcon, Menu, MenuItem } from '@mui/material'
import { UserMenuProps } from 'shared/interfaces/navbar-interfaces'
import { MenuEmail, MenuName, MenuTitle } from '../styles/navbarStyles'

const UserMenu = ({
  openUserMenu,
  close,
  isAdmin,
  name,
  email,
  handleMenuSelect,
}: UserMenuProps) => {
  const anchorEl = document.getElementById('avatar-logo')
  return (
    <Menu
      anchorEl={anchorEl}
      id='account-menu'
      open={openUserMenu}
      onClose={close}
      PaperProps={{
        elevation: 0,
        sx: {
          minWidth: '150px',
          marginTop: '5px',
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem>
        <MenuTitle>
          <MenuName>{name}</MenuName>
          <MenuEmail>{email}</MenuEmail>
        </MenuTitle>
      </MenuItem>
      <Divider />
      <MenuItem onClick={() => handleMenuSelect('profile')}>
        <ListItemIcon>
          <Person />
        </ListItemIcon>
        Mi Perfil
      </MenuItem>
      {isAdmin && (
        <MenuItem onClick={() => handleMenuSelect('admin')}>
          <ListItemIcon>
            <AdminPanelSettings />
          </ListItemIcon>
          Panel Admin
        </MenuItem>
      )}
      <MenuItem onClick={() => handleMenuSelect('logout')}>
        <ListItemIcon>
          <Logout fontSize='small' />
        </ListItemIcon>
        Cerrar Sesión
      </MenuItem>
    </Menu>
  )
}

export default UserMenu
