export interface CommentExerciseInterface {
  _id: string
  user: string
  comment: string
  rating: number
  status: string
  report: number
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
