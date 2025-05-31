import React from 'react'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <div className="aboutus-header" data-aos="fade-down">
        <h1>About Us</h1>
        <hr />
      </div>
      <div className="aboutus-content" data-aos="fade-up" data-aos-delay="150">
        <p>
          <strong>GEMS Hospital</strong> has been serving the local populace with state-of-the-art facilities such as ICU, five fully equipped Operation Theatres, and specialists from every faculty available round the clock at highly subsidised rates.
        </p>
        <p>
          Our hospital is conceived, erected, and administered by a group mainly comprised of doctors with a vision to develop it into a world-class destination for healthcare and medical services.
        </p>
        <p>
          <strong>Our Mission:</strong> To provide affordable, high-quality healthcare to all sections of society, fostering compassion and excellence.
        </p>
        <p>
          <strong>Our Vision:</strong> To be a leader in healthcare, recognized for our commitment to patient care, innovation, and community service.
        </p>
        <ul className="aboutus-features" data-aos="fade-up" data-aos-delay="300">
          <li>24/7 Emergency & Trauma Care</li>
          <li>Modern ICU & Critical Care Units</li>
          <li>Five Advanced Operation Theatres</li>
          <li>Highly Qualified & Experienced Specialists</li>
          <li>Patient-Centric Approach</li>
          <li>Community Outreach & Health Camps</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutUs