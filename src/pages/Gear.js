import React from 'react'
import { Link } from 'react-router-dom'

function Gear() {
    return (
        <div>
            <Link to='/Gear/Ammos'>
                <h2>Ammos</h2>
            </Link>
            <Link to='/Gear/Armors'>
                <h2>Armors</h2>
            </Link>
            <Link to='/Gear/Shields'>
                 <h2>Shields</h2>
            </Link>
            <Link to='/Gear/Weapons'>
                <h2>Weapons</h2>
            </Link>
        </div>
    )
}

export default Gear