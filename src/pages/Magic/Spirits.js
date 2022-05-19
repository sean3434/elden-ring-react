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
            <div className='itemscontainer'>
            {spirits ? spirits.map((spirit, index) => (
                <div className='singleitemcontainer'key={index}>
                    <h2 className='itemname'>{spirit.name}</h2>
                    <img className='itemimage' src={spirit.image} alt={spirit.name}/>
                    <h2 className='itemeffect'>{spirit.effect}</h2>
                </div>
            )) : <h3>LOADING...</h3>}
            </div>
        </div>
    )
}

export default SpiritsList