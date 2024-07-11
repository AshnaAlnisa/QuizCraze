import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <>
    <div className="hero1">
     
      <div className="box loginbox">
        <div className={`detais dtsignin ${isRegistering ? "callreg" : ""}`}>
          <h2>Login</h2>
          <div className="box-wrapper">
            <input type="text" placeholder="Username" />
            <label>Username</label>
          </div>
          <div className="box-wrapper">
            <input type="password" placeholder="Password" />
            <label>Password</label>
          </div>
          <button id="btnlgn" className="login-signup-btn">
            Login
          </button>
          <p>
            Don't have account?{" "}
            <a href="#" id="lnk_rg" onClick={toggleForm}>
              Register
            </a>
          </p>
        </div>
        <div className={`detais dtsignup ${isRegistering ? "setreg" : ""}`}>
          <h2>Register</h2>
          <div className="box-wrapper">
            <input type="text" placeholder="Username" />
            <label>Username</label>
          </div>
          <div className="box-wrapper">
            <input type="password" placeholder="Password" />
            <label>Password</label>
          </div>
          <div className="box-wrapper">
            <input type="email" placeholder="Email" />
            <label>Email</label>
          </div>
          <button id="btnrg" className="login-signup-btn">
            Register
          </button>
          <p>
            Already have an account?{" "}
            <a href="#" id="lnk_lg" onClick={toggleForm}>
              Login
            </a>
          </p>
        </div>
      </div>
      <div className="bubbles">
        <img src="images/bubble.png"></img>
        <img src="images/bubble.png"></img>
        <img src="images/bubble.png"></img>
        <img src="images/bubble.png"></img>
        <img src="images/bubble.png"></img>
        <img src="images/bubble.png"></img>
        <img src="images/bubble.png"></img>
      </div>
    </div>
    </>
  );
};

export default Login;
