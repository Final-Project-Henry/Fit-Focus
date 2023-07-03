import { ReactNode } from 'react'
import { CustomCloseButton, CustomDialogTitle, Logo, ModalTitle } from './styles/dialogStyles'
import { Close } from '@mui/icons-material'
import { logoLight } from 'shared/shareData'

interface Props {
  children: ReactNode
  closeModal: () => void
  logo: boolean
}

const DialogTitle = ({ children, closeModal, logo }: Props) => {
  return (
    <CustomDialogTitle>
      <CustomCloseButton onClick={() => closeModal()} key='close-modal' aria-label='Close-modal'>
        <Close />
      </CustomCloseButton>
      {logo && <Logo src={logoLight} />}
      <ModalTitle>{children}</ModalTitle>
    </CustomDialogTitle>
  )
}

export default DialogTitle
