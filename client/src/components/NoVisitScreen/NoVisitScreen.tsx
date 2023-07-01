import { useNavigate } from 'react-router-dom'
import Button from 'components/CustomButton/Button'
import { CustomLink, Message, NoVisitBgImage, NoVisitBody, NoVisitContent, Title } from './styles/noVisitScreenStyles'

const NoVisitScreen = () => {
  const navigate = useNavigate()
  return (
    <NoVisitBgImage>
      <NoVisitBody>
        <NoVisitContent>
          <Title>No Autorizado!</Title>
          <Message>Lo sentimos, esta pantalla solo esta disponible para los usuarios registrados.</Message>
          <CustomLink to='/login'>Ya tengo una cuenta.</CustomLink>
          <Button onClick={() => navigate('/register')}>Registrarme</Button>
        </NoVisitContent>
      </NoVisitBody>
    </NoVisitBgImage>
  )
}

export default NoVisitScreen
