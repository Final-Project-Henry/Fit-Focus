import { getDifficultyLabel, getGenreLabel, getMuscleLabel } from 'screens/public/HomeScreen/helper/functions'
import { HeaderCardProps } from '../helpers/interfaces'
import {
  CardHeaderContainer,
  CharacteristicsGroup,
  DifficultyIconGenerate,
  GenreIconGenerate,
  MuscleTitle,
  NameTitle,
  RatingIcon,
  SubTitle,
} from '../styles/exerciseToShowCardStyles'
import { Star } from '@mui/icons-material'

const CardHeader = ({ exerciseData }: HeaderCardProps) => {
  const muscle = exerciseData?.muscles || 'upper_body'
  const diff = exerciseData?.difficulty || 1
  const genre = exerciseData?.genre || 'both'
  const CardHeader = CardHeaderContainer(muscle)
  const GenreIcon = GenreIconGenerate(genre)
  const DifficultyIcon = DifficultyIconGenerate(diff)

  return (
    <CardHeader>
      <NameTitle>{exerciseData?.name}</NameTitle>
      {!!exerciseData?.totalRating && (
        <RatingIcon>
          <Star sx={{ color: 'yellow' }} /> {exerciseData?.totalRating}
        </RatingIcon>
      )}
      <SubTitle>
        <MuscleTitle>{getMuscleLabel(muscle)}</MuscleTitle>
        <CharacteristicsGroup>
          <GenreIcon>{getGenreLabel(genre)}</GenreIcon>
          <DifficultyIcon>{getDifficultyLabel(diff)}</DifficultyIcon>
        </CharacteristicsGroup>
      </SubTitle>
    </CardHeader>
  )
}

export default CardHeader
