import React, { useState, useEffect } from 'react'
import './Items.css'

function ItemsList() {
    const [items, setItems] = useState(null)
    const [items2, setItems2] = useState(null)


    function getItems() {
        fetch('https://eldenring.fanapis.com/api/items?limit=100&page=0')
        .then((res) => res.json())
        .then((res) => setItems(res.data))
    }

    function getItems2() {
        fetch('https://eldenring.fanapis.com/api/items?limit=100&page=1')
        .then((res) => res.json())
        .then((res) => setItems2(res.data))
    }

    useEffect(() => {
        getItems();
        getItems2()
    }, [])

// console.log(items);

    return (
        <div className='items'>
            <div className='itemscontainer'>
                {items ? items.map((item, index) => (
                    <div className='singleitemcontainer'key={index}>
                        <h2 className='itemname'>{item.name}</h2>
                        <img className='itemimage'src={item.image} alt={item.name}/>
                        <h2 className='itemeffect'>{item.effect}</h2>
                    </div>
                )) : <h3>LOADING...</h3>}
                {items2 ? items2.map((item, index) => (
                    <div className='singleitemcontainer'key={index}>
                        <h2 className='itemname'>{item.name}</h2>
                        <img className='itemimage'src={item.image} alt={item.name}/>
                        <h2 className='itemeffect'>{item.effect}</h2>
                    </div>
                )) : <h3>LOADING...</h3>}
            </div>
        </div>
    )
}

export default ItemsList