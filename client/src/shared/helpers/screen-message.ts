import { MessageContext } from 'contexts/ScreenMessageContext'
import { Dispatch, SetStateAction } from 'react'
import Swal from 'sweetalert2'

const Toast = (setData: Dispatch<SetStateAction<MessageContext>>) =>
  Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    willClose: () => {
      setData({ message: 'default', type: 'default' })
    },
    didOpen: toast => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
  })

export default Toast
