import React from 'react'
import './Home.css'
import { Link } from "react-router-dom";
// import video from '../Media/EldenNightGrace.mp4'

function Home() {
    return (
        <div className='home'>
            <div className='itemscontainer'>
                <Link to='/Magic'>
                    <div className='singleitemcontainer'>
                        <h2 className='itemname' >Magic</h2>
                        <img className='itemimage' src='https://d23gn3985hkc32.cloudfront.net/wp-content/uploads/2022/03/Elden-Ring-arrow-sorcery-screenshot.jpg' alt='Magic'/>
                        <h2 className='itemeffect' >Takes you to the Magic Page</h2>
                    </div>
                </Link>
                <Link to='/Gear'>
                    <div className='singleitemcontainer'>
                        <h2 className='itemname' >Gear</h2>
                        <img className='itemimage' src='https://www.theloadout.com/wp-content/uploads/2022/02/elden-ring-tips-900x506.jpeg' alt='Gear'/>
                        <h2 className='itemeffect' >Takes you to the Gear Page</h2>
                    </div>
                </Link>
                <Link to='/Items'>
                    <div className='singleitemcontainer'>
                        <h2 className='itemname' >Items</h2>
                        <img className='itemimage' src='https://cdn.mos.cms.futurecdn.net/Rgvoh6dyCGcBgNVhvZtf3R.jpg' alt='Items'/>
                        <h2 className='itemeffect' >Takes you to the Items Page</h2>
                    </div>
                </Link>
                <Link to='/Talismans'>
                    <div className='singleitemcontainer'>
                        <h2 className='itemname' >Talismans</h2>
                        <img className='itemimage' src='https://d1fs8ljxwyzba6.cloudfront.net/assets/article/2022/03/17/best-elden-ring-talismans_feature.jpg' alt='Talismans'/>
                        <h2 className='itemeffect' >Takes you to the Talismans Page</h2>
                    </div>
                </Link>
                <Link to='/World'>
                    <div className='singleitemcontainer'>
                        <h2 className='itemname' >World</h2>
                        <img className='itemimage' src='https://twinfinite.net/wp-content/uploads/2022/03/Elden-Ring-Rykard-2.jpg' alt='World'/>
                        <h2 className='itemeffect' >Takes you to the World Page</h2>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Home