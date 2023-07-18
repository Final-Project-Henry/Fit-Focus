import { RefObject, useEffect, useRef, useState } from 'react'

interface useNearProps {
  distance: string
  externalRef: RefObject<HTMLDivElement> | null
  once: boolean
}

export default function useNearScreen({ distance = '100px', externalRef, once = true }: useNearProps) {
  const fromRef = useRef<HTMLButtonElement>()
  const [isNearScreen, setshotw] = useState<boolean>(false)

  useEffect(() => {
    const element = externalRef ? externalRef.current : fromRef.current
    const onChange = (entries: IntersectionObserverEntry[]) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setshotw(true)
        once && observer.disconnect()
      } else {
        !once && setshotw(false)
      }
    }
    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    })

    if (element) observer.observe(element)
    return () => observer && observer.disconnect()
  }, [])

  return { fromRef, isNearScreen }
}
