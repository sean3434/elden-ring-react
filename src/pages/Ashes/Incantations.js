import React, { useState, useEffect } from 'react'

function IncantationsList() {
    const [incantations, setIncantations] = useState(null)

    function getIncantations() {
        fetch('https://eldenring.fanapis.com/api/incantations?limit=100&page=0')
        .then((res) => res.json())
        .then((res) => setIncantations(res.data))
    }

    useEffect(() => {
        getIncantations();
    }, [])

// console.log(incantations);

    return (
        <>
            {incantations ? incantations.map((incantation, index) => (
                <div key={index}>
                    <h2>{incantation.name}</h2>
                    <img src={incantation.image} alt={incantation.name}/>
                    <h2>{incantation.effects}</h2>
                    <hr/>
            </div>
            )) : <h3>LOADING...</h3>}
        </>
    )
}

export default IncantationsList