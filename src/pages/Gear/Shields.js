import React, { useState, useEffect } from 'react'
import '../Gear.css'

function ShieldsList() {
    const [shields, setShields] = useState(null)

    function getShields() {
        fetch('https://eldenring.fanapis.com/api/shields?limit=100&page=0')
        .then((res) => res.json())
        .then((res) => setShields(res.data))
    }

    useEffect(() => {
        getShields();
    }, [])

// console.log(shields);

    return (
        <div className='gear'>
            <div className='itemscontainer'>
            {shields ? shields.map((shield, index) => (
                <div className='singleitemcontainer'key={index}>
                    <h2 className='itemname'>{shield.name}</h2>
                    <img className='itemimage'src={shield.image} alt={shield.name}/>
                    <h2 className='itemeffect'>{shield.description.substring(0,125)}..</h2>
                </div>
            )) : <h3>LOADING...</h3>}
            </div>
        </div>
    )
}

export default ShieldsList