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
        <img src={logo} className='img' alt="Logo" />
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
                <li>Home</li>
                <Link to='/about'>
                <li>About Us</li>
                </Link>
                <li>Departments</li>
                <li>Doctors</li>
                <li>Contact Us</li>
                <li>Book Appointment</li>
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
