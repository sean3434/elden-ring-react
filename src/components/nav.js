import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'
import image from '../Media/eldenringtext.png'

const Navbar = () => {
	return (
		<div className="navbar">
			<img src={image} alt='Elden Ring'/>
			<Link to="/">
				<div className='navtext'>Home</div>
			</Link>
			<Link to="/Ashes">
				<div className='navtext'>Magic</div>
			</Link>
            <Link to="/Gear">
				<div className='navtext'>Gear</div>
			</Link>
            <Link to="/Items">
				<div className='navtext'>Items</div>
			</Link>
            <Link to="/Talismans">
				<div className='navtext'>Talismans</div>
			</Link>
            <Link to="/World">
				<div className='navtext'>World</div>
			</Link>
		</div>
	)
}

export default Navbar