
import React from 'react';
import { Route } from "react-router-dom";

import HomeVisitor from './components/HomeVisitor/HomeVisitor';
import Login from './components/login-singUp/Login'; 
import LandingPage  from './components/LandingPage/LandingPage';
import SingUp from './components/login-singUp/sing-up';


function App() {
  return (
    <React.Fragment>

    <Route exact path="/" component={LandingPage} />
    <Route exact path="/singUp" component={SingUp} />
    <Route exact path="/login" component={Login} />
    <Route path ="/home" component={HomeVisitor}/>

    </React.Fragment>

  );
}

export default App;

