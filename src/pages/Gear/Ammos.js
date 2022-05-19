import React, { useState, useEffect } from 'react'
import '../Gear.css'

function AmmosList() {
    const [ammos, setAmmos] = useState(null)

    function getAmmos() {
        fetch('https://eldenring.fanapis.com/api/ammos?limit=100&page=0')
        .then((res) => res.json())
        .then((res) => setAmmos(res.data))
    }

    useEffect(() => {
        getAmmos();
    }, [])

// console.log(ammos);

    return (
        <div className='gear'>
            <div className='itemscontainer'>
            {ammos ? ammos.map((ammo, index) => (
                <div className='singleitemcontainer'key={index}>
                    <h2 className='itemname'>{ammo.name}</h2>
                    <img className='itemimage' src={ammo.image} alt={ammo.name}/>
                    <h2 className='itemeffect'>{ammo.description}</h2>
                </div>
            )) : <h3>LOADING...</h3>}
            </div>
        </div>
    )
}

export default AmmosList