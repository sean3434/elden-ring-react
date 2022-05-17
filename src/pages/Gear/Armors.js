import React, { useState, useEffect } from 'react'
import '../Gear.css'

function ArmorsList() {
    const [armors, setArmors] = useState(null)

    function getArmors() {
        fetch('https://eldenring.fanapis.com/api/armors?limit=100&page=0')
        .then((res) => res.json())
        .then((res) => setArmors(res.data))
    }

    useEffect(() => {
        getArmors();
    }, [])

// console.log(armors);

    return (
        <div className='gear'>
            <div className='gearcontainer'>
            {armors ? armors.map((armor, index) => (
                <div key={index}>
                    <h2>{armor.name}</h2>
                    <img src={armor.image} alt={armor.name}/>
                    {/* <h2>{armor.description}</h2> */}
                    <hr/>
                </div>
            )) : <h3>LOADING...</h3>}
            </div>
        </div>
    )
}

export default ArmorsList