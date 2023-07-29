import { CameraAlt, Cancel, CheckCircle } from '@mui/icons-material'
import { UserInfoTabProps } from '../helper/interfaces'
import {
  AvatarButton,
  ChangeImage,
  EmailInfo,
  GridContainerCenter,
  GroupButtons,
  NameInfo,
  ProfileImage,
  UserInfoBasicData,
  UserInfoContainer,
} from '../styles/userProfileScreenStyles'
import GridItem from 'components/Grid/GridItem'
import { CircularProgress, Tooltip } from '@mui/material'

const UserInfoTab = ({ userInfo, handleImage, profileImage, handleAvatar, loadingUpload }: UserInfoTabProps) => {
  return (
    <UserInfoContainer>
      <GridContainerCenter>
        <GridItem xs={12} md={4} sx={{ position: 'relative !important' }}>
          {profileImage && (
            <GroupButtons>
              <AvatarButton onClick={() => handleAvatar('save')} color='default' size='large'>
                <Tooltip title='Guardar foto'>
                  <CheckCircle fontSize='large' />
                </Tooltip>
              </AvatarButton>
              <AvatarButton onClick={() => handleAvatar('cancel')} color='default' size='large'>
                <Tooltip title='Cancelar'>
                  <Cancel fontSize='large' />
                </Tooltip>
              </AvatarButton>
            </GroupButtons>
          )}
          <ProfileImage>
            <img
              src={profileImage || userInfo?.avatar}
              alt='profile-image'
              style={{ zIndex: 1, transform: 'rotate(-15deg)', height: '100%', width: '100%', objectFit: 'cover' }}
            />
            <ChangeImage onClick={handleImage} disabled={loadingUpload}>
              {!loadingUpload ? (
                <>
                  <CameraAlt />
                  Cambiar foto
                </>
              ) : (
                <CircularProgress />
              )}
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
