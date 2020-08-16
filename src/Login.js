import React, {useState} from "react";
import "./css/Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';

function Login() {
  // setup state (short term memory/variables in react)
  const[email, setEmail] =  useState('');
  const [password, setPassword] = useState('')

  const login = event => {
    // Stop page from reloading when clicked
    event.preventDefault()
    // Login logic
    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
      // logged in, redirect to homepage
    })
    .catch((e) => {
      // error logging in
      alert(e.message);
    })

  }

  const register = event => {
    // Stop page from reloading when clicked
    event.preventDefault()
    // register logic
    auth.createUserWithEmailAndPassword(email, password)
    .then(auth => {
      // created a user and logged in, redirect to homepage
    })
    .catch((e) => {
      alert(e.message);
    })
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form action="">
          <h5>E-mail</h5>
          {/* Map email field to state hook (onChange)*/}
          <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
          <h5>Password</h5>
          {/* Map password field to state hook */}
          <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
          <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use &
          Sale.checkbox-light Please see our Privacy Notice, our Cookies Notice
          and our Interest-Based Ads Notice
        </p>
        <button onClick={register}  className="login__registerButton">Create your Account</button>
      </div>
    </div>
  );
}

export default Login;
