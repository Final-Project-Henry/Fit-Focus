export interface MobileNavbarInterfaces {
  handleOpenMenu: () => void
  isOpenMenu: boolean
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
