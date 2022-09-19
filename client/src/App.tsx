import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import HomeVisitor from "./Components/HomeVisitor/HomeVisitor";
import HomeRegister from "./Components/HomeRegister/HomeRegister";
import Navbar from "./Components/Navbar/Navbar";
import { useSesion } from "./app/hooks";
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleAuth from "./Components/GoogleAuth/GoogleAuth";




import Form_rutinas from "./Components/form_rutinas/From_rutina";

import SingUp_Login from "./Components/login-singUp/Singup_Login";

function App() {
  const { pathname } = useLocation();

  const user = useSesion();

  return (
    <GoogleOAuthProvider clientId="553882700243-5u6lingb04c86igau7nr6kjpicu042cl.apps.googleusercontent.com">
    <React.Fragment>
      {pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/:id" element={<SingUp_Login />} />
        {user ? (
          <Route path="/home" element={<HomeRegister />} />
        ) : (
          <Route path="/home" element={<HomeVisitor />} />
        )}
        <Route path="/rutinas" element={<Form_rutinas />} />
        <Route path="auth/google" element={<GoogleAuth />} />
      </Routes>
    </React.Fragment>
    </GoogleOAuthProvider >
  );
}

export default App;
