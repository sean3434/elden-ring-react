import React, { useState, useEffect } from 'react'
import '../World.css'

function BossesList() {
    const [bosses, setBosses] = useState(null)
    const [bosses2, setBosses2] = useState(null)

    function getBosses() {
        fetch('https://eldenring.fanapis.com/api/bosses?limit=100&page=0')
        .then((res) => res.json())
        .then((res) => setBosses(res.data))
    }

    function getBosses2() {
        fetch('https://eldenring.fanapis.com/api/bosses?limit=100&page=1')
        .then((res) => res.json())
        .then((res) => setBosses2(res.data))
    }

    useEffect(() => {
        getBosses();
        getBosses2();
    }, [])

// console.log(bosses);

    return (
        <div className='world'>
            <div className='itemscontainer'>
            {bosses ? bosses.map((boss, index) => (
                <div className='singleitemcontainer'key={index}>
                    <h2 className='itemname'>{boss.name}</h2>
                    <img className='itemimage'src={boss.image} alt={boss.name}/>
                    <h2 className='itemeffect'>{boss.description.substring(0,125)}..</h2>
                </div>
            )) : <h3>LOADING...</h3>}
            {bosses2 ? bosses2.map((boss, index) => (
                <div className='singleitemcontainer'key={index}>
                    <h2 className='itemname'>{boss.name}</h2>
                    <img className='itemimage'src={boss.image} alt={boss.name}/>
                    <h2 className='itemeffect'>{boss.description.substring(0,125)}..</h2>
                </div>
            )) : <h3>LOADING...</h3>}
            </div>
        </div>
    )
}

export default BossesList