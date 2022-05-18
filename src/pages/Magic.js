import React from 'react'
import { Link } from 'react-router-dom'
import './Magic.css'
// import video from '../Media/EldenNightGrace.mp4'

function Magic() {
    return (
        <div className='magic'>
            <div className='itemscontainer'>
                <Link to='/Magic/AshesOfWar'>
                    <div className='singleitemcontainer'>
                        <h2 className='itemname' >Ashes Of War</h2>
                        <img className='itemimage' src='https://cdn.gamerjournalist.com/primary/2022/03/How-to-Use-Ashes-of-War-in-Elden-Ring.jpg' alt='Ashes Of War'/>
                        <h2 className='itemeffect' >Takes you to the Ashes Of War Page</h2>
                    </div>
                </Link>
                <Link to='/Magic/Incantations'>
                    <div className='singleitemcontainer'>
                        <h2 className='itemname' >Incantations</h2>
                        <img className='itemimage' src='https://assets.gamepur.com/wp-content/uploads/2022/03/04094231/Elden-Ring-Collapsing-Stars.jpg' alt='Incantations'/>
                        <h2 className='itemeffect' >Takes you to the Incantations Page</h2>
                    </div>
                </Link>
                <Link to='/Magic/Sorceries'>
                    <div className='singleitemcontainer'>
                        <h2 className='itemname' >Sorceries</h2>
                        <img className='itemimage' src='https://ftw.usatoday.com/wp-content/uploads/sites/90/2022/03/elden-ring-comet-azur-location-ftw-glhf-1.jpg?w=1000&h=598&crop=1' alt='Sorceries'/>
                        <h2 className='itemeffect' >Takes you to the Sorceries Page</h2>
                    </div>
                </Link>
                <Link to='/Magic/Spirits'>
                    <div className='singleitemcontainer'>
                        <h2 className='itemname' >Spirits</h2>
                        <img className='itemimage' src='https://assets2.rockpapershotgun.com/elden-ring-spirit-ashes.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/elden-ring-spirit-ashes.jpg' alt='Spirits'/>
                        <h2 className='itemeffect' >Takes you to the Spirits Page</h2>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Magic