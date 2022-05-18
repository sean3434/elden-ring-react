import React from 'react'
import { Link } from 'react-router-dom'
import './World.css'

function World() {
    return (
        <div className='world'>
            <div className='itemscontainer'>
                <Link to='/World/Bosses'>
                    <div className='singleitemcontainer'>
                        <h2 className='itemname' >Bosses</h2>
                        <img className='itemimage' src='https://goombastomp.com/wp-content/uploads/2022/03/fNyjvMw8evGHzbri3GWGRj-1200-80.jpg' alt='Bosses'/>
                        <h2 className='itemeffect' >Takes you to the Bosses Page</h2>
                    </div>
                </Link>
                <Link to='/World/Creatures'>
                    <div className='singleitemcontainer'>
                        <h2 className='itemname' >Creatures</h2>
                        <img className='itemimage' src='https://www.windowscentral.com/sites/wpcentral.com/files/styles/xlarge/public/field/image/2021/11/elden-ring-caravan.jpg' alt='Creatures'/>
                        <h2 className='itemeffect' >Takes you to the Creatures Page</h2>
                    </div>
                </Link>
                <Link to='/World/Locations'>
                    <div className='singleitemcontainer'>
                        <h2 className='itemname' >Locations</h2>
                        <img className='itemimage' src='https://gameranx.com/wp-content/uploads/2022/02/Elden-Ring-Screenshot-2022.02.25-15.17.22.71-1024x576.png' alt='Locations'/>
                        <h2 className='itemeffect' >Takes you to the Locations Page</h2>
                    </div>
                </Link>
                <Link to='/World/NPCs'>
                    <div className='singleitemcontainer'>
                        <h2 className='itemname' >NPCs</h2>
                        <img className='itemimage' src='https://i.ytimg.com/vi/0-ssEb4E7is/maxresdefault.jpg' alt='NPCs'/>
                        <h2 className='itemeffect' >Takes you to the NPCs Page</h2>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default World