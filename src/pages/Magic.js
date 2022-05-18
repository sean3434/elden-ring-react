import React from 'react'
import { Link } from 'react-router-dom'
import './Magic.css'
// import video from '../Media/EldenNightGrace.mp4'

function Magic() {
    return (
        <div className='magic'>
            <div className='magiccontainer'>
                <Link to='/Magic/AshesOfWar'>
                    <h2>Ashes Of War</h2>
                </Link>
                <Link to='/Magic/Incantations'>
                    <h2>Incantations</h2>
                </Link>
                <Link to='/Magic/Sorceries'>
                    <h2>Sorceries</h2>
                </Link>
                <Link to='/Magic/Spirits'>
                    <h2>Spirits</h2>
                </Link>
            </div>
        </div>
    )
}

export default Magic