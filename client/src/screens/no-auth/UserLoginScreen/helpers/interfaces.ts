export interface DataLogin {
  email: string
  password: string
  viewPassword: boolean
}

export interface ErrorInput {
  email: string
  password: string
}

export interface LoginInputsProps {
  data: DataLogin
  handleInfo: (key: string, value: string | boolean) => void
  recoveryPass: () => void
  submit: () => void
  error: ErrorInput
  errorLogin?: string
  disableButton: boolean
}
