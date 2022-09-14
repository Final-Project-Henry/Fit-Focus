import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomeVisitor from "./Components/HomeVisitor/HomeVisitor";
import SingUp from "./Components/login-singUp/sing-up";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Route exact path="/login" component={SingUp} />
      <Route path="/home" component={HomeVisitor} />
    </React.Fragment>
  );
}

export default App;
