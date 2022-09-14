import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
/* import HomeVisitor from './components/HomeVisitor/HomeVisitor';
import SingUp from './components/login-singUp/sing-up'; */

function App() {
  return (
    <React.Fragment>
      <Navbar />
      {/* <Route exact path="/login" component={SingUp} />
    <Route path ="/home" component={HomeVisitor}/> */}
    </React.Fragment>
  );
}

export default App;
