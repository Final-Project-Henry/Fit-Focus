import React from 'react'

export const DashboardScreen = React.lazy(() => import('screens/admin/DashboardScreen/DashboardScreen'))
export const ExerciseInformationScreen = React.lazy(
  () => import('screens/admin/ExerciseInformationScreen/ExerciseInformationScreen'),
)
export const ExercisesListScreen = React.lazy(() => import('screens/admin/ExercisesListScreen/ExercisesListScreen'))
export const QuestionsAdminScreen = React.lazy(() => import('screens/admin/QuestionsAdminScreen/QuestionsAdminScreen'))
export const UserInformationcreen = React.lazy(
  () => import('screens/admin/UserInformationScreen/UserInformationScreen'),
)
export const UsersListScreen = React.lazy(() => import('screens/admin/UsersListScreen/UsersListScreen'))
