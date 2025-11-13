import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import resume from '../asset/My_Update_Resume.pdf';

function BasicExample() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavClick = () => {
    setExpanded(false);
  };

  // Smooth scroll to sections
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      handleNavClick();
    }
  };

  return (
    <Navbar expand="lg" className="sticky-top Navbar d-flex container-fluid" expanded={expanded}>
      <Container>
        <Navbar.Brand href="./" className="custom-icon">S</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home" className="li" onClick={() => scrollToSection('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className="li" onClick={() => scrollToSection('skills')}>Skills</Nav.Link>
            <Nav.Link href="#certificates" className="li" onClick={() => scrollToSection('certificates')}>Certificates</Nav.Link>
            <Nav.Link href="#projects" className="li" onClick={() => scrollToSection('projects')}>Projects</Nav.Link>
            <Nav.Link
              as="a"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="li1"
              onClick={handleNavClick}
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
