export interface LoginInputsProps {
  data: {
    email: string
    password: string
    viewPassword: boolean
  }
  handleInfo: (key: string, value: string | boolean) => void
}
