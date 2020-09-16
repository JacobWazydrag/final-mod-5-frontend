import React from 'react';
import { Link } from 'react-router-dom';


const WelcomePage = () => {


  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
    <h1>This is the Welcome WelcomePage.js</h1>

      <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
        <Link to="/student_signup">Signup</Link>
      <Link to="/student_login">Login</Link>
        </div>
      </div>
    </div>
  </div>
    </div>
    
  );
};

export default WelcomePage;