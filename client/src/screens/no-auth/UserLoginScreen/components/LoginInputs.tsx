import {
  AccountCircle,
  Lock,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material'
import {
  Button,
  Divider,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'
import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridItem'
import { LoginInputsProps } from '../helpers/interfaces'

const LoginInputs = ({ data, handleInfo }: LoginInputsProps) => {
  return (
    <GridContainer>
      <GridItem xs={12}>Inicia sesión</GridItem>
      <GridItem xs={12}>Bienvenido de vuelta!</GridItem>
      <GridItem xs={12}>
        <GridContainer>
          <GridItem xs={12}>
            <TextField
              id='email'
              name='email'
              label='Correo'
              type='email'
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
              label='Contraseña'
              type={data.viewPassword ? 'text' : 'password'}
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
                endAdornment: data.viewPassword ? (
                  <IconButton onClick={() => handleInfo('viewPassword', false)}>
                    <Tooltip title='Ocultar contraseña' placement='top-start'>
                      <VisibilityOff />
                    </Tooltip>
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
          </GridItem>
        </GridContainer>
      </GridItem>
      <GridItem xs={12}>
        <Button>Iniciar sesión</Button>
      </GridItem>
      {/* <GridItem xs={12}> */}
      <section>
        <Typography>O INICIA CON GOOGLE</Typography>
      </section>
      {/* </GridItem> */}
      <GridItem xs={12}>
        <Button>GOOGLE LOGIN</Button>
      </GridItem>
    </GridContainer>
  )
}

export default LoginInputs
