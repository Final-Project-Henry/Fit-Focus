import {
  AccountCircle,
  Lock,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material'
import {
  Alert,
  CircularProgress,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'
import GoogleAuth from 'components/GoogleAuth/GoogleAuth'
import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridItem'
import { LoginInputsProps } from '../helpers/interfaces'
import {
  ActionArea,
  InputsContainer,
  RecoveryText,
  SubmitButton,
  Titles,
} from '../styles/userLoginScreenStyles'

const LoginInputs = ({
  data,
  handleInfo,
  recoveryPass,
  submit,
  error,
  errorLogin,
  disableButton,
}: LoginInputsProps) => {
  return (
    <GridContainer>
      <GridItem xs={12}>
        <Titles>
          <Typography variant='h4'>
            <strong>Inicia sesión</strong>
          </Typography>
          <Typography>Bienvenido de vuelta!</Typography>
        </Titles>
      </GridItem>
      <GridItem xs={12}>
        <InputsContainer>
          <TextField
            id='email'
            name='email'
            label='Correo'
            error={!!error.email}
            helperText={error.email}
            type='email'
            placeholder='alex.perez@hotmail.com'
            required={true}
            value={data.email}
            onChange={({ target: { value } }) => handleInfo('email', value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id='password'
            name='password'
            label='Contraseña'
            placeholder='********'
            required={true}
            error={!!error.password}
            helperText='La contraseña debe tener un mínimo de 8 caracteres'
            type={data.viewPassword ? 'text' : 'password'}
            value={data.password}
            onChange={({ target: { value } }) => handleInfo('password', value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Lock />
                </InputAdornment>
              ),
              endAdornment: data.viewPassword ? (
                <IconButton onClick={() => handleInfo('viewPassword', false)}>
                  {/* <Tooltip title='Ocultar contraseña'> */}
                  <VisibilityOff />
                  {/* </Tooltip> */}
                </IconButton>
              ) : (
                <IconButton onClick={() => handleInfo('viewPassword', true)}>
                  <Tooltip title='Mostrar contraseña' placement='top-start'>
                    <Visibility />
                  </Tooltip>
                </IconButton>
              ),
            }}
          />
          <ActionArea>
            <RecoveryText onClick={recoveryPass}>
              Olvidaste tu contraseña?
            </RecoveryText>
            <SubmitButton onClick={submit} disabled={disableButton}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                {disableButton && (
                  <CircularProgress color='inherit' size={15} />
                )}
                {disableButton ? 'Iniciando...' : 'Iniciar sesión'}
              </div>
            </SubmitButton>
          </ActionArea>
        </InputsContainer>
      </GridItem>
      <GridItem xs={12}>
        <GridContainer>
          <GridItem xs={12} sx={{ alignItems: 'center' }}>
            <Divider style={{ width: '80%', marginBottom: '5px' }}>
              <Typography>O INICIA CON GOOGLE</Typography>
            </Divider>
          </GridItem>
          <GridItem xs={12}>
            <GoogleAuth />
          </GridItem>
        </GridContainer>
      </GridItem>
      <GridItem xs={12}>
        {errorLogin && <Alert severity='error'>{errorLogin}</Alert>}
      </GridItem>
    </GridContainer>
  )
}

export default LoginInputs
