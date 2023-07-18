import BannerScreeen from 'components/BannerScreen/BannerScreeen'
import { contactUsBanner } from 'shared/shareData'
import { ContactUsBodyContainer } from '../styles/contactUsScreenStyles'

const ContactUsBody = () => {
  return (
    <ContactUsBodyContainer id='contactus-body-container'>
      <BannerScreeen imgBg={contactUsBanner} title='Opiniones 📫' />
    </ContactUsBodyContainer>
  )
}

export default ContactUsBody
