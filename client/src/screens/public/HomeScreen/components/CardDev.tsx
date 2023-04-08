import { Avatar, IconButton } from '@mui/material'
import {
  AvatarContainer,
  DevCardContainer,
  Email,
  InfoContainer,
  Name,
  SocialContainer,
  UserInfo,
} from '../styles/homeScreenStyles'
import { GitHub, LinkedIn } from '@mui/icons-material'
import { CardDevProps } from '../helper/interfaces'

const CardDev = ({ dev }: CardDevProps) => {
  const goTolink = (link: string) => {
    window.open(link, '_blank')
  }

  return (
    <DevCardContainer>
      <UserInfo>
        <AvatarContainer
          onClick={() => {
            ;('')
          }}
        >
          <Avatar src={dev.avatar} />
        </AvatarContainer>
        <InfoContainer>
          <Name>
            <strong>{dev.name}</strong>
          </Name>
          <Email>{`${dev.mail}@gmail.com`}</Email>
        </InfoContainer>
      </UserInfo>
      <SocialContainer>
        <IconButton
          color='primary'
          size='large'
          onClick={() => goTolink(`https://github.com/${dev.git}`)}
        >
          <GitHub titleAccess='Github' />
        </IconButton>
        <IconButton
          color='primary'
          size='large'
          onClick={() => goTolink(`https://www.linkedin.com/in/${dev.link}`)}
        >
          <LinkedIn titleAccess='LinkedIn' />
        </IconButton>
      </SocialContainer>
    </DevCardContainer>
  )
}

export default CardDev
