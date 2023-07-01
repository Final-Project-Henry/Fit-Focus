import { useEffect } from 'react'
import NoVisitScreen from 'components/NoVisitScreen/NoVisitScreen'
import ContactUsBody from './components/ContactUsBody'
import { useScreenMessage } from 'contexts/ScreenMessageContext'
import { useAppSelector } from 'shared/customHooks/reduxHooks'
import { ContactUsContainer } from './styles/contactUsScreenStyles'

const ContactUsScreen = () => {
  const { setData } = useScreenMessage()

  const { userInfo } = useAppSelector(state => state.userLogin)

  useEffect(() => {
    if (!userInfo) {
      setData({
        message: 'Necesitas iniciar sesion primero.',
        type: 'warning',
      })
    }
  }, [])

  return <ContactUsContainer>{!userInfo ? <NoVisitScreen /> : <ContactUsBody />}</ContactUsContainer>
}

export default ContactUsScreen
