import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import HomeVisitor from "./components/HomeVisitor/HomeVisitor";
import HomeRegister from "./components/HomeRegister/HomeRegister";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/login-singUp/Login";
import Form_rutinas from "./components/form_rutinas/From_rutina";
import SingUp from "./components/login-singUp/sing-up";

function App() {
  const { pathname } = useLocation();

  return (
    <React.Fragment>
      {pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/singUp" element={<SingUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomeVisitor />} />
        <Route path="/homeRegister" element={<HomeRegister />} />
        <Route path="/rutinas" element={<Form_rutinas />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
