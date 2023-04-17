import { Alert, CircularProgress, Divider, IconButton, InputAdornment, TextField, Tooltip } from '@mui/material'
import { AccountCircle, Lock, Visibility, VisibilityOff } from '@mui/icons-material'
import GoogleAuth from 'components/GoogleAuth/GoogleAuth'
import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridItem'
import { LoginInputsProps } from '../helpers/interfaces'
import { LoginFormContainer, RecoveryText, SubmitButton, Titles } from '../styles/userLoginScreenStyles'

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
    <LoginFormContainer>
      <GridContainer>
        <GridItem xs={12}>
          <Titles>
            <strong>Inicia sesión</strong>
          </Titles>
        </GridItem>
        <GridItem xs={12}>
          <GridContainer>
            <GridItem xs={12}>
              <TextField
                id='email'
                name='email'
                variant='standard'
                margin='normal'
                label='Correo'
                error={!!error.email}
                helperText={error.email}
                type='email'
                fullWidth
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
            </GridItem>
            <GridItem xs={12}>
              <TextField
                id='password'
                name='password'
                variant='standard'
                margin='normal'
                label='Contraseña'
                error={!!error.password}
                helperText={error.password}
                type={data.viewPassword ? 'text' : 'password'}
                fullWidth
                placeholder='********'
                required={true}
                value={data.password}
                onChange={({ target: { value } }) => handleInfo('password', value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Lock />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position='end'>
                      {data.viewPassword ? (
                        <IconButton onClick={() => handleInfo('viewPassword', false)}>
                          <VisibilityOff />
                        </IconButton>
                      ) : (
                        <IconButton onClick={() => handleInfo('viewPassword', true)}>
                          <Tooltip title='Mostrar contraseña' placement='top-start'>
                            <Visibility />
                          </Tooltip>
                        </IconButton>
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={6} md={12}>
          <RecoveryText onClick={recoveryPass}>Olvidaste tu contraseña?</RecoveryText>
        </GridItem>
        <GridItem xs={12} sm={6} md={12}>
          <SubmitButton onClick={submit} disabled={disableButton}>
            <div>{disableButton && <CircularProgress color='inherit' size={15} />}</div>
            <span>{disableButton ? 'Iniciando...' : 'Iniciar sesión'}</span>
            <div></div>
          </SubmitButton>
        </GridItem>
        <GridItem xs={12} sx={{ alignItems: 'center' }}>
          <Divider style={{ width: '100%', marginBottom: '5px' }}>
            <h4>O INICIA CON GOOGLE</h4>
          </Divider>
        </GridItem>
        <GridItem xs={12}>
          <GoogleAuth isLogin={true} />
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

export default LoginInputs
