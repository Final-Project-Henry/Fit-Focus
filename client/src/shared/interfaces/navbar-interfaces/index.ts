export interface MobileNavbarProps {
  handleOpenMenu: () => void
  handleMenuSelect: (actionn: string) => void
  isOpenMenu: boolean
  goToPage: (path: string) => void
  isLogged: boolean
  avatar?: string
  name: string
  email: string
  isAdmin: boolean
}

export interface FullNavbarProps {
  goToPage: (path: string) => void
  isLogged: boolean
  avatar?: string
  name: string
  email: string
  openUserMenu: boolean
  handleUserMenu: () => void
  closeUserMenu: () => void
  isAdmin: boolean
  handleMenuSelect: (actionn: string) => void
  openMenuRoutes: boolean
  handleOpenMenuRoutes: () => void
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

export interface MenuHeaderProps {
  goToPage: (path: string) => void
  handleOpenMenu: () => void
  isLogged: boolean
  avatar?: string
  name: string
  email: string
  isAdmin: boolean
  handleMenuSelect: (actionn: string) => void
}
