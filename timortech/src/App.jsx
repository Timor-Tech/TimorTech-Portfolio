import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import AboutUs from './components/AboutUs';
import Project from './components/Project';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './App.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navibar from './components/Navibar';

function App() {
  return (
    <div>
      <Navibar />

      <div id="about">
        <AboutUs />
      </div>

      <div id="projects">
        <Project />
      </div>

      <div id="contact">
        <ContactUs />
      </div>

      <Footer />
    </div>
  );
}

export default App;
