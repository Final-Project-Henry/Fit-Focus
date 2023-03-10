import { useState, useEffect } from 'react'
import { useWindowsInterface } from '../interfaces/custom-hooks-interfaces'

const useWindowsSize = () => {
  const [windowSize, setWindowSize] = useState<useWindowsInterface>({
    width: undefined,
    height: undefined,
  })
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export default useWindowsSize
