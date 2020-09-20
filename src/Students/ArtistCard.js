import React from 'react'
import './ArtistCard.css'

class ArtistCard extends React.Component{
    
    
    render(){
      console.log(this.props)
    return (
<div className="card">
  <div style={{background: this.props.favColor}} className="additional">
    <div className="user-card">
      <div className="level center">
      {this.props.username}
      </div>
      <div className="points center">
        Specialty<br></br>
        Will<br></br>
        Go Here
      </div>
      <img style={{borderRadius: "6px"}}alt="text" width="110" height="110" viewBox="0 0 250 250" src={this.props.img} aria-labelledby="title desc" className="center">
        
      </img>
    </div>
    <div className="more-info">
      <h1>{this.props.email}</h1>
      <div className="coords">
        <span>Group Name</span>
        <span>Joined January 2019</span>
      </div>
      <div className="coords">
        <span>Position/Role</span>
        <span>City, Country</span>
      </div>
      <div className="stats">
        <div>
          <div className="title">Awards</div>
          <i className="fa fa-trophy"></i>
          <div className="value">2</div>
        </div>
        <div>
          <div className="title">Matches</div>
          <i className="fa fa-gamepad"></i>
          <div className="value">27</div>
        </div>
        <div>
          <div className="title">Pals</div>
          <i className="fa fa-group"></i>
          <div className="value">123</div>
        </div>
        <div>
          <div className="title">Coffee</div>
          <i className="fa fa-coffee"></i>
          <div className="value infinity">∞</div>
        </div>
      </div>
    </div>
  </div>
  <div className="general">
    <h1>{this.props.firstName}</h1>
    <p>{this.props.bio}</p>
    <span className="more">Mouse over the card for more info</span>
  </div>
</div>
    )
}
}

export default ArtistCard