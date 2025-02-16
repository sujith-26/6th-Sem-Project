import React from "react";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import "./Home.css"; // Import the CSS file

const HomePage = () => {
  return (
    <div>
      {/* Hero Carousel */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="garage1.jpg" alt="Garage Interior" />
          <Carousel.Caption>
            <h3>Reliable Auto Repairs</h3>
            <p>Quality service for all vehicle types.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="garage2.jpg" alt="Mechanic at Work" />
          <Carousel.Caption>
            <h3>Expert Mechanics</h3>
            <p>Certified professionals for your car.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="garage3.jpg" alt="Car Detailing" />
          <Carousel.Caption>
            <h3>Premium Car Detailing</h3>
            <p>Shine like new with our detailing services.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Services Section */}
      <Container className="my-5">
        <h2 className="text-center">Our Services</h2>
        <Row className="text-center">
          <Col md={4}>
            <img src="repair.jpg" alt="Repair" className="img-fluid rounded" />
            <h4>Repairs & Maintenance</h4>
            <p>Engine repair, oil change, tire rotation.</p>
          </Col>
          <Col md={4}>
            <img src="detailing.jpg" alt="Detailing" className="img-fluid rounded" />
            <h4>Car Detailing</h4>
            <p>Interior & exterior cleaning, polishing.</p>
          </Col>
          <Col md={4}>
            <img src="towing.jpg" alt="Towing" className="img-fluid rounded" />
            <h4>Towing Services</h4>
            <p>Emergency breakdown assistance.</p>
          </Col>
        </Row>
      </Container>

      {/* Testimonials Carousel */}
      <Container>
        <h2 className="text-center">What Our Customers Say</h2>
        <Carousel>
          <Carousel.Item>
            <p className="text-center">"Amazing service! My car runs like new!"</p>
            <h5 className="text-center">- John Doe</h5>
          </Carousel.Item>
          <Carousel.Item>
            <p className="text-center">"Highly skilled mechanics, quick turnaround!"</p>
            <h5 className="text-center">- Jane Smith</h5>
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* Contact & Booking */}
      <div className="text-center my-5">
        <Button variant="primary" size="lg">Book an Appointment</Button>
      </div>
    </div>
  );
};

export default HomePage;
