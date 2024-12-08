import React from 'react'
import './NavbarModified.css'


const NavbarModified = ({NavbarHeading}) => {


    
    return (
        <div className='navbarModified'>
            <div className="navbarWrapper">
                <img className='cartifyLogo' src="cartifyLogo.png" alt="" />
                <h1>{NavbarHeading}</h1>
            </div>
        </div>
    )
}

export default NavbarModified