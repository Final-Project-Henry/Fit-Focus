import { Route } from 'react-router-dom';
import LandingPage from '@/screens/landing/LandingPage';
import HomeVisitor_2 from '@/screens/home-visitor/HomeVisitor2';
import SingUp_Login from '@/screens/auth/Singup_Login';
import NewPassword from '@/screens/auth/NewPassword';
import GoogleAuth from '@/screens/google-auth/GoogleAuth';
import Loading from '@/screens/loading/Loading';
import MercadoPago from '@/screens/mercadopago/MercadoPago';
import AboutUs from '@/screens/about/AboutUs';
import PoliticaPriv from '@/screens/legal/privacy/PoliticaPriv';
import TerminosYCondiciones from '@/screens/legal/terms/TerminosYCondiciones';
import Error_page from '@/screens/error/Error_page';

export const publicRoutes = (
  <>
    <Route path="/" element={<LandingPage />} />
    <Route path="/home" element={<HomeVisitor_2 />} />
    <Route path="/auth/:id" element={<SingUp_Login />} />
    <Route path="NewPassword/:id" element={<NewPassword />} />
    <Route path="auth/google" element={<GoogleAuth />} />
    <Route path="loading" element={<Loading />} />
    <Route path="mercadopago" element={<MercadoPago />} />
    <Route path="/AboutUs" element={<AboutUs />} />
    <Route path="/politicadeprivacidad" element={<PoliticaPriv />} />
    <Route path="/terminosycondiciones" element={<TerminosYCondiciones />} />
    <Route
      path="*"
      element={<Error_page error="URL inexistente." numb_error="404" />}
    />
  </>
);
