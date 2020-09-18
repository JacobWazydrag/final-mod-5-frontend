import React, { useEffect, useState }  from 'react'
import ArtistCard  from './ArtistCard';



function ArtistContainer() {
        const[artists, setArtists] = useState([])

        useEffect(() => {
            fetch('http://localhost:3000/artists')
            .then(response => response.json())
            .then(data => {
                setArtists(data)
            });
        })

    return (
        <div className="artist-div">
            {artists.map(artist => <ArtistCard key={artist.id}>{artist.username}</ArtistCard>)}
        </div>
    )
    }

export default ArtistContainer