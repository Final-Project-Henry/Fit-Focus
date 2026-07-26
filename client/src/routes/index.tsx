import { Routes } from 'react-router-dom';
import { publicRoutes } from '@/routes/public.routes';
import { AuthRoutes } from '@/routes/auth.routes';
import { adminRoutes } from '@/routes/admin.routes';

type Props = {
  user: unknown;
};

export function AppRoutes({ user }: Props) {
  return (
    <Routes>
      {adminRoutes}
      {publicRoutes}
      {AuthRoutes({ user })}
    </Routes>
  );
}
