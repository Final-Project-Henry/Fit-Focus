import { useEffect, useState } from 'react'
import useWindowsSize from 'shared/customHooks/useWindowsSize'
import MobileNavbar from './components/MobileNavbar'
import FullNavbar from './components/FullNavbar'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from 'shared/customHooks/reduxHooks'

const NewNavbar = () => {
  const { width } = useWindowsSize()
  const navigate = useNavigate()

  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isSmall, setIsSmall] = useState(false)

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
      email={userInfo?.email || ''}
    />
  )
}

export default NewNavbar
