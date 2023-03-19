import { useNavigate } from 'react-router-dom'
import { Error } from '@mui/icons-material'
import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridItem'
import { Props } from 'shared/interfaces/error-interfaces'
import { logoError, logoLight } from 'shared/shareData'
import {
  Button,
  ButtonArea,
  CenterContainer,
  ErrorImage,
  ErrorMessage,
  GridContainerStyled,
  Logo,
} from './styles/errorPageStyles'

const ErrorPage = ({ errorMessage, numberError, counter }: Props) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/home')
  }
  return (
    <GridContainer alignItems='stretch' justifyContent='center'>
      <GridItem xs={12} md={6}>
        <ErrorImage src={logoError}></ErrorImage>
      </GridItem>
      <GridItem xs={12} md={6}>
        <GridContainerStyled>
          <GridItem xs={12}>
            <CenterContainer>
              <Logo width='200px' src={logoLight} alt='logo-ligth'></Logo>
            </CenterContainer>
          </GridItem>
          <GridItem xs={12}>
            <CenterContainer>
              <span>
                <strong>{numberError}. HA OCURRIDO UN PROBLEMA</strong>
              </span>
              <Error />
            </CenterContainer>
          </GridItem>
          <GridItem xs={12}>
            <CenterContainer>
              Su cliente no tiene permiso para acceder a esta URL. Si el
              problema persiste, pongase en contacto con servicio técnico.
            </CenterContainer>
          </GridItem>
          <GridItem xs={12}>
            <ErrorMessage>
              <i>Error: {errorMessage}</i>
            </ErrorMessage>
          </GridItem>
          <GridItem xs={12}>
            <ButtonArea>
              <Button onClick={handleClick}>Regresar a Home</Button>
              <span>Regresando en {counter}s ...</span>
            </ButtonArea>
          </GridItem>
        </GridContainerStyled>
      </GridItem>
    </GridContainer>
  )
}

export default ErrorPage
