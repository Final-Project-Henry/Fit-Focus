import React from 'react';

import { Route } from "react-router-dom";

import logo from './logo.svg';
import { Route } from "react-router-dom";
import HomeVisitor from './Components/HomeVisitor/HomeVisitor';

import './App.css';
import SingUp from './components/login-singUp/sing-up';

function App() {
  return (
    <React.Fragment>

    <Route exact path="/login" component={SingUp} />
    <Route path ="/home" component={HomeVisitor}/>
  
    </React.Fragment>
  );
}

export default App;

