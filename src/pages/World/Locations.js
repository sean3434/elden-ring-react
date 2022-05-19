import React, { useState, useEffect } from 'react'
import '../World.css'

function LocationsList() {
    const [locations, setLocations] = useState(null)
    const [locations2, setLocations2] = useState(null)

    function getLocations() {
        fetch('https://eldenring.fanapis.com/api/locations?limit=100&page=0')
        .then((res) => res.json())
        .then((res) => setLocations(res.data))
    }

    function getLocations2() {
        fetch('https://eldenring.fanapis.com/api/locations?limit=100&page=1')
        .then((res) => res.json())
        .then((res) => setLocations2(res.data))
    }

    useEffect(() => {
        getLocations();
        getLocations2();
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
            {locations2 ? locations2.map((location, index) => (
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