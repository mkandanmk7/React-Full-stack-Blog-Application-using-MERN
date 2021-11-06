import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register </span>
      <form className="registerForm">
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Your Username..."
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Your email..."
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
        />
        <button className="registerButton">register</button>
      </form>
      <button className="LoginButton">Login</button>
    </div>
  );
}

export default Register;
