import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import "../styles/AboutUs.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const AboutUs = () => {
  return (
    <div className="about-section">
      <Container
        className="bg-light p-5 rounded mt-5 "
        style={{ fontFamily: "'Times New Roman', serif" }}
      >
        <Row className="align-items-center">
          {/* Left Column for Welcome and Description */}
          <Col md={6}>
            <h5
              className="text-uppercase text-muted mb-3"
              style={{ letterSpacing: "2px" }}
            >
              Welcome to
            </h5>
            <h1
              className="display-4 font-weight-bold text-dark btn-shine"
              style={{ fontFamily: "'Georgia', serif", fontWeight: "700" }}
            >
              Timor Tech
            </h1>
            <p
              className="lead text-muted mt-4"
            >
              At Timor Tech, we specialize in crafting high-quality, scalable
              software solutions. With a passion for technology and innovation,
              we transform ideas into reality for businesses around the globe.
            </p>
            <div className="mt-4">
              <Button
                variant="outline-dark btn-shine"
                href="#contact"
                className="me-3"
                style={{ padding: "10px 20px", borderRadius: "0" }}
              >
                Contact Us
              </Button>
              <Button
                variant="dark"
                href="#projects"
                style={{ padding: "10px 20px", borderRadius: "0" }}
              >
                View Our Projects
              </Button>
            </div>
          </Col>

          {/* Right Column for Additional Info or Image */}
          <Col md={6}>
            <img
              src="public/tech.png"
              alt="Timor Tech"
              className="img-fluid rounded shadow-sm"
              style={{ borderRadius: "15px" }}
            />
          </Col>
        </Row>

        {/* Additional Key Points About Timor Tech */}
        <Row className="mt-5">
          <Col md={4} className="text-center">
            <i className="bi bi-gear display-4 custom-icon mb-3"></i>
            <h5
              className="font-weight-bold text-muted"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Scalable Solutions
            </h5>
            <p
              className="text-muted"
              style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
            >
              We deliver software solutions that grow with your business.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <i className="bi bi-lightbulb display-4 custom-icon mb-3"></i>
            <h5
              className="font-weight-bold text-muted"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Innovative Ideas
            </h5>
            <p
              className="text-muted"
              style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
            >
              Creativity and technology drive our innovative products and
              services.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <i className="bi bi-people display-4 custom-icon mb-3"></i>
            <h5
              className="font-weight-bold text-muted"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Client-Centric Approach
            </h5>
            <p
              className="text-muted"
              style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
            >
              We work closely with our clients to ensure their needs are met.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
