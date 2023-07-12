import { ExercisesLoginInterface } from 'shared/interfaces/redux'

export interface DevInterface {
  name: string
  avatar: string
  mail: string
  git: string
  link: string
}

export interface CardDevProps {
  dev: DevInterface
}

export interface CardOfferProps {
  isFree: boolean
}

export interface LoggedScreenProps {
  onClick: () => void
  loginExercises: ExercisesLoginInterface | null
}

export type MusclesEnum = 'upper_body' | 'lower_body' | 'functional' | 'abs' | 'stretching'
export type GenreEnum = 'man' | 'woman' | 'both'
export type DifficultyEnum = 1 | 2 | 3
export type StatusEnum = 'active' | 'delete'
