import React, { useState, useEffect } from 'react'
import '../World.css'

function LocationsList() {
    const [locations, setLocations] = useState(null)

    function getLocations() {
        fetch('https://eldenring.fanapis.com/api/locations?limit=100&page=0')
        .then((res) => res.json())
        .then((res) => setLocations(res.data))
    }

    useEffect(() => {
        getLocations();
    }, [])

// console.log(locations);

    return (
        <div className='world'>
            <div className='itemscontainer'>
            {locations ? locations.map((location, index) => (
                <div className='singleitemcontainer'key={index}>
                    <h2 className='itemname'>{location.name}</h2>
                    <img className='itemimage'src={location.image} alt={location.name}/>
                    <h2 className='itemeffect'>{location.description}</h2>
                </div>
            )) : <h3>LOADING...</h3>}
            </div>
        </div>
    )
}

export default LocationsList