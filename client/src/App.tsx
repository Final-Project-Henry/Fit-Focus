import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import HomeVisitor from "./Components/HomeVisitor/HomeVisitor";
import HomeRegister from "./Components/HomeRegister/HomeRegister";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/login-singUp/Login";
import SingUp from "./Components/login-singUp/sing-up";
import Form_rutinas from "./Components/form_rutinas/From_rutina";
import SingUp_Login from "./Components/login-singUp/Singup_Login";

function App() {
  const { pathname } = useLocation();

  return (
    <React.Fragment>
      {pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/:id" element={<SingUp_Login />} />
        <Route path="/home" element={<HomeVisitor />} />
        <Route path="/homeRegister" element={<HomeRegister />} />
        <Route path="/rutinas" element={<Form_rutinas  />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
