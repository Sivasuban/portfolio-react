import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import MirroredBackground from './Bg';
import { Service } from './Service';
import Skills from './Skills';
import './Navbar.css';
import resume from '../asset/Suban_Resume_Updated___.pdf';
import Certificates from './Certificates';

function BasicExample() {
  return (
    <>
      <BrowserRouter>
        <Navbar expand="lg" className="sticky-top Navbar d-flex container-fluid">
          <Container>
            <Navbar.Brand href="/" className="custom-icon">
              S
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link as={NavLink} to="/" className='li' activeClassName="active">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/skills" className='li' activeClassName="active">Skills</Nav.Link>
                <Nav.Link as={NavLink} to="/certificates" className='li' activeClassName="active">Certificates</Nav.Link>
                <Nav.Link as={NavLink} to="/project" className='li' activeClassName="active">Project</Nav.Link>
                <Nav.Link as="a" href={resume} target="_blank" rel="noopener noreferrer" className='li1'>Resume</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<MirroredBackground />} />
          <Route path="/project" element={<Service />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certificates" element={<Certificates/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default BasicExample;
