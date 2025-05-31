import React from 'react';
import './Footer.css';
import { FaWhatsapp, FaPhoneAlt, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-brand">
        <span className="footer-logo">GEMS Hospital</span>
        <span className="footer-copy">&copy; {new Date().getFullYear()} All rights reserved.</span>
      </div>
      <nav className="footer-links">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/departments">Departments</a>
        <a href="/doctors">Doctors</a>
        <a href="/contact">Contact</a>
        <a href="/appointment">Book Appointment</a>
        <a href="/gallery">Gallery</a>
      </nav>
      <div className="footer-social">
        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="footer-icon whatsapp">
          <FaWhatsapp size={20} />
        </a>
        <a href="tel:+919876543210" className="footer-icon call">
          <FaPhoneAlt size={20} />
        </a>
        <a href="https://www.instagram.com/gemshospital" target="_blank" rel="noopener noreferrer" className="footer-icon instagram">
          <FaInstagram size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;