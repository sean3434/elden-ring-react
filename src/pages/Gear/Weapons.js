import React, { useState, useEffect } from 'react'
import '../Gear.css'

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

// console.log(weapons);

    return (
        <div className='gear'>
            <div className='itemscontainer'>
            {weapons ? weapons.map((weapon, index) => (
                <div className='singleitemcontainer'key={index}>
                    <h2 className='itemname'>{weapon.name}</h2>
                    <img className='itemimage'src={weapon.image} alt={weapon.name}/>
                    <h2 className='itemeffect'>{weapon.description.substring(0,125)}..</h2>
                </div>
            )) : <h3>LOADING...</h3>}
            </div>
        </div>
    )
}

export default WeaponsList