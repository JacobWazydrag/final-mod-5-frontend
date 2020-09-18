import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes/Routes';
import ArtistContainer from './Students/ArtistContainer';


const App = () => {

  return (
    <Router>
    <ArtistContainer/>
      <Routes />
    </Router>
  );
};

export default App;