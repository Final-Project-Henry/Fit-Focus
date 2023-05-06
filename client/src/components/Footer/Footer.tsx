import { IconButton } from '@mui/material'
import { additionalUrlData, socialMediaData } from './helpers/data'
import {
  FooterBody,
  FooterContainer,
  InformDataLinks,
  LogoContainer,
  SocialMediaIcons,
  TextInfo,
} from './styles/footerStyles'
import { Link } from 'react-router-dom'
import { logoDark } from 'shared/shareData'

const Footer = () => {
  const handleClick = (url: string) => {
    window.open(url)
  }
  return (
    <FooterContainer>
      <FooterBody>
        <SocialMediaIcons>
          {Object.values(socialMediaData).map((socialMedia, i) => (
            <IconButton
              key={i}
              onClick={() => handleClick(socialMedia.url)}
              sx={{ backgroundColor: 'white', padding: '5px' }}
            >
              {socialMedia.icon}
            </IconButton>
          ))}
        </SocialMediaIcons>
        <InformDataLinks>
          {Object.values(additionalUrlData).map((data, i) => (
            <Link to={data.url} key={i} target={data.label === 'Henry' ? '_blank' : ''}>
              {data.label}
            </Link>
          ))}
        </InformDataLinks>
        <LogoContainer>
          <img src={logoDark} alt='logo fitfocus' />
        </LogoContainer>
        <TextInfo>© 2022 Fit-Focus™. Todos los derechos reservados.</TextInfo>
      </FooterBody>
    </FooterContainer>
  )
}

export default Footer
