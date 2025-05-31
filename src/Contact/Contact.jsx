import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-details">
        <div className="contact-info">
          <h2>Address</h2>
          <p>Gems Hospital,<br />
            123 Main Road,<br />
            Srikakulam, Andhra Pradesh, 532001
          </p>
          <h2>Phone</h2>
          <p>+91 98765 43210</p>
          <h2>Email</h2>
          <p>info@gemshospital.com</p>
        </div>
        <form className="contact-form">
          <h2>Send us a message</h2>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows={4} required />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;