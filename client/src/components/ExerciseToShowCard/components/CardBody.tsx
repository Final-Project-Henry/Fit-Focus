import { BodyCardProps } from '../helpers/interfaces'
import { CardBodyContainer } from '../styles/exerciseToShowCardStyles'

const CardBody = ({ gifUrl }: BodyCardProps) => {
  return <CardBodyContainer src={gifUrl || ''} alt='exercise animation' />
}

export default CardBody
