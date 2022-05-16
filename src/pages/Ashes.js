import React from 'react'
import { Link } from 'react-router-dom'

function Ashes() {
    return (
        <div>
            <Link to='/Ashes/AshesOfWar'>
                <h2>Ashes Of War</h2>
            </Link>
            <Link to='/Ashes/Incantations'>
                <h2>Incantations</h2>
            </Link>
            <Link to='/Ashes/Sorceries'>
                <h2>Sorceries</h2>
            </Link>
            <Link to='/Ashes/Spirits'>
                <h2>Spirits</h2>
            </Link>
        </div>
    )
}

export default Ashes