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
            <div className='itemscontainer'>
            {armors ? armors.map((armor, index) => (
                <div className='singleitemcontainer'key={index}>
                    <h2 className='itemname'>{armor.name}</h2>
                    <img className='itemimage'src={armor.image} alt={armor.name}/>
                    <h2 className='itemeffect'>{armor.description.substring(0,125)}..</h2>
                </div>
            )) : <h3>LOADING...</h3>}
            </div>
        </div>
    )
}

export default ArmorsList