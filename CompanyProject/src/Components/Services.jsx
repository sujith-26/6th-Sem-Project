import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "🔧 Car Repairs",
      description: "Expert repairs for engines, brakes, transmissions, and more.",
      image: "repair.jpg",
    },
    {
      title: "🛠 Preventive Maintenance",
      description: "Regular servicing to keep your car in top condition.",
      image: "maintenance.jpg",
    },
    {
      title: "🚗 Car Detailing",
      description: "Interior and exterior detailing for a showroom finish.",
      image: "detailing.jpg",
    },
    {
      title: "🛞 Tire & Wheel Services",
      description: "Wheel alignment, balancing, and tire replacement.",
      image: "tires.jpg",
    },
    {
      title: "⚡ Battery & Electrical Repairs",
      description: "Battery replacement and electrical system diagnostics.",
      image: "battery.jpg",
    },
    {
      title: "🚙 Towing Services",
      description: "24/7 roadside assistance and towing for breakdowns.",
      image: "towing.jpg",
    },
  ];

  return (
    <div className="services-container">
      <div className="services-banner">
        <h1>Our Services</h1>
        <p>Reliable and professional auto services for your vehicle.</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
