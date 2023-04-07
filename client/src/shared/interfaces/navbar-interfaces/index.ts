export interface MobileNavbarProps {
  handleOpenMenu: () => void
  isOpenMenu: boolean
  goHome: () => void
}

export interface FullNavbarProps {
  goHome: () => void
  isLogged: boolean
  avatar?: string
  name: string
  email: string
  openUserMenu: boolean
  handleUserMenu: () => void
  closeUserMenu: () => void
  isAdmin: boolean
  handleMenuSelect: (actionn: string) => void
}

export interface SubMenuRoute {
  path: string
  title: string
}

export interface RouteInterface {
  path: string
  title: string
  subMenus: boolean
  menus?: SubMenuRoute[]
}

export interface UserMenuProps {
  openUserMenu: boolean
  close: () => void
  isAdmin: boolean
  name: string
  email: string
  handleMenuSelect: (actionn: string) => void
}
