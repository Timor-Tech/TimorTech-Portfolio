import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/OurValues.css'; // Import your custom styles

const OurValues = () => {
  return (
    <Container className="our-values-section text-center">
      <h2>Our Core Values</h2>
      <Row>
        <Col xs={12} md={4} className="mb-4"> {/* Added mb-4 for bottom margin on all screen sizes */}
          <Card className="value-card">
            <Card.Body>
              <i className="bi bi-lightbulb-fill value-icon"></i> {/* Innovation Icon */}
              <Card.Title>Innovation</Card.Title>
              <Card.Text>We constantly innovate to provide cutting-edge solutions to complex problems.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="mb-4"> {/* Added mb-4 for bottom margin */}
          <Card className="value-card">
            <Card.Body>
              <i className="bi bi-shield-lock-fill value-icon"></i> {/* Integrity Icon */}
              <Card.Title>Integrity</Card.Title>
              <Card.Text>We value trust, transparency, and honesty in every aspect of our business.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="mb-4"> {/* Added mb-4 for bottom margin */}
          <Card className="value-card">
            <Card.Body>
              <i className="bi bi-people-fill value-icon"></i> {/* Collaboration Icon */}
              <Card.Title>Collaboration</Card.Title>
              <Card.Text>Our team works together seamlessly, turning visions into reality.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default OurValues;
