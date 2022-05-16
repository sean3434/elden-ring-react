import React, { useState, useEffect } from 'react'

function CreaturesList() {
    const [creatures, setCreatures] = useState(null)

    function getCreatures() {
        fetch('https://eldenring.fanapis.com/api/creatures?limit=100&page=0')
        .then((res) => res.json())
        .then((res) => setCreatures(res.data))
    }

    useEffect(() => {
        getCreatures();
    }, [])

// console.log(creatures);

    return (
        <>
            {creatures ? creatures.map((creature, index) => (
                <div key={index}>
                    <h2>{creature.name}</h2>
                    <img src={creature.image} alt={creature.name}/>
                    <h2>{creature.description}</h2>
                    <hr/>
            </div>
            )) : <h3>LOADING...</h3>}
        </>
    )
}

export default CreaturesList