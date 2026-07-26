import { ReactNode } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

const googleClientId =
  import.meta.env.VITE_GOOGLE_CLIENT_ID ||
  '553882700243-5u6lingb04c86igau7nr6kjpicu042cl.apps.googleusercontent.com';

type Props = {
  children: ReactNode;
};

export function AppProviders({ children }: Props) {
  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      {children}
    </GoogleOAuthProvider>
  );
}
