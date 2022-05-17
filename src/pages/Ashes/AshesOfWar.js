import React, { useState, useEffect } from 'react'
import '../Magic.css'

function AshesOfWarList() {
    const [ashes, setAshes] = useState(null)

    function getAshes() {
        fetch('https://eldenring.fanapis.com/api/ashes?limit=100&page=0')
        .then((res) => res.json())
        .then((res) => setAshes(res.data))
    }

    useEffect(() => {
        getAshes();
    }, [])

// console.log(ashes);

    return (
        <div className='magic'>
            <div className='magiccontainer'>
                {ashes ? ashes.map((ash, index) => (
                    <div key={index}>
                        <h2>{ash.name}</h2>
                        <img src={ash.image} alt={ash.name}/>
                        <h2>{ash.description}</h2>
                        <hr/>
                </div>
                )) : <h3>LOADING...</h3>}
            </div>
        </div>
    )
}

export default AshesOfWarList