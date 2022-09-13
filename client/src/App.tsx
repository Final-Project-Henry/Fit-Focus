import React from 'react';
import logo from './logo.svg';
import { Route } from "react-router-dom";
import { Counter } from './features/counter/Counter';
import './App.css';
import Login from './components/login-singUp/sing-up';

function App() {
  return (
    <React.Fragment>
  <Route path="/login" component={Login} />
    </React.Fragment>
  );
}

export default App;
