import React, { useState, useEffect } from 'react'

function ItemsList() {
    const [items, setItems] = useState(null)

    function getItems() {
        fetch('https://eldenring.fanapis.com/api/items?limit=100')
        .then((res) => res.json())
        .then((res) => setItems(res.data))
    }

    useEffect(() => {
        getItems();
    }, [])

console.log(items);

    return (
        <>
            {items ? items.map((item, index) => (
                <div key={index}>
                    <h2>{item.name}</h2>
            </div>
            )) : <h3>LOADING...</h3>}
        </>
    )
}

export default ItemsList