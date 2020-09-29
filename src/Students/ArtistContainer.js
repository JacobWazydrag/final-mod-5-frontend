import React, { useEffect, useState }  from 'react'
import ArtistCard  from './ArtistCard';
import StudentNavBar from "./StudentNavBar";
import './ArtistContainer.css'


function ArtistContainer(props) {

        const handleClick = (e) => {
            props.history.push("/contact")
        }

        const[artists, setArtists] = useState([])

        useEffect(() => {
            fetch('http://localhost:3000/artists')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setArtists(data)
            });
        }, [])


    return (
        <ul id="ul-ul" >
    <div class="sign">
      ArtSpace Artists
    </div>
        <StudentNavBar />
            {artists.map(artist => <ArtistCard  handleClick={handleClick} speciality={artist.speciality} availability={artist.availability} username={artist.username} favColor={artist.fav_color} bio={artist.bio} email={artist.email} key={artist.id} lastName={artist.last_name} firstName={artist.first_name} img={artist.profile_picture} />)}
        </ul>
    )
    }

export default ArtistContainer