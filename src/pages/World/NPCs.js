import React, { useState, useEffect } from 'react'
import '../World.css'

function NPCsList() {
    const [npcs, setNPCs] = useState(null)

    function getNPCs() {
        fetch('https://eldenring.fanapis.com/api/npcs?limit=100&page=0')
        .then((res) => res.json())
        .then((res) => setNPCs(res.data))
    }

    useEffect(() => {
        getNPCs();
    }, [])

// console.log(npcs);

    return (
        <div className='world'>
            <div className='worldcontainer'>
            {npcs ? npcs.map((npc, index) => (
                <div key={index}>
                    <h2>{npc.name}</h2>
                    <img src={npc.image} alt={npc.name}/>
                    <h2>{npc.role}</h2>
                    <h2>{npc.location}</h2>
                    <hr/>
                </div>
            )) : <h3>LOADING...</h3>}
            </div>
        </div>
    )
}

export default NPCsList