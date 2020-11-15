import React from "react";
import {Switch,Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Pages/Auth/Login"
import Register from "./Pages/Auth/Register"
import Home from "./Pages/Home"
import NavBar from "./Pages/Navbar/Navbar"
import RegisterComplete from "./Pages/Auth/RegisterComplete"



function App() {
  return (
    <>
      <NavBar/>
      <ToastContainer/>
     <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/register/complete" component={RegisterComplete} />
    </Switch>
  </>)
   
}

export default App;
