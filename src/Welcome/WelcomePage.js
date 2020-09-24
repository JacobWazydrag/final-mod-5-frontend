import React from "react";
import { Link } from "react-router-dom";
import './Welcome.css'
import Card from 'react-bootstrap/Card'
import StudentPic from './student.jpeg'
import ArtistPic from './artist.jpeg'

const WelcomePage = () => {
  return (
<div id="background" >
<div>
<Card id="card1" style={{ width: '18rem' }}>
  <Card.Img id="card-img1" variant="top" src={StudentPic} />
  <Card.Body>
    <Card.Title id="card-title" >STUDENTS</Card.Title>
    <Card.Text id="card-text">
      Find the right artist to help develop your skill
    </Card.Text>
    <button  ><Link id="card1-button" to="/student_signup"></Link></button>
  </Card.Body>
</Card>
</div>
<Card id="card2" style={{ width: '18rem' }}>
  <Card.Img id="card-img2" variant="top" src={ArtistPic} />
  <Card.Body>
    <Card.Title id="card-title2" >ARTISTS</Card.Title>
    <Card.Text id="card2-text">
      Connect with your students and start scheduling
      </Card.Text>
    <button  ><Link id="card2-button" to="/artist_signup"></Link></button>
  </Card.Body>
</Card>
    
    
      
      </div>
  );
};

export default WelcomePage;
