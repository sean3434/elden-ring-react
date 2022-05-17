import React, { useState, useEffect } from 'react'

function SpiritsList() {
    const [spirits, setSpirits] = useState(null)

    function getSpirits() {
        fetch('https://eldenring.fanapis.com/api/spirits?limit=100&page=0')
        .then((res) => res.json())
        .then((res) => setSpirits(res.data))
    }

    useEffect(() => {
        getSpirits();
    }, [])

// console.log(spirits);

    return (
        <div className='magic'>
            <div className='magiccontainer'>
            {spirits ? spirits.map((spirit, index) => (
                <div key={index}>
                    <h2>{spirit.name}</h2>
                    <img src={spirit.image} alt={spirit.name}/>
                    <h2>{spirit.effect}</h2>
                    <hr/>
                </div>
            )) : <h3>LOADING...</h3>}
            </div>
        </div>
    )
}

export default SpiritsList