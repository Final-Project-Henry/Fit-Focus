import { useEffect, useState } from 'react'
import { videoLoading } from 'shared/shareData'
import {
  LoadingContainer,
  TextContainer,
  VideoContainer,
} from './styles/LoadingScreen'

const Loading = () => {
  const [isLongTime, setIsLongTime] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLongTime(true)
    }, 10000)
  }, [])
  return (
    <LoadingContainer>
      <VideoContainer autoPlay loop muted>
        <source src={videoLoading} />
      </VideoContainer>
      <TextContainer>
        <span>Cargando... Espere por favor</span>
        {isLongTime && (
          <>
            <span>Si esto toma mas de 1 min.</span>
            <span>reacargue la página</span>
          </>
        )}
      </TextContainer>
    </LoadingContainer>
  )
}

export default Loading
