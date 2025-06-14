import React from 'react';
import './Services.css';  // Import external CSS
import cardiology from '../assets/cardiology.jpg'
import radiology from '../assets/radiology.png'
import neprology from '../assets/image.png'
import { Link } from 'react-router-dom';

const services = [
  {
    name: 'Cardiology',
    image: cardiology,  // Heart icon
    desc: 'Specialized care for heart conditions and cardiac treatments.'
  },
  {
    name: 'Radiology',
    image: radiology,  // X-ray icon
    desc: 'Advanced imaging and diagnostic services using X-rays, MRI, and CT scans.'
  },
  {
    name: 'NEPHROLOGY',
    image: neprology,  // Ambulance icon
    desc: '24/7 emergency care for urgent and life-threatening conditions.'
  }
];

const Services = () => {
  return (
    <div className="services-container">
      <div className="head" data-aos="fade-down">
        <h1>SERVICES</h1>
        <hr />
      </div>
      <div className="services">
        {services.map((service, index) => (
          <div
            key={index}
            className="service"
            data-aos="zoom-in"
            data-aos-delay={index * 120}
          >
            <img src={service.image} className='image' alt={service.name} />
            <h3 className="name">{service.name}</h3>
            <p className="desc">{service.desc}</p>
          </div>
        ))}
      </div>
      <Link to='/departments'>
      <button className="show-more-btn" data-aos="fade-up" data-aos-delay="400">Show More</button>
      </Link>
    </div>
  );
};

export default Services;