import { Route } from 'react-router-dom';
import ProtectedRoute from '@/routes/ProtectedRoute';
import ContactScreen from '@/screens/contact/ContactScreen';
import HomeRegister from '@/screens/home-register/HomeRegister';
import Profile from '@/screens/profile/Profile';
import DecriptionEjer from '@/screens/home-register/desctipcionE/DecritionEje';
import Calculadora from '@/screens/home-register/Calculadora';
import Ejercicios from '@/screens/home-register/Ejercicios';
import RutinasPersonales from '@/screens/home-register/RutinasPersonales';
import Favoritos from '@/screens/home-register/Favorito';
import Training from '@/screens/home-register/Rutins/Training';
import MercadoFeedback from '@/screens/mercadopago/MercadoFeedback';
import News from '@/screens/home-register/News/News';
import NewsBlog from '@/screens/home-register/News/NewsBlog';

type Props = {
  user: unknown;
};

export function AuthRoutes({ user }: Props) {
  return (
    <Route element={<ProtectedRoute user={user} />}>
      <Route path="contactanos" element={<ContactScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
      <Route path="/fitFocus" element={<HomeRegister />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/ejercicio/:id" element={<DecriptionEjer />} />
      <Route path="/Calculadora" element={<Calculadora />} />
      <Route path="/ejercicios" element={<Ejercicios />} />
      <Route path="/rutinas" element={<RutinasPersonales />} />
      <Route path="/Favoritos" element={<Favoritos />} />
      <Route path="/training" element={<Training />} />
      <Route path="mercadopago/feedback" element={<MercadoFeedback />} />
      <Route path="mercadopago/:payment_id" element={<MercadoFeedback />} />
      <Route path="/noticias" element={<News />} />
      <Route path="/newsBlog/:id" element={<NewsBlog />} />
    </Route>
  );
}
