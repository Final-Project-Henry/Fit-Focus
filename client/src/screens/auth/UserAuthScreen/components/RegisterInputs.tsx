import {
  Alert,
  CircularProgress,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
} from '@mui/material'
import {
  AccountCircle,
  Email,
  Lock,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material'
import GoogleAuth from 'components/GoogleAuth/GoogleAuth'
import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridItem'
import { RegisterInputsProps } from '../helpers/interfaces'
import {
  InputsContainer,
  LoginFormContainer,
  SubmitButton,
  Titles,
} from '../styles/userLoginScreenStyles'

const RegisterInputs = ({
  data,
  handleInfo,
  submit,
  error,
  errorLogin,
  disableButton,
}: RegisterInputsProps) => {
  return (
    <LoginFormContainer>
      <GridContainer>
        <GridItem xs={12}>
          <Titles>
            <strong>Registrate</strong>
          </Titles>
        </GridItem>
        <GridItem xs={12}>
          <InputsContainer>
            <TextField
              id='name'
              name='name'
              variant='standard'
              margin='dense'
              label='Nombre'
              error={!!error.name}
              helperText={error.name}
              type='text'
              placeholder='Alex Perez'
              required={true}
              value={data.name}
              onChange={({ target: { value } }) => handleInfo('name', value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id='email'
              name='email'
              variant='standard'
              margin='dense'
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
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id='password'
              name='password'
              variant='standard'
              margin='dense'
              label='Contraseña'
              error={!!error.password}
              helperText={error.password}
              type={data.viewPassword ? 'text' : 'password'}
              placeholder='********'
              required={true}
              value={data.password}
              onChange={({ target: { value } }) =>
                handleInfo('password', value)
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Lock />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    {data.viewPassword ? (
                      <IconButton
                        onClick={() => handleInfo('viewPassword', false)}
                      >
                        <VisibilityOff />
                      </IconButton>
                    ) : (
                      <IconButton
                        onClick={() => handleInfo('viewPassword', true)}
                      >
                        <Tooltip
                          title='Mostrar contraseña'
                          placement='top-start'
                        >
                          <Visibility />
                        </Tooltip>
                      </IconButton>
                    )}
                  </InputAdornment>
                ),
              }}
            />
          </InputsContainer>
        </GridItem>
        <GridItem xs={12}>
          <SubmitButton onClick={submit} disabled={disableButton}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {disableButton && <CircularProgress color='inherit' size={15} />}
              {disableButton ? 'Registrando...' : 'Registrarse'}
            </div>
          </SubmitButton>
        </GridItem>
        <GridItem xs={12} sx={{ alignItems: 'center' }}>
          <Divider style={{ width: '350px', marginBottom: '5px' }}>
            <h4>O REGISTRATE CON GOOGLE</h4>
          </Divider>
        </GridItem>
        <GridItem xs={12}>
          <GoogleAuth />
        </GridItem>
        <GridItem xs={12}>
          {errorLogin && (
            <Alert severity='error' sx={{ width: '350px' }}>
              {errorLogin}
            </Alert>
          )}
        </GridItem>
      </GridContainer>
    </LoginFormContainer>
  )
}

export default RegisterInputs
