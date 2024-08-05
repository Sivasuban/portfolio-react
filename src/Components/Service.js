import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Importing the icon
import './Service.css';
import Footer from './Footer';
import img2 from "../asset/img2.jpg";
import img3 from "../asset/img3.jpg";

export const Service = () => {
  return (
    <div className='container-fluid hg'>
      <h1 className='text-center txt'>Project</h1>
      <div className='lg2'>
        <div className='d-flex container justify-content-center align-items-center p-5'>
          <div className='row  g-5'>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
              <Card className='style1'>
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                  <Card.Title>Registration Form</Card.Title>
                  <Card.Text>
                    It is a user-friendly form, easy to understand, easy to fill out, and easy to submit.
                  </Card.Text>
                  <Button variant="primary">
                    <a href="https://task1-omega-eight.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                      Open Form <FaExternalLinkAlt style={{ marginLeft: '5px' }} /> {/* Icon added here */}
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
              <Card className='style1'>
                <Card.Img variant="top" src={img3} />
                <Card.Body>
                  <Card.Title>Website</Card.Title>
                  <Card.Text>User collaborated with product owners, understanding their needs, and created a website.                  
                  </Card.Text>
                  <h5 className='text-success'>Completed</h5>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className='footr'>
        <Footer />
      </div>
    </div>
  );
};
