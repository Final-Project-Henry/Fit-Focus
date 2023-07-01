import { SubmitButton } from './styles/customButtonStyles'
import { Props } from 'shared/interfaces/grid-interfaces'

const Button = ({ children, ...rest }: Props) => {
  return <SubmitButton {...rest}>{children}</SubmitButton>
}

export default Button
