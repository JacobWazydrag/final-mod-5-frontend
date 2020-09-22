import React, { useEffect, useState }  from 'react'
import ArtistCard  from './ArtistCard';
import StudentNavBar from "./StudentNavBar";


function ArtistContainer() {
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
        <ul >
        <StudentNavBar />
            {artists.map(artist => <ArtistCard  username={artist.username} favColor={artist.fav_color} bio={artist.bio} email={artist.email} key={artist.id} lastName={artist.last_name} firstName={artist.first_name} img={artist.profile_picture} />)}
        </ul>
    )
    }

export default ArtistContainer