import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
import "./Login.css";

function Login() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  let userRef = useRef();
  let passwordRef = useRef();

  const { user, dispatch, isFetching } = useContext(Context);
  // console.log("data", isFetching);

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "https://muthu-blog-server-api.herokuapp.com/api/auth/login",
        {
          username: userRef.current.value,
          password: passwordRef.current.value,
        }
      );

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      userRef = "";
      passwordRef = "";
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  console.log(user);

  return (
    <div className="login">
      <span className="loginTitle">Login </span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter Your email..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>
      <button className="RegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}

export default Login;
