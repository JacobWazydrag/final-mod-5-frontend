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
      <Route path="/student_login" component={Students.Login} />
      <Route path="/contact" component={Students.Contact} />

      <Route path="/artist_signup" component={Artists.ArtistAuth} />
      <Route path="/artist_dashboard" component={Artists.ArtistDashboard} />
      <Route path="/new_booking" component={Artists.NewBooking} />
      <Route path="/artist_appointments" component={Artists.ArtistAppointments} />
      <Route path="/edit_artist" component={Artists.EditArtist} />
      <Route exact path="/" component={WelcomePage.WelcomePage} />
    </Switch>
  );
};

export default Routes;