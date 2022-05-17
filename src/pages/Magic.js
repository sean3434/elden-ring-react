import React from 'react'
import { Link } from 'react-router-dom'
import './Magic.css'
// import video from '../Media/EldenNightGrace.mp4'

function Ashes() {
    return (
        <div className='magic'>
            <div className='magiccontainer'>
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
        </div>
    )
}

export default Ashes