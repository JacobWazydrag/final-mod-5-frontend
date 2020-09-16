import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Students from '../Students';
import WelcomePage from '../Welcome';

const Routes = () => {
  return (
    <Switch>
      <Route path="/student_dashboard" component={Students.Dashboard} />
      <Route path="/student_signup" component={Students.Signup} />
      <Route path="/student_login" component={Students.Login} />
      <Route exact path="/" component={WelcomePage.WelcomePage} />
    </Switch>
  );
};

export default Routes;