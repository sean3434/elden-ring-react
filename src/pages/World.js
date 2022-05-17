import React from 'react'
import { Link } from 'react-router-dom'
import './World.css'

function World() {
    return (
        <div className='world'>
            <div className='worldcontainer'>
                <Link to='/World/Bosses'>
                    <h2>Bosses</h2>
                </Link>
                <Link to='/World/Creatures'>
                    <h2>Creatures</h2>
                </Link>
                <Link to='/World/Locations'>
                    <h2>Locations</h2>
                </Link>
                <Link to='/World/NPCs'>
                    <h2>NPCs</h2>
                </Link>
            </div>
        </div>
    )
}

export default World