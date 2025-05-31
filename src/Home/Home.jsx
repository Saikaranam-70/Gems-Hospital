import React from 'react';
import './Home.css'; // Make sure to create this file
import background from '../assets/Hospital1.jpg'; // Replace with your image path
import Services from '../Services/Services';
import Facilities from '../Fecilities/Facilities';
import Location from '../Location/Location';

const Home = () => {
  return (
    <>
    <div className="home-container" >
      <div className="overlay">
        <h1>Welcome to Our GEMS Hospital</h1>
        <p>Get expert consultation from our top doctors</p>
        <button className="book-button">Book Now</button>
      </div>
    </div>
    <Services />
    <Facilities />
    <Location />
    </>
  );
};

export default Home;
