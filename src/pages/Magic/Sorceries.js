import React, { useState, useEffect } from 'react'
import '../Magic.css'

function SorceriesList() {
    const [sorceries, setSorceries] = useState(null)

    function getSorceries() {
        fetch('https://eldenring.fanapis.com/api/sorceries?limit=100&page=0')
        .then((res) => res.json())
        .then((res) => setSorceries(res.data))
    }

    useEffect(() => {
        getSorceries();
    }, [])

// console.log(sorceries);

    return (
        <div className='magic'>
            <div className='magiccontainer'>
                {sorceries ? sorceries.map((sorceries, index) => (
                    <div key={index}>
                        <h2>{sorceries.name}</h2>
                        <img src={sorceries.image} alt={sorceries.name}/>
                        <h2>{sorceries.effects}</h2>
                        <hr/>
                    </div>
            )) : <h3>LOADING...</h3>}
            </div>
        </div>
    )
}

export default SorceriesList