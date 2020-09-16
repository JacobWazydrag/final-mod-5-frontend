import React from "react";
import "./Login.css";
import FBImage from "../fb.png";
import GPImage from "../gp.png";
import TWImage from "../tw.png";

const SignupPage = (props) => {

function login(event) {
    event.preventDefault()
    var x = document.getElementById("login");
    var y = document.getElementById("signup");
    var z = document.getElementById("btn");

    x.style.marginLeft = "0px"
    y.style.marginLeft = "650px"
    z.style.left = "0px"
}
function signup(event) {
    event.preventDefault()
    var x = document.getElementById("login");
    var y = document.getElementById("signup");
    var z = document.getElementById("btn");
console.log(x.style)
    x.style.marginLeft = "600px"
    y.style.marginLeft = "0px"
    z.style.left = "110px"
}

  return (
      
    <body>
      <div className="hero">
        <div className="form-box">
          <div className="button-box">
            <div id="btn"></div>
            <button type="button" className="toggle-btn" onClick={login} >
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
            <form id="login" className="input-group">
              <input type="text" name="username" className="input-field" placeholder="username" />
              <input type="text" name="password" className="input-field" placeholder="password" />
              <button type="submit" className="submit-btn">Log In</button>
            </form>
            <form id="signup" className="input-group">
              <input type="text" name="email" className="input-field" placeholder="email" />
              <input type="text" name="username" className="input-field" placeholder="username" />
              <input type="text" name="password" className="input-field" placeholder="password" />
              <button type="submit" className="submit-btn">Signup</button>
            </form>
      </div>
    </div>
    </body>

  );
};

export default SignupPage;
