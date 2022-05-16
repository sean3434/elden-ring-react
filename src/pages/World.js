import React from 'react'
import { Link } from 'react-router-dom'

function World() {
    return (
        <div>
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
    )
}

export default World