import React, { useEffect } from 'react';
import './Home.css';
import background from '../assets/Hospital1.jpg';
import Services from '../Services/Services';
import Facilities from '../Fecilities/Facilities';
import Location from '../Location/Location';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <>
      <div className="home-container" data-aos="fade-in">
        <div className="overlay" >
          <h1>Welcome to Our GEMS Hospital</h1>
          <p>Get expert consultation from our top doctors</p>
          <button className="book-button" data-aos="fade-up">Book Now</button>
        </div>
      </div>
      <div data-aos="fade-up">
        <Services />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <Facilities />
      </div>
      <div data-aos="fade-up" data-aos-delay="400">
        <Location />
      </div>
    </>
  );
};

export default Home;