import { UserInfoInterface } from 'shared/interfaces/redux'

export interface UserInfoTabProps {
  userInfo: UserInfoInterface | null
  handleImage: () => void
  profileImage: string | null
}
