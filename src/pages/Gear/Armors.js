import React, { useState, useEffect } from 'react'
import '../Gear.css'

function ArmorsList() {
    const [armors, setArmors] = useState(null)
    const [armors2, setArmors2] = useState(null)
    const [armors3, setArmors3] = useState(null)
    const [armors4, setArmors4] = useState(null)
    const [armors5, setArmors5] = useState(null)
    const [armors6, setArmors6] = useState(null)

    function getArmors() {
        fetch('https://eldenring.fanapis.com/api/armors?limit=100&page=0')
        .then((res) => res.json())
        .then((res) => setArmors(res.data))
    }

    function getArmors2() {
        fetch('https://eldenring.fanapis.com/api/armors?limit=100&page=1')
        .then((res) => res.json())
        .then((res) => setArmors2(res.data))
    }

    function getArmors3() {
        fetch('https://eldenring.fanapis.com/api/armors?limit=100&page=2')
        .then((res) => res.json())
        .then((res) => setArmors3(res.data))
    }

    function getArmors4() {
        fetch('https://eldenring.fanapis.com/api/armors?limit=100&page=3')
        .then((res) => res.json())
        .then((res) => setArmors4(res.data))
    }

    function getArmors5() {
        fetch('https://eldenring.fanapis.com/api/armors?limit=100&page=4')
        .then((res) => res.json())
        .then((res) => setArmors5(res.data))
    }

    function getArmors6() {
        fetch('https://eldenring.fanapis.com/api/armors?limit=100&page=5')
        .then((res) => res.json())
        .then((res) => setArmors6(res.data))
    }

    useEffect(() => {
        getArmors();
        getArmors2();
        getArmors3();
        getArmors4();
        getArmors5();
        getArmors6();
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
            {armors2 ? armors2.map((armor, index) => (
                <div className='singleitemcontainer'key={index}>
                    <h2 className='itemname'>{armor.name}</h2>
                    <img className='itemimage'src={armor.image} alt={armor.name}/>
                    <h2 className='itemeffect'>{armor.description.substring(0,125)}..</h2>
                </div>
            )) : <h3>LOADING...</h3>}
            {armors3 ? armors3.map((armor, index) => (
                <div className='singleitemcontainer'key={index}>
                    <h2 className='itemname'>{armor.name}</h2>
                    <img className='itemimage'src={armor.image} alt={armor.name}/>
                    <h2 className='itemeffect'>{armor.description}</h2>
                </div>
            )) : <h3>LOADING...</h3>}
            {armors4 ? armors4.map((armor, index) => (
                <div className='singleitemcontainer'key={index}>
                    <h2 className='itemname'>{armor.name}</h2>
                    <img className='itemimage'src={armor.image} alt={armor.name}/>
                    <h2 className='itemeffect'>{armor.description.substring(0,125)}..</h2>
                </div>
            )) : <h3>LOADING...</h3>}
            {armors5 ? armors5.map((armor, index) => (
                <div className='singleitemcontainer'key={index}>
                    <h2 className='itemname'>{armor.name}</h2>
                    <img className='itemimage'src={armor.image} alt={armor.name}/>
                    <h2 className='itemeffect'>{armor.description.substring(0,125)}..</h2>
                </div>
            )) : <h3>LOADING...</h3>}
            {armors6 ? armors6.map((armor, index) => (
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