import React, { useState, useEffect } from 'react'

function WeaponsList() {
    const [weapons, setWeapons] = useState(null)

    function getWeapons() {
        fetch('https://eldenring.fanapis.com/api/weapons?limit=100&page=0')
        .then((res) => res.json())
        .then((res) => setWeapons(res.data))
    }

    useEffect(() => {
        getWeapons();
    }, [])

console.log(weapons);

    return (
        <>
            {weapons ? weapons.map((weapon, index) => (
                <div key={index}>
                    <h2>{weapon.name}</h2>
                    <img src={weapon.image} alt={weapon.name}/>
                    <h2>{weapon.description}</h2>
                    <hr/>
            </div>
            )) : <h3>LOADING...</h3>}
        </>
    )
}

export default WeaponsList