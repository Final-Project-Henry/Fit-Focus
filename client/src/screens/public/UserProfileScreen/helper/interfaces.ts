import { UserInfoInterface } from 'shared/interfaces/redux'

type Types = 'save' | 'cancel'
export interface UserInfoTabProps {
  userInfo: UserInfoInterface | null
  handleImage: () => void
  profileImage: string | null
  handleAvatar: (type: Types) => void
  loadingUpload: boolean
}
