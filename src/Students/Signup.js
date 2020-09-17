import React, { useState } from "react";
import "./Login.css";
import FBImage from "../fb.png";
import GPImage from "../gp.png";
import TWImage from "../tw.png";
import { useDispatch } from "react-redux";
import studentActions from "../redux/actions";

const SignupPage = (props) => {
  // initializing dispatch
  const dispatch = useDispatch();
  // Setting up local state using the useState hook
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [signupForm, setSignupForm] = useState({
    username: "",
    password: "",
  });
  const handleSignUpChange = (e) =>
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const { history } = props;
    dispatch(studentActions.newStudentToDB(signupForm));
    history.push("/student_dashboard");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(studentActions.loginStudentToDB(loginForm));
    props.history.push("/student_dashboard");
  };
  const handleChange = (e) =>
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

  // Destructuring keys from our local state to use in the form
  const { username, password } = loginForm;
  const { signupemail, signupusername, signuppassword } = signupForm;

  // Component code

  function login(event) {
    event.preventDefault();
    var x = document.getElementById("login");
    var y = document.getElementById("signup");
    var z = document.getElementById("btn");

    x.style.marginLeft = "0px";
    y.style.marginLeft = "650px";
    z.style.left = "0px";
  }
  function signup(event) {
    event.preventDefault();
    var x = document.getElementById("login");
    var y = document.getElementById("signup");
    var z = document.getElementById("btn");
    console.log(x.style);
    x.style.marginLeft = "600px";
    y.style.marginLeft = "0px";
    z.style.left = "110px";
  }

  return (
      <div className="hero">
        <div className="form-box">
          <div className="button-box">
            <div id="btn"></div>
            <button type="button" className="toggle-btn" onClick={login}>
              Login
            </button>
            <button type="button" className="toggle-btn" onClick={signup}>
              Signup
            </button>
          </div>
          <div className="social-icons">
            <img alt="facebook" src={FBImage} />
            <img alt="google" src={GPImage} />
            <img alt="twitter" src={TWImage} />
          </div>
          <form onSubmit={handleSubmit} id="login" className="input-group">
            <input
              value={username}
              onChange={handleChange}
              type="text"
              name="username"
              className="input-field"
              placeholder="username"
            />
            <input
              value={password}
              onChange={handleChange}
              type="text"
              name="password"
              className="input-field"
              placeholder="password"
            />
            <button type="submit" className="submit-btn">
              Log In
            </button>
          </form>
          <form
            onSubmit={handleSignUpSubmit}
            id="signup"
            className="input-group"
          >
            <input
              type="text"
              name="email"
              value={signupemail}
              onChange={handleSignUpChange}
              className="input-field"
              placeholder="email"
            />
            <input
              type="text"
              name="username"
              value={signupusername}
              onChange={handleSignUpChange}
              className="input-field"
              placeholder="username"
            />
            <input
              type="text"
              name="password"
              value={signuppassword}
              onChange={handleSignUpChange}
              className="input-field"
              placeholder="password"
            />
            <button type="submit" className="submit-btn">
              Signup
            </button>
          </form>
        </div>
      </div>
  );
};

export default SignupPage;
