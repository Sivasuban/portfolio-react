import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Importing the icon
import './Service.css';
import img2 from "../asset/img2.jpg";
import img3 from "../asset/img3.jpg";
import img4 from "../asset/img4.jpg";
import img5 from "../asset/img5.jpg";
import img6 from "../asset/img6.jpg";
import img7 from "../asset/img7.jpg";
import img8 from "../asset/img8.png";
import img9 from "../asset/img9.png";
import img10 from "../asset/img10.png";
import img11 from "../asset/img11.png";
import img12 from "../asset/img12.png";

export const Service = () => {
  return (
    <div className='container-fluid hg pb-5'>
      <h1 className='text-center txt'>Projects</h1>
      <div className='lg2'>
        <div className='d-flex   container p-5'>
          <div className='row  align-items-center g-5 '>
            <div className='col-12 col-sm-12 col-md-6 col-lg-4 '>
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
            <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
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
             <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
              <Card className='style1'>
                <Card.Img variant="top" src={img4} />
                <Card.Body>
                  <Card.Title>Factorial</Card.Title>
                  <Card.Text>used in permutations, combinations, and mathematics including algebra and calculus.                 
                  </Card.Text>
                  
                  <Button variant="primary">
                    <a href="https://factorial-tawny.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                      Open  <FaExternalLinkAlt style={{ marginLeft: '5px' }} /> {/* Icon added here */}
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
              <Card className='style1'>
                <Card.Img variant="top" src={img5} />
                <Card.Body>
                  <Card.Title>CRUD</Card.Title>
                  <Card.Text>Create, Read, Update, and Delete .I can create a PHP application coupled with a MySQL database to perform these operations.                  
                  </Card.Text>
                  <h5 className='text-success'>Completed</h5>
                </Card.Body>
              </Card>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
              <Card className='style1'>
                <Card.Img variant="top" src={img6} />
                <Card.Body>
                  <Card.Title>Check Weather</Card.Title>
                  <Card.Text>
                  stay informed about weather conditions and make better decisions based on that information.
                  </Card.Text>
                  <Button variant="primary">
                    <a href="https://weather-build.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                      check <FaExternalLinkAlt style={{ marginLeft: '5px' }} /> {/* Icon added here */}
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
              <Card className='style1'>
                <Card.Img variant="top" src={img7} />
                <Card.Body>
                  <Card.Title>Axios</Card.Title>
                  <Card.Text>
                  Axios is a  promise-based HTTP library that lets developers make requests to either their own server or a third-party server to fetch data                  </Card.Text>
                  <h5 className='text-success'>Completed</h5>
                </Card.Body>
              </Card>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
              <Card className='style1'>
                <Card.Img variant="top" src={img8} />
                <Card.Body>
                  <Card.Title>Addis Medical</Card.Title>
                  <Card.Text>
                  I created Addis Medicals, a trusted online platform providing quality healthcare products and reliable medical services with care and innovation.                  </Card.Text>
                  <Button variant="primary">
                    <a href="https://addismedicals.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                      Visit Us <FaExternalLinkAlt style={{ marginLeft: '5px' }} /> {/* Icon added here */}
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
              <Card className='style1'>
                <Card.Img variant="top" src={img9} />
                <Card.Body>
                  <Card.Title>Thulasi Resort</Card.Title>
                  <Card.Text>
                  Designed and developed the Thulasi Resort website — blending elegance, performance, and responsive design to create a seamless user experience.                  </Card.Text>
                  <Button variant="primary">
                    <a href="https://www.thulasiresort.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                      Visit Us <FaExternalLinkAlt style={{ marginLeft: '5px' }} /> {/* Icon added here */}
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
              <Card className='style1'>
                <Card.Img variant="top" src={img10} />
                <Card.Body>
                  <Card.Title>PK-Agencies INDIAN OIL</Card.Title>
                  <Card.Text>
                  Built the PK Agencies website to highlight their products and services with clarity and style.                  </Card.Text>
                  <Button variant="primary">
                    <a href="https://www.pk-groups.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                      Visit Us <FaExternalLinkAlt style={{ marginLeft: '5px' }} /> {/* Icon added here */}
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
              <Card className='style1'>
                <Card.Img variant="top" src={img11} />
                <Card.Body>
                  <Card.Title>Classic Ladies Hostel</Card.Title>
                  <Card.Text>
                  Developed the Classic Ladies Hostel website — a modern and welcoming platform for safe and comfortable women’s accommodation.                  </Card.Text>
                  <Button variant="primary">
                    <a href="http://classicladieshostel.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                      Visit Us <FaExternalLinkAlt style={{ marginLeft: '5px' }} /> {/* Icon added here */}
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
              <Card className='style1'>
                <Card.Img variant="top" src={img12} />
                <Card.Body>
                  <Card.Title>Addis It Solutions</Card.Title>
                  <Card.Text>
                  Created addisits.com for Addis IT Solution, focusing on technology-driven solutions and a modern user interface.                  </Card.Text>
                  <Button variant="primary">
                    <a href="https://addisits.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                      Visit Us <FaExternalLinkAlt style={{ marginLeft: '5px' }} /> {/* Icon added here */}
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
