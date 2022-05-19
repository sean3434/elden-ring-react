import React from "react";
import { NavLink } from "react-router-dom";
import './nav.css'
import image from '../Media/eldenringtext.png'

const Navbar = () => {
	return (
		<div className="navbar">
			<img src={image} alt='Elden Ring'/>
			<NavLink to="/">
				<div className='navtext'>Home</div>
			</NavLink>
			<NavLink to="/Magic">
				<div className='navtext'>Magic</div>
			</NavLink>
            <NavLink to="/Gear">
				<div className='navtext'>Gear</div>
			</NavLink>
            <NavLink to="/Items">
				<div className='navtext'>Items</div>
			</NavLink>
            <NavLink to="/Talismans">
				<div className='navtext'>Talismans</div>
			</NavLink>
            <NavLink to="/World">
				<div className='navtext'>World</div>
			</NavLink>
		</div>
	)
}

export default Navbar
