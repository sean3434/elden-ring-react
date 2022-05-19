import React from "react";
import './footer.css'
import image from '../Media/zlinkedinlogo.png'
import image2 from '../Media/zgithub.png'

const Footer = () => {
	return (
		<div className="footer">
			<a href='https://www.linkedin.com/in/sean-ortiz1/'> <img className='linkedin' src={image} alt='LinkedIn'/></a>
			<a href='https://github.com/sean3434'> <img className='github' src={image2} alt='Github'/></a>
            <div className='footerbottomtext'> Copyright © 2022  Sean Ortiz</div>
		</div>
	)
}

export default Footer