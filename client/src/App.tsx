import React from "react";
import { Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage/LandingPage";
import HomeVisitor from "./components/HomeVisitor/HomeVisitor";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/login-singUp/Login";
import SingUp from "./components/login-singUp/sing-up";

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <Route path="/" component={LandingPage} />

      <Route path="/home" component={HomeVisitor} />

      <Route exact path="/singUp" component={SingUp} />

      <Route exact path="/login" component={Login} />
      <Route path="/home" component={HomeVisitor} />
    </React.Fragment>
  );
}

export default App;
