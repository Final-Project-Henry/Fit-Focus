import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import HomeVisitor from "./Components/HomeVisitor/HomeVisitor";
import HomeRegister from "./Components/HomeRegister/HomeRegister";
import Navbar from "./Components/Navbar/Navbar";
import { useSesion } from "./app/hooks";

import Form_rutinas from "./Components/form_rutinas/From_rutina";

import SingUp_Login from "./Components/login-singUp/Singup_Login";

function App() {
  const { pathname } = useLocation();

  const user = useSesion();

  return (
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
      </Routes>
    </React.Fragment>
  );
}

export default App;
