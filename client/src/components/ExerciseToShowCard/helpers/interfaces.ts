import { ExerciseToShowInterface } from 'shared/interfaces/redux'

export interface ExerciseCardProps {
  exerciseData: ExerciseToShowInterface | null
  key: number
  open: () => void
}

export interface HeaderCardProps {
  exerciseData: ExerciseToShowInterface | null
}
export interface BodyCardProps {
  gifUrl: string | null
}
