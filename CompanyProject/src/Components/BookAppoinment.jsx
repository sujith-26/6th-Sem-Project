import React, { useState } from "react";
import "./BookingPage.css";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    vehicle: "",
    service: "Repair & Maintenance",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Request Submitted Successfully!");
    console.log(formData);
    setFormData({
      name: "",
      contact: "",
      vehicle: "",
      service: "Repair & Maintenance",
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <div className="booking-container">
      <h2>Book a Service</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Contact Number</label>
          <input type="tel" name="contact" value={formData.contact} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Vehicle Model</label>
          <input type="text" name="vehicle" value={formData.vehicle} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Service Type</label>
          <select name="service" value={formData.service} onChange={handleChange}>
            <option value="Repair & Maintenance">Repair & Maintenance</option>
            <option value="Car Detailing">Car Detailing</option>
            <option value="Towing Service">Towing Service</option>
          </select>
        </div>

        <div className="form-group">
          <label>Preferred Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Preferred Time</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Additional Requests</label>
          <textarea name="message" value={formData.message} onChange={handleChange} rows="3"></textarea>
        </div>

        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
};

export default BookingPage;
