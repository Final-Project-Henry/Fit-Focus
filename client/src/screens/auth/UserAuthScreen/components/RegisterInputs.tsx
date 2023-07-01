import { Alert, CircularProgress, Divider, IconButton, InputAdornment, TextField, Tooltip } from '@mui/material'
import { AccountCircle, Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material'
import GoogleAuth from 'components/GoogleAuth/GoogleAuth'
import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridItem'
import Button from 'components/CustomButton/Button'
import { RegisterInputsProps } from '../helpers/interfaces'
import { LoginFormContainer, Titles } from '../styles/userLoginScreenStyles'

const RegisterInputs = ({ data, handleInfo, submit, error, errorLogin, disableButton }: RegisterInputsProps) => {
  return (
    <LoginFormContainer>
      <GridContainer>
        <GridItem xs={12}>
          <Titles>
            <strong>Registrate</strong>
          </Titles>
        </GridItem>
        <GridItem xs={12}>
          <GridContainer>
            <GridItem xs={12}>
              <TextField
                id='name'
                name='name'
                variant='standard'
                margin='dense'
                label='Nombre'
                error={!!error.name}
                helperText={error.name}
                type='text'
                fullWidth
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
            </GridItem>
            <GridItem xs={12}>
              <TextField
                id='email'
                name='email'
                variant='standard'
                margin='dense'
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
                      <Email />
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
                margin='dense'
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
        <GridItem xs={12}>
          <Button onClick={submit} disabled={disableButton}>
            <div>{disableButton && <CircularProgress color='inherit' size={15} />}</div>
            <span>{disableButton ? 'Registrando...' : 'Registrarse'}</span>
            <div></div>
          </Button>
        </GridItem>
        <GridItem xs={12} sx={{ alignItems: 'center' }}>
          <Divider style={{ width: '100%', marginBottom: '5px' }}>
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
