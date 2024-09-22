import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Navibar = () => {
  return (
    <Navbar expand="lg" className="navbar-custom" variant="dark">
      <Container>
        {/* Logo and Brand */}
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <button className="ttbutton">Timor Tech</button>
        </Navbar.Brand>

        {/* Toggle for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Links in the Navbar */}
        <Navbar.Collapse id="basic-navbar-nav">
      

          {/* Right Side Links */}
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="#about-us" className="nav-link-custom">
              About Us
            </Nav.Link>
            <Nav.Link href="#our-values" className="nav-link-custom">
              Our Values
            </Nav.Link>
            <Nav.Link href="#our-products" className="nav-link-custom">
              Our Products
            </Nav.Link>
            <Button href="#contact-us" className="contact-button">
              Contact Us
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navibar;
