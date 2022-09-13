import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import SingUp from './components/login-singUp/sing-up';

function App() {
  return (
    <React.Fragment>
    <Route exact path="/login" component={SingUp} />

    </React.Fragment>
  );
}

export default App;

