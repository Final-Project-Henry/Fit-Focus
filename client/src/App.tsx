import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSesion, useToken } from "./app/hooks";
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
import Ejercicios from "./Components/HomeRegister/Ejercicios";

function App() {
  const user = useSesion();

  return (
    <GoogleOAuthProvider clientId="553882700243-5u6lingb04c86igau7nr6kjpicu042cl.apps.googleusercontent.com">
      <React.Fragment>
        <ScrollButton />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth/:id" element={<SingUp_Login />} />
          {user ? (
              <Route path="/fitFocus" element={<HomeRegister />} />
          ) : (
            <Route path="/home" element={<HomeVisitor_2 />} />
          )}
          <Route path="/rutinas" element={<Form_rutinas />} />
          <Route path="/ejercicios" element={<Ejercicios />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ejercicio/:id" element={<DecriptionEjer />} />
          <Route path="auth/google" element={<GoogleAuth />} />
          <Route path="mercadopago" element={<MercadoPago />} />
          <Route path="mercadopago/:payment_id" element={<MercadoFeedback />} />
          <Route path="/home2" element={<HomeVisitor />} />
          <Route path="/news" element={<News />} />
          <Route path="/newsBlog/:id" element={<NewsBlog />}/>
          <Route path="loading" element ={<Loading />} />
        </Routes>
      </React.Fragment>
    </GoogleOAuthProvider>
  );
}

export default App;
