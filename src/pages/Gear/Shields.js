import React, { useState, useEffect } from 'react'

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
        <>
            {shields ? shields.map((shield, index) => (
                <div key={index}>
                    <h2>{shield.name}</h2>
                    <img src={shield.image} alt={shield.name}/>
                    {/* <h2>{shield.description}</h2> */}
                    <hr/>
            </div>
            )) : <h3>LOADING...</h3>}
        </>
    )
}

export default ShieldsList