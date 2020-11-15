import React from "react";
import { useState,useEffect } from "react";
import  "./RegisterComplete.css"
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const RegisterComplete = () => {
  const [email, emailState] = useState("");
  const [password,passState]=useState("")

  useState(()=>{
      emailState(window.localStorage.getItem("emailForSignIn"))
  },[])

  const handleChange=(e)=>{
      passState(e.target.value)
  }

  const handleSubmit =()=>{
      console.log(email,password)
  }

  return (
     <div className="SecondPageregister">
      <div className="container">
        <div className="row">
          <div className="panel panel-primary allignment-form2">
            <div className="panel-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <h2>Complete Registartion</h2>
                </div>
                <div className="form-group">
                  <label className="control-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    value={email}
                    disabled
                  ></input>
                </div>
                <div className="form-group">
                  <label className="control-label" htmlFor="password">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    maxLength="25"
                    className="form-control"
                    onChange={handleChange}
                    value={password}
                    autoFocus
                  ></input>
                </div>
                <div className="form-group">
                  <button
                    id="signupSubmit"
                    type="submit"
                    className="btn  btn-block btn-primary"
                    style={{ opacity: 0.8 }}
                  >
                    Register
                  </button>
                </div>
                <p style={{ textAlign: "center" }}>
                  Already have an account? <a href="#">Sign in</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default RegisterComplete;
