import CardBody from './components/CardBody'
import CardHeader from './components/CardHeader'
import { ExerciseCardProps } from './helpers/interfaces'
import { CardContainer } from './styles/exerciseToShowCardStyles'

const ExerciseToShowCard = ({ exerciseData, key }: ExerciseCardProps) => {
  return (
    <CardContainer key={key}>
      <CardHeader exerciseData={exerciseData || null} />
      <CardBody gifUrl={exerciseData?.gifUrl || null} />
    </CardContainer>
  )
}

export default ExerciseToShowCard
