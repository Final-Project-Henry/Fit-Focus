import { Box, Tab, Tabs } from '@mui/material'
import CustomTabPanel from './components/CustomTabPanel'
import { ChangeEvent, SyntheticEvent, createRef, useEffect, useState } from 'react'
import { FooterInfo, UserProfileBodyContainer, UserProfileContainer } from './styles/userProfileScreenStyles'
import UserInfoTab from './components/UserInfoTab'
import SettingsTab from './components/SettingsTab'
import { AccountCircle, Settings } from '@mui/icons-material'
import { useAppDispatch, useAppSelector } from 'shared/customHooks/reduxHooks'
import { useScreenMessage } from 'contexts/ScreenMessageContext'
import { updateAvatar } from 'redux/actions/userActions'

const UserProfileScreen = () => {
  const imageRef = createRef<HTMLInputElement>()
  const dispatch = useAppDispatch()

  const { setData } = useScreenMessage()
  const [value, setValue] = useState<number>(0)
  const [error, setError] = useState<string>('')
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [profileFile, setProfileFile] = useState<File | null>(null)

  const { userInfo } = useAppSelector(state => state.userLogin)
  const { loadingUserAvatarUpdate, errorUserAvatarUpdate, successUserAvatarUpdate } = useAppSelector(
    state => state.avatarUpdate,
  )

  useEffect(() => {
    if (error.length) {
      setData({
        message: error,
        type: 'warning',
      })
    }
  }, [error])
  useEffect(() => {
    if (errorUserAvatarUpdate) {
      setError(errorUserAvatarUpdate)
    }
  }, [errorUserAvatarUpdate])
  useEffect(() => {
    if (successUserAvatarUpdate) {
      setData({
        message: 'Imagen guardada!',
        type: 'success',
      })
    }
  }, [successUserAvatarUpdate])

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  }
  const handleImage = () => {
    imageRef?.current?.click()
  }
  const handleSelectImage = (e: ChangeEvent<HTMLInputElement>) => {
    const image = e?.target?.files?.[0]
    if (!image) return
    if (!image?.type?.startsWith('image')) {
      setError('Formato del archivo incorrecto')
      return
    }
    const urlImage = image ? URL.createObjectURL(image) : null
    setProfileImage(urlImage)
    setProfileFile(image)
    setError('')
  }
  const handleAvatar = (type: string) => {
    if (type === 'cancel') {
      setProfileImage(null)
      setProfileFile(null)
      setError('')
    } else {
      profileFile && dispatch(updateAvatar(profileFile))
    }
  }

  return (
    <UserProfileContainer>
      <UserProfileBodyContainer>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '90%' }}>
          <Tabs value={value} onChange={handleChange} aria-label='basic tabs example' centered>
            <Tab icon={<AccountCircle />} iconPosition='start' label='Información Básica' {...a11yProps(0)} wrapped />
            <Tab icon={<Settings />} iconPosition='start' label='Configuración' {...a11yProps(1)} wrapped />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <UserInfoTab
            userInfo={userInfo || null}
            handleImage={handleImage}
            profileImage={profileImage}
            handleAvatar={handleAvatar}
            loadingUpload={loadingUserAvatarUpdate || false}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <SettingsTab />
        </CustomTabPanel>
        <input
          onChange={handleSelectImage}
          type='file'
          ref={imageRef}
          accept='.jpg, .png, .jpeg'
          style={{ display: 'none' }}
        />
        <FooterInfo>© 2022, Desarrollado por el equipo de FIT FOCUS en Henry</FooterInfo>
      </UserProfileBodyContainer>
    </UserProfileContainer>
  )
}

export default UserProfileScreen
