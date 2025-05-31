import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import { Route, Router, Routes } from 'react-router-dom'
import Footer from './Footer/Footer'
import AboutUs from './AboutUs/AboutUs'
import Departments from './Departments/Departments'
import Doctors from './Doctors/Doctors'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/departments' element={<Departments />} />
        <Route path='/doctors' element={<Doctors />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
