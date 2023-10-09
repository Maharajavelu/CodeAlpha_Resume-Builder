import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'
import logo from './assests/logo.png'

function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar-logo">
            <img src={logo} alt="" />
            <span>Find ME</span>
        </div>
        <ul className='navbar-menu'>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/blog">Blog</Link></li>
            <li><Link to = "/contact">Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar