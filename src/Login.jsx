import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import "./firebase";
import "./Login.css";
import {auth} from './firebase'

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginEvent = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth)=>{
                history.push("/")
            })
            .catch((e)=>alert(e.message))
    }

    const registerEvent = (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth)=>{
                history.push("/")
            })
            .catch((e)=>alert(e.message))
    }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail: </h5>
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>

          <h5>Password: </h5>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <button className="login__signInButton" onClick={loginEvent}>Sign In</button>
          <p>
            By signing-in you agree to Amazon's Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our Interest-Based
            Ads Notice.
          </p>
          <button className="login__registerButton" onClick={registerEvent}> Create Your Amazon Account</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
