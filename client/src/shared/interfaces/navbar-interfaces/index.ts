export interface MobileNavbarProps {
  handleOpenMenu: () => void
  isOpenMenu: boolean
  goHome: () => void
}

export interface FullNavbarProps {
  goHome: () => void
  isLogged: boolean
  avatar?: string
  email: string
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
