import React from 'react';
import './Facilities.css'; // External CSS
import Facility1 from '../assets/Fecilities/Facility1.png'
import Facility2 from '../assets/Fecilities/Facility2.png'
import Facility3 from '../assets/Fecilities/Facility3.png'
import Facility4 from '../assets/Fecilities/Facility4.png'

const Facilities = () => {
  const facilities = [
    {
      name: '24x7 ICU',
      image: Facility1,
      desc: 'Round-the-clock intensive care units for critical patients.'
    },
    {
      name: 'Pharmacy',
      image: Facility3,
      desc: 'In-house pharmacy with all essential and emergency medicines.'
    },
    {
      name: 'Ambulance',
      image: Facility2,
      desc: 'Well-equipped ambulances available for emergency transport.'
    },
    {
      name: 'Operation Theatre',
      image: Facility4,
      desc: 'Advanced and sterile operation theatres for all surgical needs.'
    }
  ];
  return (
    <div className="facilities-container">
      <div className="head" data-aos="fade-down">
        <h1>FACILITIES</h1>
        <hr />
      </div>
      <div className="facilities">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="facility"
            data-aos="zoom-in"
            data-aos-delay={index * 120}
          >
            <img src={facility.image} className='image' alt={facility.name} />
            <h3 className="name">{facility.name}</h3>
            <p className="desc">{facility.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;