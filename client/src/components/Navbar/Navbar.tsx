import { useEffect, useState } from 'react'
import useWindowsSize from 'shared/customHooks/useWindowsSize'
import MobileNavbar from './components/MobileNavbar'
import FullNavbar from './components/FullNavbar'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'shared/customHooks/reduxHooks'
import { GET_USER_LOGOUT } from 'redux/constants/userConstants'
import CustomAlert from 'components/Alert/CustomAlert'

const Navbar = () => {
  const { width } = useWindowsSize()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isSmall, setIsSmall] = useState(false)
  const [openUserMenu, setOpenUserMenu] = useState(false)

  const { userInfo } = useAppSelector(state => state.userLogin)

  useEffect(() => {
    if (width && width < 760) {
      setIsSmall(true)
    } else {
      setIsSmall(false)
    }
  }, [width])

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }
  const goHome = () => {
    navigate('/home')
  }
  const handleUserMenu = () => {
    setOpenUserMenu(!openUserMenu)
  }
  const handleMenuSelect = (action: string) => {
    let path = ''
    if (action === 'logout') {
      return CustomAlert({
        title: '¿Desea cerrar sesión?',
        showCancel: true,
        confirmText: 'Cerrar Sesión',
        cancelText: 'Cancelar',
        confirmAction: () => {
          navigate('/home')
          dispatch({ type: GET_USER_LOGOUT })
        },
      })
    } else {
      path = action === 'profile' ? '/profile' : 'admin/'
    }
    navigate(path)
  }

  return isSmall ? (
    <MobileNavbar
      handleOpenMenu={handleOpenMenu}
      isOpenMenu={isOpenMenu}
      goHome={goHome}
    />
  ) : (
    <FullNavbar
      goHome={goHome}
      isLogged={!!userInfo}
      avatar={userInfo?.avatar}
      name={userInfo?.name || ''}
      email={userInfo?.email || ''}
      openUserMenu={openUserMenu}
      handleUserMenu={handleUserMenu}
      closeUserMenu={handleUserMenu}
      isAdmin={!!userInfo?.isAdmin}
      handleMenuSelect={handleMenuSelect}
    />
  )
}

export default Navbar
