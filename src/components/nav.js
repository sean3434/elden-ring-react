import React from "react"
import { Link } from "react-router-dom"

const Nav = (props) => {
	return (
		<div className="nav">
			<Link to="/">
				<div>Home</div>
			</Link>
			<Link to="/Ashes">
				<div>Ashes</div>
			</Link>
            <Link to="/Gear">
				<div>Gear</div>
			</Link>
            <Link to="/Items">
				<div>Items</div>
			</Link>
            <Link to="/Talismans">
				<div>Talismans</div>
			</Link>
            <Link to="/World">
				<div>World</div>
			</Link>
		</div>
	)
}

export default Nav