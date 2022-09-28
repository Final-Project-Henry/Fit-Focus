import React, { useEffect, useMemo, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
  useSesion,
  useToken,
} from "./app/hooks";
import { GoogleOAuthProvider } from "@react-oauth/google";

/* Componentes */
import HomeRegister from "./Components/HomeRegister/HomeRegister";
import SingUp_Login from "./Components/login-singUp/Singup_Login";
import Form_rutinas from "./Components/form_rutinas/From_rutina";
import LandingPage from "./Components/LandingPage/LandingPage";
import HomeVisitor from "./Components/HomeVisitor/HomeVisitor";
import GoogleAuth from "./Components/GoogleAuth/GoogleAuth";
import MercadoPago from "./Components/MercadoPago/MercadoPago";

import Profile from "./Components/Profile/Profile";

import MercadoFeedback from "./Components/MercadoPago/MercadoFeedback";
import HomeVisitor_2 from "./Components/HomeVisitor/HomeVisitor2";
import ScrollButton from "./Components/ScrollUp/ScrollButton";
import News from "./Components/HomeRegister/News/News";
import NewsBlog from "./Components/HomeRegister/News/NewsBlog";
import DecriptionEjer from "./Components/HomeRegister/DecritionEje";
import Loading from "./Components/loading/Loading";
import ProtectedRoute from "./routes/ProtectedRoute";
import Ejercicios from "./Components/HomeRegister/Ejercicios";
import Calculadora from "./Components/HomeRegister/Calculadora";
import Navbar from "./Components/Navbar/Navbar";
import Favoritos from "./Components/HomeRegister/Favorito";
import RutinasPersonales from "./Components/HomeRegister/RutinasPersonales";
import Dashboard from "./Components/admin/Dashboard";
import {
  getProfileInfo,
  selectUser,
  sigendOut,

} from "./features/counter/counterSlice";
import Error_page from "./Components/error/Error_page";
import ContactUs from "./Components/Contact/Contact";

import PoliticaPriv from "./Components/PoliticaPrivacidad/PoliticaPriv";
import TerminosYCondiciones from "./Components/terminosycondiciones/TerminosYCondiciones";

import LoadingCards from "./Components/loading/LoadingCards";
import functions from "./additional_info/functions";
import Contactanos from "./Components/contactanos/Contactanos";
import Nosotros from "./Components/Nosotros/Nosotros";


function App() {
  const { pathname } = useLocation();
  let token = useToken();
  const user = useSesion();
  const dispacht = useAppDispatch();

  useEffect(() => {
    if(token){
      dispacht(getProfileInfo(token));
    }
  }, [token]);

  return (
    <GoogleOAuthProvider clientId="553882700243-5u6lingb04c86igau7nr6kjpicu042cl.apps.googleusercontent.com">
      <React.Fragment>
        <ScrollButton />
        {pathname !== "/" && <Navbar />}
        <Routes>
          {/* Rutas públicas */}
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth/:id" element={<SingUp_Login />} />
          <Route path="/home" element={<HomeVisitor_2 />} />
          <Route path="auth/google" element={<GoogleAuth />} />
          <Route path="/home2" element={<HomeVisitor />} />
          <Route path="loading" element={<Loading />} />
          <Route path="mercadopago" element={<MercadoPago />} />
          <Route path="contactanos" element={<Contactanos />} />
          <Route
            path={"*"}
            element={<Error_page error="URL inexistente." numb_error="404" />}
          />

          <Route path="/contact" element={<ContactUs />} />
          <Route path="/politicadeprivacidad" element={<PoliticaPriv/>}/> 
          <Route path="/terminosycondiciones" element={<TerminosYCondiciones/>}/>
          <Route path="/nosotros" element={<Nosotros />} />
          {/* Rutas privadas */}
          <Route element={<ProtectedRoute user={user} />}>
            <Route path="/fitFocus" element={<HomeRegister />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/ejercicio/:id" element={<DecriptionEjer />} />
            <Route path="/Calculadora" element={<Calculadora />} />
            <Route path="/ejercicios" element={<Ejercicios />} />
            <Route path="/rutinas" element={<RutinasPersonales />} />
            <Route path="/Favoritos" element={<Favoritos />} />
            
            
            {/* <Route path="/form_user" element={<Form_rutinas />} /> */}
            <Route
              path="mercadopago/:payment_id"
              element={<MercadoFeedback />}
            />
            <Route path="/noticias" element={<News />} />
            <Route path="/newsBlog/:id" element={<NewsBlog />} />
          </Route>
        </Routes>
      </React.Fragment>
    </GoogleOAuthProvider>
  );
}

export default App;
