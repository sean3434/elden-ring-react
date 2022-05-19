import React, { useState, useEffect } from 'react'
import '../Gear.css'

function WeaponsList() {
    const [weapons, setWeapons] = useState(null)
    const [weapons2, setWeapons2] = useState(null)
    const [weapons3, setWeapons3] = useState(null)
    const [weapons4, setWeapons4] = useState(null)
    
    function getWeapons() {
        fetch('https://eldenring.fanapis.com/api/weapons?limit=100&page=0')
        .then((res) => res.json())
        .then((res) => setWeapons(res.data))
    }

    function getWeapons2() {
        fetch('https://eldenring.fanapis.com/api/weapons?limit=100&page=1')
        .then((res) => res.json())
        .then((res) => setWeapons2(res.data))
    }

    function getWeapons3() {
        fetch('https://eldenring.fanapis.com/api/weapons?limit=100&page=2')
        .then((res) => res.json())
        .then((res) => setWeapons3(res.data))
    }

    function getWeapons4() {
        fetch('https://eldenring.fanapis.com/api/weapons?limit=100&page=3')
        .then((res) => res.json())
        .then((res) => setWeapons4(res.data))
    }

    useEffect(() => {
        getWeapons();
        getWeapons2();
        getWeapons3();
        getWeapons4();
    }, [])

// console.log(weapons);

    return (
        <div className='gear'>
            <div className='itemscontainer'>
            {weapons ? weapons.map((weapon, index) => (
                <div className='singleitemcontainer'key={index}>
                    <h2 className='itemname'>{weapon.name}</h2>
                    <img className='itemimage'src={weapon.image} alt={weapon.name}/>
                    <h2 className='itemeffect'>{weapon.description.substring(0,125)}..</h2>
                </div>
            )) : <h3>LOADING...</h3>}
            {weapons2 ? weapons2.map((weapon, index) => (
                <div className='singleitemcontainer'key={index}>
                    <h2 className='itemname'>{weapon.name}</h2>
                    <img className='itemimage'src={weapon.image} alt={weapon.name}/>
                    <h2 className='itemeffect'>{weapon.description.substring(0,125)}..</h2>
                </div>
            )) : <h3>LOADING...</h3>}
            {weapons3 ? weapons3.map((weapon, index) => (
                <div className='singleitemcontainer'key={index}>
                    <h2 className='itemname'>{weapon.name}</h2>
                    <img className='itemimage'src={weapon.image} alt={weapon.name}/>
                    <h2 className='itemeffect'>{weapon.description.substring(0,125)}..</h2>
                </div>
            )) : <h3>LOADING...</h3>}
            {weapons4 ? weapons4.map((weapon, index) => (
                <div className='singleitemcontainer'key={index}>
                    <h2 className='itemname'>{weapon.name}</h2>
                    <img className='itemimage'src={weapon.image} alt={weapon.name}/>
                    <h2 className='itemeffect'>{weapon.description.substring(0,125)}..</h2>
                </div>
            )) : <h3>LOADING...</h3>}
            </div>
        </div>
    )
}

export default WeaponsList