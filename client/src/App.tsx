import React from "react";
import { Route,useLocation } from "react-router-dom";
import LandingPage  from "./Components/LandingPage/LandingPage";
import HomeVisitor from "./Components/HomeVisitor/HomeVisitor";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/login-singUp/Login";
import SingUp from "./Components/login-singUp/sing-up";



function App() {

  const {pathname} = useLocation()

  return (
    <React.Fragment>
      {pathname!=="/"&&<Navbar/>}

      <Route exact path="/" component={LandingPage} />
      <Route exact path="/singUp" component={SingUp} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={HomeVisitor} />

    </React.Fragment>
  );
}

export default App;
