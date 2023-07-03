import { useState } from 'react'
import { Dialog, DialogActions, DialogContent, InputAdornment, TextField } from '@mui/material'
import { AccountCircle, Mail, Warning } from '@mui/icons-material'
import DialogTitle from 'components/CustomDialog/DialogTitle'
import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridItem'
import ExitButton from 'components/CustomButton/CancelButton'
import Button from 'components/CustomButton/Button'
import { PasswordRecoveryModalProps } from '../helpers/interfaces'
import { GridAction, MessageModal } from '../styles/userLoginScreenStyles'
import { verifyEmail } from 'shared/validations/validationInputs'

const PasswordRecoveryModal = ({ openModal, closeModal }: PasswordRecoveryModalProps) => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleRecovery = () => {
    if (email.length < 1 || !verifyEmail(email)) {
      setError('El email ingresado es incorrecto')
    } else {
      setError(null)
      console.log('email', email) //dispatch the recoveryPasswordAction
    }
  }
  return (
    <Dialog
      open={openModal}
      keepMounted
      onClose={() => {
        closeModal()
      }}
    >
      <DialogTitle closeModal={closeModal} logo>
        Recupera tu contraseña
      </DialogTitle>
      <DialogContent>
        <GridContainer>
          <GridItem xs={12}>
            <MessageModal>
              Estimado usuario, porfavor ingrese el correo con el que se registró.
              <br />
              Luego utilice el enlace enviado al correo para reestablecer su contraseña.
              <br />
              <strong>
                <Warning />
                Tenga en cuenta que este enlace tiene una duración de un dia.
              </strong>
            </MessageModal>
          </GridItem>
          <GridItem xs={12}>
            <TextField
              id='email'
              name='email'
              variant='standard'
              margin='normal'
              type='email'
              error={!!error}
              helperText={error}
              fullWidth
              placeholder='alex.perez@hotmail.com'
              required={true}
              value={email}
              onChange={({ target: { value } }) => [setError(null), setEmail(value)]}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </GridItem>
        </GridContainer>
      </DialogContent>
      <DialogActions>
        <GridContainer>
          <GridAction xs={12} md={6} sx={{ padding: '5px' }}>
            <ExitButton onClick={() => closeModal()}>Cancelar</ExitButton>
          </GridAction>
          <GridAction xs={12} md={6}>
            <Button onClick={handleRecovery} disabled={email.length < 1}>
              Enviar enlace <Mail />
            </Button>
          </GridAction>
        </GridContainer>
      </DialogActions>
    </Dialog>
  )
}

export default PasswordRecoveryModal
