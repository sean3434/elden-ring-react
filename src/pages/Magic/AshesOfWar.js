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
            <div className='itemscontainer'>
                {ashes ? ashes.map((ash, index) => (
                    <div className='singleitemcontainer' key={index}>
                        <h2 className='itemname'>{ash.name}</h2>
                        <img className='itemimage' src={ash.image} alt={ash.name}/>
                        <h2 className='itemeffect' >{ash.description.substring(0,120)}..</h2>
                </div>
                )) : <h3>LOADING...</h3>}
            </div>
        </div>
    )
}

export default AshesOfWarList