import { BodyCardProps } from '../helpers/interfaces'
import { CardBodyContainer } from '../styles/exerciseToShowCardStyles'

const CardBody = ({ gifUrl }: BodyCardProps) => {
  return <CardBodyContainer draggable={false} src={gifUrl || ''} alt='exercise animation' />
}

export default CardBody
