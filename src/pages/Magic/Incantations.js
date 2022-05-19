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
        <div className='magic'>
            <div className='itemscontainer'>
                {incantations ? incantations.map((incantation, index) => (
                    <div className='singleitemcontainer'key={index}>
                        <h2 className='itemname'>{incantation.name}</h2>
                        <img className='itemimage'src={incantation.image} alt={incantation.name}/>
                        <h2 className='itemeffect'>{incantation.effects}</h2>
                </div>
                )) : <h3>LOADING...</h3>}
            </div>
        </div>
    )
}

export default IncantationsList