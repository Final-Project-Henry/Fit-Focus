import { useEffect, useState } from 'react'
import useWindowsSize from 'shared/customHooks/useWindowsSize'
import MobileNavbar from './components/MobileNavbar'
import FullNavbar from './components/FullNavbar'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'shared/customHooks/reduxHooks'
import { GET_USER_LOGOUT } from 'redux/constants/userConstants'
import CustomAlert from 'components/Alert/CustomAlert'
import { useScreenMessage } from 'contexts/ScreenMessageContext'

const Navbar = () => {
  const { width } = useWindowsSize()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isSmall, setIsSmall] = useState(false)
  const [openUserMenu, setOpenUserMenu] = useState(false)
  const [openMenuRoutes, setOpenMenuRoutes] = useState(false)
  const { setData } = useScreenMessage()

  const { userInfo } = useAppSelector(state => state.userLogin)

  useEffect(() => {
    if (width && width < 760) {
      setIsSmall(true)
      setOpenUserMenu(false)
      setOpenMenuRoutes(false)
    } else if (width && width >= 760) {
      setIsSmall(false)
      setIsOpenMenu(false)
    }
  }, [width])

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }
  const goToPage = (path: string) => {
    navigate(path)
  }
  const handleUserMenu = () => {
    setOpenUserMenu(!openUserMenu)
  }
  const handleMenuSelect = (action: string) => {
    let path = ''
    if (action === 'logout') {
      return CustomAlert({
        text: '¿Desea cerrar sesión?',
        showCancel: true,
        confirmText: 'Cerrar Sesión',
        cancelText: 'Cancelar',
        confirmAction: () => {
          showMessage()
          navigate('/home')
          dispatch({ type: GET_USER_LOGOUT })
        },
      })
    } else {
      path = action === 'profile' ? '/profile' : 'admin/'
    }
    navigate(path)
  }
  const handleOpenMenuRoutes = () => {
    setOpenMenuRoutes(!openMenuRoutes)
  }
  const showMessage = () => {
    setData({
      message: 'Hasta la pronto.',
      type: 'warning',
    })
  }

  return isSmall ? (
    <MobileNavbar
      handleOpenMenu={handleOpenMenu}
      handleMenuSelect={handleMenuSelect}
      isOpenMenu={isOpenMenu}
      goToPage={goToPage}
      isLogged={!!userInfo}
      avatar={userInfo?.avatar}
      name={userInfo?.name || ''}
      email={userInfo?.email || ''}
      isAdmin={!!userInfo?.isAdmin}
    />
  ) : (
    <FullNavbar
      goToPage={goToPage}
      isLogged={!!userInfo}
      avatar={userInfo?.avatar}
      name={userInfo?.name || ''}
      email={userInfo?.email || ''}
      openUserMenu={openUserMenu}
      handleUserMenu={handleUserMenu}
      closeUserMenu={handleUserMenu}
      isAdmin={!!userInfo?.isAdmin}
      handleMenuSelect={handleMenuSelect}
      openMenuRoutes={openMenuRoutes}
      handleOpenMenuRoutes={handleOpenMenuRoutes}
    />
  )
}

export default Navbar
