import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import { Route, Router, Routes } from 'react-router-dom'
import Footer from './Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
