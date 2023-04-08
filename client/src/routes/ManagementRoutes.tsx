import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ErrorAndRedirectPage from 'components/ErrorAndRedirectPage/ErrorAndRedirectPage'
import LandingPage from 'components/LandingPage/LandingPage'
import AdminLayout from 'layouts/Admin'
import PublicLayout from 'layouts/Public'
import { roles, routes } from './helpers/routes'
import { RouteInterface } from 'shared/interfaces/routes-interfaces'
import { useAppSelector } from 'shared/customHooks/reduxHooks'
import { errors } from 'shared/shareData'

const ManagementRoutes = () => {
  const [role, setRole] = useState(roles.visitRole)
  const [filteredRoutes, setFilteredRoutes] = useState<RouteInterface[]>([])
  const [adminRoutes, setAdminRoutes] = useState<RouteInterface[] | null>(null)

  const { userInfo } = useAppSelector(state => state.userLogin)

  useEffect(() => {
    if (!userInfo) return setRole(roles.visitRole)
    if (userInfo && userInfo?.isAdmin) return setRole(roles.adminRole)
    setRole(roles.loggedRole)
  }, [userInfo])
  useEffect(() => {
    let routeFilter: RouteInterface[]
    if ([roles.loggedRole, roles.adminRole].includes(role)) {
      routeFilter = routes.filter(route =>
        route.role.includes(roles.loggedRole),
      )
      if (role === roles.adminRole) {
        const aditionalRoutes = routes.filter(route =>
          route.role.includes(roles.adminRole),
        )
        setAdminRoutes(aditionalRoutes)
      }
    } else {
      routeFilter = routes.filter(route => route.role.includes(roles.visitRole))
    }
    setFilteredRoutes(routeFilter)
  }, [role])

  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      {adminRoutes && (
        <Route path='/admin' element={<AdminLayout />}>
          {adminRoutes.map((route: RouteInterface, index: number) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
          <Route
            path={'*'}
            element={
              <ErrorAndRedirectPage
                message={errors.notFound.message}
                number={errors.notFound.number}
              />
            }
          />
        </Route>
      )}
      <Route path='/' element={<PublicLayout />}>
        {filteredRoutes.map((route: RouteInterface, index: number) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
        <Route
          path={'*'}
          element={
            <ErrorAndRedirectPage
              message={errors.notFound.message}
              number={errors.notFound.number}
            />
          }
        />
      </Route>
    </Routes>
  )
}

export default ManagementRoutes
