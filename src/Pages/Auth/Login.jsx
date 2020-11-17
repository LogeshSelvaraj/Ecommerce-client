import React,{useState,useEffect} from "react";
import {auth,googleAuthProvider} from "../../firebase"
import "./RegisterComplete.css";
import {useDispatch} from "react-redux"
import {toast} from "react-toastify"
import CircularProgress from '@material-ui/core/CircularProgress';
import {userState} from "../../Reducers/Actions/action"
import { useSelector } from "react-redux";






const Login = ({history}) => {
  const dispatch=useDispatch()
  const user = useSelector((state) => state.user);
  const [email, emailState] = useState("");
  const [password, passState] = useState("");
  const [loading,setLoading]=useState(false)

  useEffect(() => {
    if (user && user.token) history.push("/");
  });

  async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)
    try{
        const result = await auth.signInWithEmailAndPassword(email, password);
        dispatch({
          type: "LOGIN_USER",
          payload: {
            email: result.user.email,
            token: result.user.getIdToken(),
          },
        });

        history.push("/");
    }catch(err){
      setLoading(false)
        toast.error(err.message)
        console.log(err)
    }
  
  }

  async function googleLogin(e){
      e.preventDefault()
      auth.signInWithPopup(googleAuthProvider).then(async (result)=>{
        const props = {
          email: result.user.email,
          token: result.user.refreshToken,
        };

        console.log(props)

        dispatch(userState(props))

        // dispatch({
        //   type:"LOGIN_USER",
        //   payload:{
        //     user:result.user.email,
        //     token:result.user.getIdToken()
        //   }
        // })
        history.push("/")
     }).catch((err)=>{
       console.log(err)
       toast.error(err.message)
     })

  }





  return (
    <div>
      {loading && (
        <div class="loading-animation">
          <CircularProgress />
        </div>
      )}
      {!loading && (
        <div className="container">
          <div className="row">
            <div className="panel panel-primary allignment-form">
              <div className="panel-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <h2>Login</h2>
                  </div>
                  <div className="form-group">
                    <label className="control-label" htmlFor="signupEmail">
                      Email
                    </label>
                    <input
                      id="signupEmail"
                      type="email"
                      maxLength="50"
                      className="form-control"
                      onChange={(e) => {
                        emailState(e.target.value);
                      }}
                      value={email}
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
                      onChange={(e) => {
                        passState(e.target.value);
                      }}
                      value={password}
                      autoFocus
                    ></input>
                  </div>
                  <div className="form-group">
                    <button
                      id="signupSubmit"
                      type="submit"
                      className="btn  btn-block btn-primary"
                      style={{
                        opacity: !email || password.length < 6 ? 0.5 : 0.8,
                      }}
                      disabled={!email || password.length < 6}
                    >
                      Login with email
                    </button>
                  </div>
                  <div class="form-group">
                    <a class="btn btn-block btn-social btn-google" onClick={googleLogin}>
                      <span class="fab fa-google"></span>
                      <p class="oauth-button">Sign in with Google</p>
                    </a>
                  </div>
                  
                  <p >
                   <a href="/forgot/password">Forgot password?</a> Not registered? <a href="/register">Sign up here</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
