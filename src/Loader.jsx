import React from 'react'
import logo from './assets/logo.png'
import './Loader.css'

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <img src={logo} alt="Loading..." className="loader-svg" />
    </div>
  )
}

export default Loader
