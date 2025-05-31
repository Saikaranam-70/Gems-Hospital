import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import { Route, Router, Routes } from 'react-router-dom'
import Footer from './Footer/Footer'
import AboutUs from './AboutUs/AboutUs'
import Departments from './Departments/Departments'
import Doctors from './Doctors/Doctors'
import Contact from './Contact/Contact'
import BookAppointment from './BookAppointment/BookAppointment'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/departments' element={<Departments />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/appointment' element={<BookAppointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
