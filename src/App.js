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
import UserHistory  from "./Pages/User/UserHistory.jsx"
import UserRoute from "./Components/Routes/UserRoute"
import MyOrders from "./Pages/User/MyOrders"

import {auth} from "./firebase"
import {useDispatch} from "react-redux"
import {getUser} from "./functions/Api"
import {UpdatingStates} from './functions/UpdatingStates'



function App() {

      UpdatingStates();

  // const dispatch = useDispatch()


  //   const roleBasedRedirect = (role) => {
  //     if (role === "admin") {
  //       dispatch({
  //         type: "LOGINAS_ADMIN",
  //       });
  //     } else {
  //       dispatch({
  //         type: "LOGINAS_USER",
  //       });
  //     }
  //   };

  // useEffect( ()=>{
  //   const unsubcribe=auth.onAuthStateChanged(async (user)=>{
  //       if(user){
  //         const idToken = (await user.getIdTokenResult()).token;
  //   getUser(idToken)
  //    .then((res) => {
  //      roleBasedRedirect(res.data.role);
  //      dispatch({
  //        type: "LOGIN_USER",
  //        payload: {
  //          name: res.data.name,
  //          email: res.data.email,
  //          token: idToken,
  //          role: res.data.role,
  //          _id: res.data.id,
  //        },
  //      });
       
  //    })
  //    .catch((err) => console.log(err));

  //       }
  //   })
  //   return () => unsubcribe()
  // },[])


  return (
    <>
      <NavBar />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/complete" component={RegisterComplete} />
        <Route exact path="/forgot/password" component={ForgotPassword} />
        <UserRoute exact path="/user/history" component={UserHistory} />
        <UserRoute exact path="/user/myorders" component={MyOrders} />
      </Switch>
    </>
  );
   
}

export default App;
