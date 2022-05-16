import React, { useState, useEffect } from 'react'

function BossesList() {
    const [bosses, setBosses] = useState(null)

    function getBosses() {
        fetch('https://eldenring.fanapis.com/api/bosses?limit=100&page=0')
        .then((res) => res.json())
        .then((res) => setBosses(res.data))
    }

    useEffect(() => {
        getBosses();
    }, [])

// console.log(bosses);

    return (
        <>
            {bosses ? bosses.map((boss, index) => (
                <div key={index}>
                    <h2>{boss.name}</h2>
                    <img src={boss.image} alt={boss.name}/>
                    <h2>{boss.description}</h2>
                    <hr/>
            </div>
            )) : <h3>LOADING...</h3>}
        </>
    )
}

export default BossesList