export interface FunctionData {
  title: string
  text?: string
  icon?: string
  confirmText: string
  showCancel?: boolean
  cancelText?: string
  confirmColor?: string
  cancelColor?: string
  reverseButtons?: boolean
  confirmAction: () => void
  cancelAction?: () => void
}
