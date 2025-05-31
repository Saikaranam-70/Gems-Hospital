import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  }

  return (
    <div className='navbar'>
      <div className="logo">
        <Link to='/'>
        <img src={logo} className='img' alt="Logo" />
        </Link>
      </div>
      <div className="details">
        <div className="input">
          <input type="text" className='input-field' placeholder="Search..." />
        </div>
        <div className="menu">
          <button onClick={toggleMenu} className="menu-button">
            Menu
          </button>

          {menuOpen && (
            <div className="menu-dropdown">
              <ul>
                <Link to='/'>
                <li>Home</li>
                </Link>
                
                <Link to='/about'>
                <li>About Us</li>
                </Link>
                <Link to='/departments'>
                <li>Departments</li>
                </Link>
                <Link to='/doctors'>
                <li>Doctors</li>
                </Link>
                <Link to='/contact'>
                <li>Contact Us</li>
                </Link>
                
                <Link to='/appointment'>
                <li>Book Appointment</li>
                </Link>
                
                <li>Gallery</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar;
