import ErrorPage from 'components/ErrorPage/ErrorPage'
import Navbar from 'components/Navbar/Navbar'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ErrorRedirectProps } from 'shared/interfaces/error-interfaces'
import { Container, ContainerScreen } from './styles/errorAndRedirectStyles'

const ErrorAndRedirectPage = ({ message, number }: ErrorRedirectProps) => {
  const navigate = useNavigate()
  const [counter, setCounter] = useState(5)

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('reduce counter')
      setCounter(prev => prev - 1)
    }, 1000)

    return () => {
      console.log('cleaning interval')
      clearInterval(interval)
    }
  }, [])
  useEffect(() => {
    if (counter === 0) {
      console.log('redirecting')
      navigate('/home')
    }
  }, [counter])
  return (
    <ContainerScreen>
      <Navbar />
      <Container>
        <ErrorPage
          errorMessage={message}
          numberError={number}
          counter={counter}
        />
      </Container>
    </ContainerScreen>
  )
}

export default ErrorAndRedirectPage
