import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useAppSelector, useSesion } from "./app/hooks";
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
import DecriptionEjer from "./Components/HomeRegister/DecritionEje";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProtectedRoute from "./Components/routes/ProtectedRoute";
import AdminRoute from "./Components/routes/AdminRoute";
import { selectUser } from "./features/counter/counterSlice";

function App() {
  const user = useSesion();

  return (
    <GoogleOAuthProvider clientId="553882700243-5u6lingb04c86igau7nr6kjpicu042cl.apps.googleusercontent.com">
      <React.Fragment>
        <ScrollButton />
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth/:id" element={<SingUp_Login />} />
          <Route path="/home" element={<HomeVisitor_2 />} />
          <Route path="auth/google" element={<GoogleAuth />} />
          <Route path="/home2" element={<HomeVisitor />} />

          {/* Rutas privadas */}
          <Route element={<ProtectedRoute user={user} />}>
            <Route path="/fitFocus/:id" element={<HomeRegister />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/ejercicio/:id" element={<DecriptionEjer />} />
            <Route path="/rutinas" element={<Form_rutinas />} />
            <Route path="mercadopago" element={<MercadoPago />} />
            <Route
              path="mercadopago/:payment_id"
              element={<MercadoFeedback />}
            />
          </Route>
        </Routes>
      </React.Fragment>
    </GoogleOAuthProvider>
  );
}

export default App;
