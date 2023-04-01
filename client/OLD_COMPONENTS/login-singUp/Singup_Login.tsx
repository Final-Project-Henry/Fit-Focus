import { Div_img } from './styles/styled_componet_login_singUp'
import { useSesion } from '../../app/hooks'
import { Navigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import icon from '../assets/icons/login.jpg'

import Login from './Login'
import SingUp from './Sign-up'
import loading_icon from '../assets/icons/loading.svg'
//@ts-igno
import ValidadUser from './ValidadUser'

export default function SingUp_Login() {
  const { id } = useParams()
  const user_existing = useSesion()

  return (
    <>
      {!id?.includes('login') &&
        !id?.includes('sing-up') &&
        !id?.includes('nuevaContraseña') && (
          // <ProtectedRoute />
          <Div_img className='flex justify-center'>
            {user_existing && <Navigate to='/fitFocus' />}
            <div className='flex  w-full h-full '>
              {id == 'login' && (
                <Login loading_icon={loading_icon} icon={icon} />
              )}
              {id == 'sing-up' && (
                <SingUp icon={icon} loading_icon={loading_icon} />
              )}
              {id == 'nuevaContraseña' && (
                <ValidadUser loading_icon={loading_icon} icon={icon} />
              )}
            </div>
          </Div_img>
        )}
    </>
  )
}
