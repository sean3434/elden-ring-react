import React, { useState, useEffect } from 'react'
import './Talismans.css'

function TalismansList() {
    const [talismans, setTalismans] = useState(null)

    function getTalismans() {
        fetch('https://eldenring.fanapis.com/api/talismans?limit=100&page=0')
        .then((res) => res.json())
        .then((res) => setTalismans(res.data))
    }

    useEffect(() => {
        getTalismans();
    }, [])

// console.log(talismans);

    return (
        <div className='talismans'>
            <div className='talismanscontainer'>
                {talismans ? talismans.map((talisman, index) => (
                    <div key={index}>
                        <h2>{talisman.name}</h2>
                        <img src={talisman.image} alt={talisman.name}/>
                        <h2>{talisman.effect}</h2>
                        <hr/>
                    </div>
                )) : <h3>LOADING...</h3>}
            </div>
        </div>
    )
}

export default TalismansList