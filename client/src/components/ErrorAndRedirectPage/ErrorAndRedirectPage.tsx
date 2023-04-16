import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ErrorPage from 'components/ErrorPage/ErrorPage'
import { ErrorRedirectProps } from 'shared/interfaces/error-interfaces'
import { Container, ContainerScreen } from './styles/errorAndRedirectStyles'

const ErrorAndRedirectPage = ({ message, number }: ErrorRedirectProps) => {
  const navigate = useNavigate()
  const [counter, setCounter] = useState(5)

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => prev - 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])
  useEffect(() => {
    if (counter === 0) {
      navigate('/home')
    }
  }, [counter])
  return (
    <ContainerScreen>
      <Container>
        <ErrorPage errorMessage={message} numberError={number} counter={counter} />
      </Container>
    </ContainerScreen>
  )
}

export default ErrorAndRedirectPage
