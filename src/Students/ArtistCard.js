import React from 'react'
import './ArtistCard.css'

class ArtistCard extends React.Component{
  

    
    render(){
    return (

<div onClick={this.props.handleClick} className="card">
  <div style={{background: this.props.favColor}} className="additional">
    <div className="user-card">
      <div className="level center">
      {this.props.username}
      </div>
      <div className="points center">
        {this.props.speciality}
      </div>
      <img style={{borderRadius: "6px"}}alt="text" width="110" height="110" viewBox="0 0 250 250" src={this.props.img} aria-labelledby="title desc" className="center">
        
      </img>
    </div>
    <div className="more-info">
      <h1>{this.props.email}</h1>
      <div className="coords">
        <span id="add-info">
        Availability: <br></br>
        <br></br>
        {this.props.availability}
        <br></br>
        <br></br>
        Click to send me a Message!
        </span>
      </div>
    </div>
  </div>
  <div className="general">
    <h1>{this.props.firstName}</h1> <br></br>
    <p>{this.props.bio}</p>
    <span className="more">Mouse over the card for more info</span>
  </div>
</div>
    )
}
}

export default ArtistCard