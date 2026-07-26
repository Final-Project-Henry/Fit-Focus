import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '@/app/hooks';
import { selectUser } from '@/features/user/userSlice';
import Error_page from '@/screens/error/Error_page';

export default function AdminRoute() {
  const userState = useAppSelector(selectUser);
  const profile = userState.user;

  if (!profile) {
    return (
      <Error_page
        error="Sin autorización. Es necesario autenticar para obtener la respuesta solicitada."
        numb_error="401"
      />
    );
  }

  if (!profile.admin) {
    return <Navigate to="/fitFocus" replace />;
  }

  return <Outlet />;
}
