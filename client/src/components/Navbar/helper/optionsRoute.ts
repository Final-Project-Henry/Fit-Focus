import { OptionMenu } from 'components/DropdownMenu/helper/interfaces'
import { RouteInterface } from 'shared/interfaces/navbar-interfaces'
import { routes } from 'shared/shareData'

const options = (
  goToPage: (path: string) => void,
  handleOpenMenu: () => void,
) => {
  const routeOptions = routes?.reduce(
    (array: OptionMenu[], route: RouteInterface) => {
      const submenus: OptionMenu[] = []
      if (route.subMenus) {
        route.menus?.forEach(e => {
          submenus.push({
            label: e.title,
            select: () => {
              goToPage(e.path)
              handleOpenMenu()
            },
          })
        })
      } else {
        submenus.push({
          label: route.title,
          select: () => {
            goToPage(route.path)
            handleOpenMenu()
          },
        })
      }
      return array.concat(submenus)
    },
    [],
  )
  return routeOptions
}

export default options
