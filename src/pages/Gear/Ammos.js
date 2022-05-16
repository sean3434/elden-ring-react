import React, { useState, useEffect } from 'react'

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
        <>
            {ammos ? ammos.map((ammo, index) => (
                <div key={index}>
                    <h2>{ammo.name}</h2>
                    <img src={ammo.image} alt={ammo.name}/>
                    <h2>{ammo.description}</h2>
                    <hr/>
            </div>
            )) : <h3>LOADING...</h3>}
        </>
    )
}

export default AmmosList