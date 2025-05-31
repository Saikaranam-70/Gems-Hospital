import React from 'react';
import './Location.css';
import { FaWhatsapp, FaPhoneAlt, FaInstagram } from 'react-icons/fa';

const Location = () => {
  return (
    <div className="location-container">
      <div className="location-heading" data-aos="fade-down">
        <h1>Location</h1>
        <hr />
      </div>
      <div className="location">
        <div className="address-box" data-aos="fade-right">
          <h2>Our Address</h2>
          <p>GEMS Hospital</p>
          <p>Ragolu, NH-16, Srikakulam</p>
          <p>Andhra Pradesh - 532484</p>
          <p>Phone: +91 98765 43210</p>
          <p>Email: contact@gemshospital.com</p>

          <div className="social-icons">
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="icon whatsapp">
              <FaWhatsapp size={24} />
            </a>
            <a href="tel:+919876543210" className="icon call">
              <FaPhoneAlt size={24} />
            </a>
            <a href="https://www.instagram.com/gemshospital" target="_blank" rel="noopener noreferrer" className="icon instagram">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        <div className="map-box" data-aos="fade-left" data-aos-delay="200">
          <iframe
            title="GEMS Hospital Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5902.9832721192415!2d83.89973654044577!3d18.353461484990888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c6ac250b7df1d%3A0x998ac901db4a0024!2sGreat%20Eastern%20Medical%20School%20%26%20Hospital%2C%20Ragolupeta%2C%20Andhra%20Pradesh%20532484!5e1!3m2!1sen!2sin!4v1748677876620!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Location;