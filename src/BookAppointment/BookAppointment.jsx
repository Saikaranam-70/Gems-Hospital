import React, { useState } from 'react';
import './BookAppointment.css';

const BookAppointment = () => {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    department: '',
    date: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const departments = [
    'GENERAL MEDICINE', 'CRITICAL CARE', 'IVF', 'CARDIOLOGY', 'CTVS', 'NEPHROLOGY',
    'MEDICAL ONCOLOGY', 'MEDICAL GASTENTEROLOGY', 'RADIATION ONCOLOGY', 'NEURO PHYSICIAN',
    'EMERGENCY MEDICINE', 'RADIOLOGY', 'RESPIRATORY MEDICINE', 'DVL', 'PSYCHIATRY',
    'GENERAL SURGERY', 'UROLOGY', 'NEURO SURGERY', 'PLASTIC SURGERY', 'SURGICAL ONCOLOGY',
    'ENDOCRINE SURGERY', 'SURGICAL GASTROENTEROLOGY', 'ORTHOPEDICS', 'OTO RINO LARYNGOLOGY(ENT)',
    'OPHTHALMOLOGY', 'DENTAL', 'OBSTETRICS & GYNAECOLOGY', 'PAEDIATRICS', 'ANAESTHESIA'
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can handle form submission (API call etc.)
  };

  return (
    <div className="appointment-container">
      <h1 className="appointment-title">Book an Appointment</h1>
      {submitted ? (
        <div className="appointment-success">
          <h2>Thank you!</h2>
          <p>Your appointment request has been submitted.</p>
        </div>
      ) : (
        <form className="appointment-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />
          <select
            name="department"
            value={form.department}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message (optional)"
            value={form.message}
            onChange={handleChange}
            rows={3}
          />
          <button type="submit">Book Appointment</button>
        </form>
      )}
    </div>
  );
};

export default BookAppointment;