import { DifficultyEnum, GenreEnum, MusclesEnum, StatusEnum } from 'screens/public/HomeScreen/helper/interfaces'

//SPECIAL PAYLOAD TO ACCEPT OBJS HOW ACTION.PAYLOAD
export type ModifiedPayloadAction<T> = {
  type: string
  payload: T
}

//PAYLOADS
export interface CommentExerciseInterface {
  _id: string
  user: string
  exercise: string
  comment: string
  rating: number
  status: string
  report?: number
  createAt: string
}
export interface UserInfoInterface {
  _id: string
  name: string
  email: string
  avatar?: string
  plan: string
  lastLogin: string
  routine?: string
  fav?: string[]
  status: string
  isAdmin: boolean
  isSuper: boolean
  token: string
  createAt?: string
  updateAt?: string
}

export interface ExerciseToShowInterface {
  _id: string
  name: string
  difficulty: DifficultyEnum
  muscles: MusclesEnum
  genre: GenreEnum
  gifUrl: string
  totalRating?: number
}
export interface ExerciseDetail extends ExerciseToShowInterface {
  needsAccessories: boolean
  videoUrl: string
  isPremium: boolean
  description: string
  status: StatusEnum
  isWeekSelected: boolean
  comments: CommentExerciseInterface[]
}

interface Source {
  id: string | null
  name: string
}
export interface ArticleData {
  source: Source
  author: string
  title: string
  description: string
  url: string
  urlToImage: string | null
  publishedAt: string
  content: string | null
}

export interface ExercisesLoginInterface {
  week: ExerciseToShowInterface[]
  top: ExerciseToShowInterface[]
}

export interface NewsPayloadResponse {
  status: string
  totalResults: number
  articles: ArticleData[]
}
