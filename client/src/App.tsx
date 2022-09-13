import React from 'react';
import logo from './logo.svg';
import { Route } from "react-router-dom";
import HomeVisitor from './Components/HomeVisitor/HomeVisitor';
import './App.css';

function App() {
  return (
    <React.Fragment>
  <Route path ="/home" component={HomeVisitor}/>
    </React.Fragment>
  );
}

export default App;
