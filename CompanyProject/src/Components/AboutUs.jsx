import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-banner">
        <h1>About Friends Car Care</h1>
        <p>Your Trusted Partner for Reliable Auto Services</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Who We Are</h2>
          <p>
            At <strong>Friends Car Care</strong>, we are dedicated to providing high-quality auto repair and maintenance services.
            With years of experience in the industry, our team of expert mechanics ensures that your vehicle gets the best care possible.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is simple: To offer **affordable, reliable, and expert** car care services that keep your vehicle running
            smoothly. Whether it’s regular maintenance, detailing, or emergency repairs, we’re here to serve you.
          </p>
        </section>

        <section className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Skilled & Certified Mechanics</li>
            <li>Affordable & Transparent Pricing</li>
            <li>Modern Equipment & Technology</li>
            <li>Quick & Reliable Services</li>
            <li>Customer Satisfaction Guaranteed</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Visit Us Today</h2>
          <p>
            Experience the best in auto care with Friends Car Care Book an appointment today and let our experts take care of your vehicle.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
