import React from 'react'

//Auth-routes
export const UserLoginScreen = React.lazy(
  () => import('screens/auth/UserLoginScreen/UserLoginScreen'),
)
export const UserRegisterScreen = React.lazy(
  () => import('screens/auth/UserRegisterScreen/UserRegisterScreen'),
)

//Public-routes
export const AboutUsScreen = React.lazy(
  () => import('screens/public/AboutUsScreen/AboutUsScreen'),
)
export const CalculatorScreen = React.lazy(
  () => import('screens/public/CalculatorScreen/CalculatorScreen'),
)
export const ContactUsScreen = React.lazy(
  () => import('screens/public/ContactUsScreen/ContactUsScreen'),
)
export const ExerciseDetailScreen = React.lazy(
  () => import('screens/public/ExerciseDetailScreen/ExerciseDetailScreen'),
)
export const ExercisesScreen = React.lazy(
  () => import('screens/public/ExercisesScreen/ExercisesScreen'),
)
export const FavoritesExercisesScreen = React.lazy(
  () =>
    import('screens/public/FavoritesExercisesScreen/FavoritesExercisesScreen'),
)
export const HomeScreen = React.lazy(
  () => import('screens/public/HomeScreen/HomeScreen'),
)
export const NewsScreen = React.lazy(
  () => import('screens/public/NewsScreen/NewsScreen'),
)
export const RoutineScreen = React.lazy(
  () => import('screens/public/RoutineScreen/RoutineScreen'),
)
export const TrainingModeScreen = React.lazy(
  () => import('screens/public/TrainingModeScreen/TrainingModeScreen'),
)
export const UserProfileScreen = React.lazy(
  () => import('screens/public/UserProfileScreen/UserProfileScreen'),
)
