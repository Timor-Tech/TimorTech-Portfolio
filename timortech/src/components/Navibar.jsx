import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles/Navibar.css";

const Navibar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="floating-navbar">
      <Container>
        <Navbar.Brand href="#home">Timor Tech</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-nav"> {/* Changed ml-auto to me-auto */}
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navibar;
