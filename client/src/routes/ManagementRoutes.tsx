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
import Toast from 'shared/helpers/screen-message'
import { types, useScreenMessage } from 'contexts/ScreenMessageContext'
import Loading from 'components/loading/Loading'

const ManagementRoutes = () => {
  const [role, setRole] = useState(roles.visitRole)
  const [filteredRoutes, setFilteredRoutes] = useState<RouteInterface[]>([])
  const [adminRoutes, setAdminRoutes] = useState<RouteInterface[] | null>(null)
  const { data, setData } = useScreenMessage()

  const { userInfo } = useAppSelector(state => state.userLogin)

  useEffect(() => {
    if (!userInfo) return setRole(roles.visitRole)
    if (userInfo && userInfo?.isAdmin) return setRole(roles.adminRole)
    setRole(roles.loggedRole)
  }, [userInfo])
  useEffect(() => {
    let routeFilter: RouteInterface[]
    if ([roles.loggedRole, roles.adminRole].includes(role)) {
      routeFilter = routes.filter(route => route.role.includes(roles.loggedRole))
      if (role === roles.adminRole) {
        const aditionalRoutes = routes.filter(route => route.role.includes(roles.adminRole))
        setAdminRoutes([
          ...aditionalRoutes,
          {
            path: '*',
            title: '',
            layout: '',
            role: [roles.adminRole],
            component: <ErrorAndRedirectPage message={errors.notFound.message} number={errors.notFound.number} />,
          },
        ])
      }
    } else {
      routeFilter = routes.filter(route => route.role.includes(roles.visitRole))
    }
    setFilteredRoutes([
      ...routeFilter,
      {
        path: '*',
        title: '',
        layout: '',
        role: [roles.loggedRole, roles.visitRole],
        component: <ErrorAndRedirectPage message={errors.notFound.message} number={errors.notFound.number} />,
      },
    ])
  }, [role])
  useEffect(() => {
    if (data?.type !== types.default) {
      showScreenMessage()
    }
  }, [data])

  const showScreenMessage = () => {
    Toast(setData).fire({
      icon: data.type !== 'default' ? data.type : 'success',
      title: data.message,
    })
  }

  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      {adminRoutes && (
        <Route path='/admin' element={<AdminLayout />}>
          {!adminRoutes.length ? (
            <Route path={'*'} element={<Loading />} />
          ) : (
            adminRoutes.map((route: RouteInterface, index: number) => (
              <Route key={index} path={route.path} element={route.component} />
            ))
          )}
        </Route>
      )}
      <Route path='/' element={<PublicLayout />}>
        {!filteredRoutes.length ? (
          <Route path={'*'} element={<Loading />} />
        ) : (
          filteredRoutes.map((route: RouteInterface, index: number) => (
            <Route key={index} path={route.path} element={route.component} />
          ))
        )}
      </Route>
    </Routes>
  )
}

export default ManagementRoutes
