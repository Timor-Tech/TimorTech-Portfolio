import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const ContactUs = () => {
  return (
    <Container className="bg-light text-dark p-5 rounded mt-5" style={{ fontFamily: "'Georgia', serif" }}>
      <Row className="align-items-center">
        {/* Left Column for Text and Buttons */}
        <Col md={6}>
          <h5 className="text-uppercase text-muted mb-2" style={{ letterSpacing: '2px' }}>Lets Get In Touch</h5>
          <h1 className="display-4 font-weight-bold" style={{ fontFamily: "'Georgia', serif" }}>Contact Us</h1>
          <div className="mt-4">
            <Button
              variant="outline-dark"
              href="mailto:thetimortech@gmail.com"
              className="me-3 mb-2"
              style={{ padding: '10px 30px', borderRadius: '0', fontFamily: "'Helvetica Neue', sans-serif" }}
            >
              <i className="bi bi-envelope"></i> Email
            </Button>
            <Button
              variant="outline-dark"
              href="https://github.com/Timor-Tech"
              className="mb-2"
              style={{ padding: '10px 30px', borderRadius: '0', fontFamily: "'Helvetica Neue', sans-serif" }}
            >
              <i className="bi bi-github"></i> GitHub
            </Button>
          </div>
        </Col>

        {/* Right Column for the Image */}
        {/* <Col md={6}>
          <img
            src="public/contactus.png"
            alt="Contact Us"
            className="img-fluid rounded shadow-sm"
            style={{ borderRadius: '10px' }}
          />
        </Col> */}
      </Row>
    </Container>
  );
};

export default ContactUs;
