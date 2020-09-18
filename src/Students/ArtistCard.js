import React, { Component } from 'react'
import './ArtistCard.css'
import Image from './img.jpg'

class ArtistCard extends React.Component{
    
    
    render(){
    return (
        <div className="artist-card">
  <body>

<div class="card middle">
  <div class="front">
    <img src={Image} alt=""/>
  </div>
  <div class="back">
    <div class="back-content middle">
      <h2>{this.props.children}</h2>
      <span>Youtube Channel</span>
      <div class="sm">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-youtube"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  </div>
</div>



</body>
            
        </div>
    )
}
}

export default ArtistCard