import React from 'react';
import saddlehut_icon from '../../assets/img/Saddlehut_icon.svg'
import saddlehut_logo from '../../assets/img/Saddlehut_logo.svg'
import './navbar.css';

function Navbar() {
    return (
        <div className="container">
            <div className="logo">
                <img src={saddlehut_icon} alt="" />
                <img src={saddlehut_logo}alt="" />
            </div>
            <nav>
                <p>About</p>
                <p>Tech Stack</p>
                <p>Creator</p>
            </nav>
        </div>
    )
}



export default Navbar;