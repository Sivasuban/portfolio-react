import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className='border2 '>
        <div className='d-flex '><span className='custom-icon '>S</span>
        </div> 
        <h3 className='text-center footr-txt-clr'> ❛❛ It always seems impossible until it's done ! ❜❜</h3>

        <div className="child">
          <a href="mailto:sivasubangopal@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(0, 242, 255)' }}>
            <FaEnvelope size={30} />
          </a>
          <a href="https://github.com/Sivasuban" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(0, 242, 255)' }}>
            <FaGithub size={30} />
          </a>
          <a href="http://www.linkedin.com/in/sivasuban-gopal-91a907250" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(0, 242, 255)' }}>
            <FaLinkedin size={30} />
          </a>
        </div>

        <div className="text-center mt1">
          <p className="copyright">© 2024 Sivasuban</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
