import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useSesion, useToken } from '@/app/hooks';
import { getProfileInfo } from '@/features/user/userSlice';
import ScrollButton from '@/components/layout/ScrollUp/ScrollButton';
import Navbar from '@/components/layout/Navbar/Navbar';
import { AppRoutes } from '@/routes';

export default function App() {
  const { pathname } = useLocation();
  const token = useToken();
  const user = useSesion();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getProfileInfo(token));
    }
  }, [token, dispatch]);

  return (
    <>
      <ScrollButton />
      {pathname !== '/' && <Navbar />}
      <AppRoutes user={user} />
    </>
  );
}
