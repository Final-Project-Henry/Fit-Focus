import { CancelButton } from './styles/customButtonStyles'
import { Props } from 'shared/interfaces/grid-interfaces'

const ExitButton = ({ children, ...rest }: Props) => {
  return <CancelButton {...rest}>{children}</CancelButton>
}

export default ExitButton
