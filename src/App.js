import React,{useEffect} from "react";
import {Switch,Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Pages/Auth/Login"
import Register from "./Pages/Auth/Register"
import Home from "./Pages/Home"
import ForgotPassword from "./Pages/Auth/ForgotPassword"
import NavBar from "./Components/Navbar/Navbar"
import RegisterComplete from "./Pages/Auth/RegisterComplete"
import {auth} from "./firebase"
import {useDispatch} from "react-redux"



function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    const unsubcribe=auth.onAuthStateChanged(async (user)=>{
        if(user){
          const token=await user.getIdToken()
          dispatch({
            type:"LOGIN_USER",
            payload:{
              email:user.email,
              token:token
            }
          })
        }
    })
    return () => unsubcribe()
  },[])

  

  return (
    <>
      <NavBar/>
      <ToastContainer/>
     <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/register/complete" component={RegisterComplete} />
      <Route exact path="/forgot/password" component={ForgotPassword}/>
    </Switch>
  </>)
   
}

export default App;
