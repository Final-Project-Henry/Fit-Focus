import { ArticleData, ExerciseDetail, ExercisesLoginInterface, UserInfoInterface } from './payloads'

//USERS
export type userLoginInterface = {
  loadingUserLogin?: boolean
  successUserLogin?: boolean
  errorUserLogin?: string
  userInfo?: UserInfoInterface
}
export type userRegisterInterface = {
  loadingUserRegister?: boolean
  successUserRegister?: boolean
  errorUserRegister?: string
}
export type userAuthGoogleInterface = {
  loadingUserAuthGoogle?: boolean
  successUserAuthGoogle?: boolean
  errorUserAuthGoogle?: string
}

//EXERCISES
export type exercisesLoginInterface = {
  loadingLoginExercises?: boolean
  successLoginExercises?: boolean
  loginExercises?: ExercisesLoginInterface
  errorLoginExercises?: boolean
}
export type exercisesByFiltersInterface = {
  loadingExercisesByFilters?: boolean
  successExercisesByFilters?: boolean
  exercisesByFiltersList?: ExercisesLoginInterface
  errorExercisesByFilters?: boolean
}
export type exerciseByIdInterface = {
  loadingExerciseById?: boolean
  successExerciseById?: boolean
  exerciseById?: ExerciseDetail
  errorExerciseById?: boolean
}

//NEWS
export type newsLoginInterface = {
  loadingLoginNews?: boolean
  successLoginNews?: boolean
  loginNews?: ArticleData[]
  errorLoginNews?: boolean
}
export type searchNewsListInterface = {
  loadingSearchNewsList?: boolean
  successSearchNewsList?: boolean
  searchNewsList?: ArticleData[]
  totalResults?: number
  errorSearchNewsList?: boolean
}
