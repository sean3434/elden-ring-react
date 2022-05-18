import React from 'react'
import { Link } from 'react-router-dom'
import './Gear.css'

function Gear() {
    return (
        <div className='gear'>
            <div className='itemscontainer'>
                <Link to='/Gear/Ammos'>
                    <div className='singleitemcontainer'>
                        <h2 className='itemname' >Ammos</h2>
                        <img className='itemimage' src='https://d30xqvs6b65d10.cloudfront.net/wp-content/uploads/2022/02/Elden-Ring-ranged-weapons-bows-crossbows-ammo-.jpg' alt='Ammos'/>
                        <h2 className='itemeffect' >Takes you to the Ammos Page</h2>
                    </div>
                </Link>
                <Link to='/Gear/Armors'>
                    <div className='singleitemcontainer'>
                        <h2 className='itemname' >Armors</h2>
                        <img className='itemimage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq1Mi4utye8lERJssVHYfMKDkrzWkRozRL4g&usqp=CAU' alt='Armors'/>
                        <h2 className='itemeffect' >Takes you to the Armors Page</h2>
                    </div>
                </Link>
                <Link to='/Gear/Shields'>
                    <div className='singleitemcontainer'>
                        <h2 className='itemname' >Shields</h2>
                        <img className='itemimage' src='https://www.windowscentral.com/sites/wpcentral.com/files/styles/xlarge/public/field/image/2022/03/elden-ring-shield-hero.jpg' alt='Shields'/>
                        <h2 className='itemeffect' >Takes you to the Shields Page</h2>
                    </div>
                </Link>
                <Link to='/Gear/Weapons'>
                    <div className='singleitemcontainer'>
                        <h2 className='itemname' >Weapons</h2>
                        <img className='itemimage' src='https://i.ytimg.com/vi/4CeVCOy6b1g/maxresdefault.jpg' alt='Weapons'/>
                        <h2 className='itemeffect' >Takes you to the Weapons Page</h2>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Gear