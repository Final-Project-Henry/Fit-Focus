import { useEffect, useState } from 'react'
import useWindowsSize from 'shared/customHooks/useWindowsSize'
import MobileNavbar from './components/MobileNavbar'
import FullNavbar from './components/FullNavbar'

const NewNavbar = () => {
  const { width } = useWindowsSize()
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isSmall, setIsSmall] = useState(false)

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

  return isSmall ? (
    <MobileNavbar handleOpenMenu={handleOpenMenu} isOpenMenu={isOpenMenu} />
  ) : (
    <FullNavbar />
  )
}

export default NewNavbar
