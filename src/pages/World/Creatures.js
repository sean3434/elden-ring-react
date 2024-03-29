import React, { useState, useEffect } from 'react'
import '../World.css'

function CreaturesList() {
    const [creatures, setCreatures] = useState(null)
    const [creatures2, setCreatures2] = useState(null)

    function getCreatures() {
        fetch('https://eldenring.fanapis.com/api/creatures?limit=100&page=0')
        .then((res) => res.json())
        .then((res) => setCreatures(res.data))
    }

    function getCreatures2() {
        fetch('https://eldenring.fanapis.com/api/creatures?limit=100&page=1')
        .then((res) => res.json())
        .then((res) => setCreatures2(res.data))
    }

    useEffect(() => {
        getCreatures();
        getCreatures2();
    }, [])

// console.log(creatures);

    return (
        <div className='world'>
            <div className='itemscontainer'>
            {creatures ? creatures.map((creature, index) => (
                <div className='singleitemcontainer'key={index}>
                    <h2 className='itemname'>{creature.name}</h2>
                    <img className='itemimage'src={creature.image} alt={creature.name}/>
                    <h2 className='itemeffect'>{creature.description}</h2>
                </div>
            )) : <h3>LOADING...</h3>}
            {creatures2 ? creatures2.map((creature, index) => (
                <div className='singleitemcontainer'key={index}>
                    <h2 className='itemname'>{creature.name}</h2>
                    <img className='itemimage'src={creature.image} alt={creature.name}/>
                    <h2 className='itemeffect'>{creature.description}</h2>
                </div>
            )) : <h3>LOADING...</h3>}
            </div>
        </div>
    )
}

export default CreaturesList