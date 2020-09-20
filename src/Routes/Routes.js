import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Students from '../Students';
import Artists from '../Artists'
import WelcomePage from '../Welcome';

const Routes = () => {
  return (
    <Switch>
      <Route path="/browse_artists" component={Students.ArtistContainer} />
      <Route path="/lessons" component={Students.Lessons} />
      <Route path="/student_dashboard" component={Students.Dashboard} />
      <Route path="/nav_bar" component={Students.StudentNavBar} />
      <Route path="/student_signup" component={Students.Signup} />
      <Route path="/artist_signup" component={Artists.ArtistAuth} />
      <Route path="/artist_dashboard" component={Artists.ArtistDashboard} />
      <Route path="/student_login" component={Students.Login} />
      <Route exact path="/" component={WelcomePage.WelcomePage} />
    </Switch>
  );
};

export default Routes;