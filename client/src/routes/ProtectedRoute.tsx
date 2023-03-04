import { Outlet } from 'react-router-dom'
import Error_page from '../components/ErrorPage/ErrorPage'

const ProtectedRoute = ({ user }: any) => {
  if (!user) {
    return (
      <Error_page
        errorMessage='Sin autorización. Es necesario autenticar para obtener la respuesta solicitada.'
        numberError={401}
      />
    )
  }
  return <Outlet />
}

export default ProtectedRoute
