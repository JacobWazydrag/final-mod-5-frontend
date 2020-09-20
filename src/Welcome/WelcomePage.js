import React from "react";
import { Link } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton'

const WelcomePage = () => {
  return (
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
    <Link to="/student_signup">Students</Link>
    <br></br>
      <Link to="/artist_signup">Artists</Link>
</DropdownButton>
  );
};

export default WelcomePage;
