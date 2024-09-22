import React from "react";
import { Container } from "react-bootstrap";
import AboutUs from "./components/AboutUs";
import Project from "./components/Project";
import ContactUs from "./components/ContactUs";
import "./App.css"; // Custom CSS for styling
import Navibar from "./components/Navibar";

// Bootstrap 
import "bootstrap/dist/css/bootstrap.min.css";

//React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const App = () => {
  return (
    <div>
      {/* Navigation bar */}
      <Navibar />

      {/* Main Content Container */}
      <Container className="main-container my-5">
        {/* About Us Section */}
        <section id="about">
          <AboutUs />
        </section>

        {/* Projects Section */}
        <section id="projects" className="my-5">
          <Project />
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="my-5">
          <ContactUs />
        </section>
      </Container>
    </div>
  );
};

export default App;
