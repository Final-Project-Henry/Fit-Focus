import { roles, routes } from './helpers/routes'
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AdminLayout from 'layouts/Admin'
import RegisterLayout from 'layouts/Register'
import VisitLayout from 'layouts/Visit'
import { RouteInterface } from 'shared/interfaces/routes-interfaces'
import ErrorAndRedirectPage from 'components/ErrorAndRedirectPage/ErrorAndRedirectPage'
import { errors } from 'shared/shareData'
import LandingPage from 'components/LandingPage/LandingPage'

const ManagementRoutes = () => {
  const user = { role: '' }

  const [role, setRole] = useState(roles.visitRole)
  const [filteredRoutes, setFilteredRoutes] = useState<RouteInterface[]>([])
  const [adminRoutes, setAdminRoutes] = useState<RouteInterface[] | null>(null)
  const [layout, setLayout] = useState<React.ReactNode>()

  useEffect(() => {
    if (role === roles.adminRole) {
      const aditionalRoutes = routes.filter(route => route.layout === 'admin')
      setAdminRoutes(aditionalRoutes)
    }
    const routeFilter = routes.filter(
      (route: RouteInterface) => route.layout === 'visit',
    )
    setFilteredRoutes(routeFilter)
  }, [role])
  useEffect(() => {
    if (role === roles.adminRole) {
      setLayout(<AdminLayout />)
    } else if (role === roles.loggedRole) {
      setLayout(<RegisterLayout />)
    } else {
      setLayout(<VisitLayout />)
    }
  }, [role])
  useEffect(() => {
    if (user) {
      if (user?.role === 'admin') {
        setRole(roles.adminRole)
      }
      setRole(roles.loggedRole)
    } else {
      setRole(roles.visitRole)
    }
  }, [user])

  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      {adminRoutes && (
        <Route path='/admin' element={layout}>
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
      <Route element={layout}>
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
