import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useAppDispatch, useSesion, useToken } from './app/hooks'
import { GoogleOAuthProvider } from '@react-oauth/google'

/* Componentes */
import { getProfileInfo } from './features/counter/counterSlice'
import HomeRegister from './components/HomeRegister/HomeRegister'
import SingUp_Login from './components/login-singUp/Singup_Login'
import LandingPage from './components/LandingPage/LandingPage'
import GoogleAuth from './components/GoogleAuth/GoogleAuth'
import MercadoPago from './components/MercadoPago/MercadoPago'
import Profile from './components/Profile/Profile'
import MercadoFeedback from './components/MercadoPago/MercadoFeedback'
import HomeVisitor_2 from './components/HomeVisitor/HomeVisitor2'
import ScrollButton from './components/ScrollUp/ScrollButton'
import News from './components/HomeRegister/News/News'
import NewsBlog from './components/HomeRegister/News/NewsBlog'
import DecriptionEjer from './components/HomeRegister/desctipcionE/DecritionEje'
import Loading from './components/loading/Loading'
import ProtectedRoute from './routes/ProtectedRoute'
import Ejercicios from './components/HomeRegister/Ejercicios'
import Calculadora from './components/HomeRegister/Calculadora'
import Navbar from './components/Navbar/Navbar'
import Favoritos from './components/HomeRegister/Favorito'
import RutinasPersonales from './components/HomeRegister/RutinasPersonales'
import Dashboard from './components/admin/Dashboard'
import Error_page from './components/ErrorPage/ErrorPage'
import ContactUs from './components/Contact/Contact'
import PoliticaPriv from './components/PoliticaPrivacidad/PoliticaPriv'
import TerminosYCondiciones from './components/terminosycondiciones/TerminosYCondiciones'
import Contactanos from './components/contactanos/Contactanos'
import AboutUs from './components/AboutUs/AboutUs'
//admin components
import Users from './components/admin/users/Users'
import Home from './components/admin/home/Home'
import User from './components/admin/users/User'
import Exercises from './components/admin/exercises/Exercises'
import Exercise from './components/admin/exercises/Exercise'
import Comments from './components/admin/comments/Comments'
import Questions from './components/admin/questions/Questions'
import ExerciseForm from './components/admin/exercises/ExerciseForm'
import NewPassword from './components/login-singUp/NewPassword'
import Training from './components/HomeRegister/Rutins/Training'

function App() {
  const { pathname } = useLocation()
  const token = useToken()
  const user = useSesion()
  const dispacht = useAppDispatch()

  useEffect(() => {
    if (token) {
      dispacht(getProfileInfo(token))
    }
  }, [token])

  return (
    <GoogleOAuthProvider clientId='553882700243-5u6lingb04c86igau7nr6kjpicu042cl.apps.googleusercontent.com'>
      <React.Fragment>
        <ScrollButton />
        {pathname !== '/' && <Navbar />}
        <Routes>
          {/* Rutas admi */}

          <Route path='/admin' element={<Dashboard />}>
            <Route path='' element={<Home />} />
            <Route path='users' element={<Users />} />
            <Route path='users/:id' element={<User />} />
            <Route path='exercises' element={<Exercises />} />
            <Route path='exercises/add' element={<ExerciseForm />} />
            <Route path='exercises/:id' element={<Exercise />} />
            <Route path='comments' element={<Comments />} />
            <Route path='questions' element={<Questions />} />
          </Route>

          {/* Rutas públicas */}

          <Route path='/' element={<LandingPage />} />
          <Route path='NewPassword/:id' element={<NewPassword />} />
          <Route path='/auth/:id' element={<SingUp_Login />} />
          <Route path='/home' element={<HomeVisitor_2 />} />
          <Route path='auth/google' element={<GoogleAuth />} />
          <Route path='loading' element={<Loading />} />
          <Route path='mercadopago' element={<MercadoPago />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path={'*'} element={<Error_page errorMessage='URL inexistente.' numberError={404} />} />
          <Route path='/politicadeprivacidad' element={<PoliticaPriv />} />
          <Route path='/terminosycondiciones' element={<TerminosYCondiciones />} />

          {/* Rutas privadas */}

          <Route element={<ProtectedRoute user={user} />}>
            <Route path='contactanos' element={<Contactanos />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/fitFocus' element={<HomeRegister />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/ejercicio/:id' element={<DecriptionEjer />} />
            <Route path='/Calculadora' element={<Calculadora />} />
            <Route path='/ejercicios' element={<Ejercicios />} />
            <Route path='/rutinas' element={<RutinasPersonales />} />
            <Route path='/Favoritos' element={<Favoritos />} />
            <Route path='/training' element={<Training />} />

            {/* <Route path="/form_user" element={<Form_rutinas />} /> */}

            <Route path='mercadopago/:payment_id' element={<MercadoFeedback />} />
            <Route path='/noticias' element={<News />} />
            <Route path='/newsBlog/:id' element={<NewsBlog />} />
          </Route>
        </Routes>
      </React.Fragment>
    </GoogleOAuthProvider>
  )
}

export default App
