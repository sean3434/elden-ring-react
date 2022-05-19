import React, { useState, useEffect } from 'react'
import './Items.css'

function ItemsList() {
    const [items, setItems] = useState(null)
    const [items2, setItems2] = useState(null)
    const [items3, setItems3] = useState(null)
    const [items4, setItems4] = useState(null)
    const [items5, setItems5] = useState(null)


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

    function getItems3() {
        fetch('https://eldenring.fanapis.com/api/items?limit=100&page=2')
        .then((res) => res.json())
        .then((res) => setItems3(res.data))
    }

    function getItems4() {
        fetch('https://eldenring.fanapis.com/api/items?limit=100&page=3')
        .then((res) => res.json())
        .then((res) => setItems4(res.data))
    }

    function getItems5() {
        fetch('https://eldenring.fanapis.com/api/items?limit=100&page=4')
        .then((res) => res.json())
        .then((res) => setItems5(res.data))
    }

    useEffect(() => {
        getItems();
        getItems2()
        getItems3()
        getItems4()
        getItems5()
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
                {items3 ? items3.map((item, index) => (
                    <div className='singleitemcontainer'key={index}>
                        <h2 className='itemname'>{item.name}</h2>
                        <img className='itemimage'src={item.image} alt={item.name}/>
                        <h2 className='itemeffect'>{item.effect}</h2>
                    </div>
                )) : <h3>LOADING...</h3>}
                {items4 ? items4.map((item, index) => (
                    <div className='singleitemcontainer'key={index}>
                        <h2 className='itemname'>{item.name}</h2>
                        <img className='itemimage'src={item.image} alt={item.name}/>
                        <h2 className='itemeffect'>{item.effect}</h2>
                    </div>
                )) : <h3>LOADING...</h3>}
                {items5 ? items5.map((item, index) => (
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