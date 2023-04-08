import Swal, { SweetAlertResult } from 'sweetalert2'
import { FunctionData } from './helper/interfaces'
import { getIconColor, getIconName, getTitle } from './helper/get-icon-name'

const CustomAlert = async ({
  confirmText,
  text = '',
  icon = '',
  showCancel = false,
  cancelText = '',
  confirmColor,
  cancelColor = 'transparent',
  confirmAction,
  cancelAction = () => {
    ;('')
  },
}: FunctionData) => {
  const iconAlert = getIconName(icon)
  const iconColor = getIconColor(icon)
  const title = getTitle(icon)
  return Swal.fire({
    title,
    text,
    icon: iconAlert,
    iconColor,
    showCancelButton: showCancel,
    confirmButtonColor: confirmColor || iconColor,
    cancelButtonColor: cancelColor,
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
    reverseButtons: true,
    showCloseButton: true,
  }).then((result: SweetAlertResult) => {
    if (result.isConfirmed) {
      confirmAction()
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      cancelAction()
    }
  })
}

export default CustomAlert
