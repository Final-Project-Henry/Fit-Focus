import { UserInfoInterface } from 'shared/interfaces/redux/payloads'
import { DifficultyEnum, GenreEnum, MusclesEnum } from './interfaces'

const muscleLabel = {
  upper_body: 'Tren Superior',
  lower_body: 'Tren Inferior',
  functional: 'Funcional',
  abs: 'Abdominales',
  stretching: 'Estiramiento',
}
const genreLabel = {
  man: 'Hombre',
  woman: 'Mujer',
  both: 'Ambos',
}
const difficultyLabel = {
  1: 'Fácil',
  2: 'Medio',
  3: 'Difícil',
}

export const premiumValidation = (userInfo: UserInfoInterface) => {
  return userInfo && userInfo.plan === 'premium'
}

export const getMuscleLabel = (muscle: MusclesEnum) => muscleLabel[muscle]
export const getGenreLabel = (genre: GenreEnum) => genreLabel[genre]
export const getDifficultyLabel = (difficulty: DifficultyEnum) => difficultyLabel[difficulty]
