<<<<<<< HEAD
//import React from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
import { LandingPage } from './components/LandingPage/LandingPage';

function App() {
  return (
    <LandingPage />
=======
import React from 'react';
import { Route } from "react-router-dom";
import HomeVisitor from './components/HomeVisitor/HomeVisitor';
import SingUp from './components/login-singUp/sing-up';

function App() {
  return (
    <React.Fragment>

    <Route exact path="/login" component={SingUp} />
    <Route path ="/home" component={HomeVisitor}/>
  
    </React.Fragment>
>>>>>>> 1992478d84ea4524e0c77437a5ff6df03789acb9
  );
}

export default App;

