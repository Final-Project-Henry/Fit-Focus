import { CameraAlt } from '@mui/icons-material'
import { UserInfoTabProps } from '../helper/interfaces'
import {
  ChangeImage,
  EmailInfo,
  GridContainerCenter,
  NameInfo,
  ProfileImage,
  UserInfoBasicData,
  UserInfoContainer,
} from '../styles/userProfileScreenStyles'
import GridItem from 'components/Grid/GridItem'

const UserInfoTab = ({ userInfo, handleImage, profileImage }: UserInfoTabProps) => {
  return (
    <UserInfoContainer>
      <GridContainerCenter>
        <GridItem xs={12} md={4}>
          <ProfileImage>
            <img
              src={profileImage || userInfo?.avatar}
              alt='profile-image'
              style={{ zIndex: 1, transform: 'rotate(-15deg)', height: '100%', width: '100%', objectFit: 'cover' }}
            />
            <ChangeImage onClick={handleImage}>
              <CameraAlt />
              Cambiar foto
            </ChangeImage>
          </ProfileImage>
        </GridItem>
        <GridItem xs={12} md={6}>
          <UserInfoBasicData>
            <NameInfo>{userInfo?.name}</NameInfo>
            <EmailInfo>{userInfo?.email}</EmailInfo>
          </UserInfoBasicData>
        </GridItem>
      </GridContainerCenter>
    </UserInfoContainer>
  )
}

export default UserInfoTab
