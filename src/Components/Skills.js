import React from 'react';
import './Skills.css';
import Footer from './Footer';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaJava, FaPython, FaDatabase, FaNode, FaCode, FaCuttlefish, FaPhp } from 'react-icons/fa';

function Skills() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 style={{ color: '#E34F26' }} /> },
    { name: 'CSS', icon: <FaCss3Alt style={{ color: '#1572B6' }} /> },
    { name: 'Bootstrap', icon: <FaBootstrap style={{ color: '#7952B3' }} /> },
    { name: 'JavaScript', icon: <FaJs style={{ color: '#F7DF1E' }} /> },
    { name: 'React.js', icon: <FaReact style={{ color: '#61DAFB' }} /> },
    { name: 'Java', icon: <FaJava style={{ color: '#007396' }} /> },
    { name: 'Python', icon: <FaPython style={{ color: '#306998' }} /> },
    { name: 'SQL', icon: <FaDatabase style={{ color: '#003B57' }} /> },
    { name: 'Node.js', icon: <FaNode style={{ color: '#339933' }} /> },
    { name: 'C', icon: <FaCode style={{ color: '#A8B9CC' }} /> },
    { name: 'C++', icon: <FaCuttlefish style={{ color: '#00599C' }} /> },
    { name: 'PHP', icon: <FaPhp style={{ color: '#777BB4' }} /> },
  ];

  return (
    <div className='lg container-fluid'>
      <h1 className='text-center txt'>Skills</h1>
      <div className='lg1'>
        <div className='ml'>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='row'>
              {skills.map((skill, index) => (
                <div key={index} className='col-6 col-sm-6 col-md-4 col-lg-4'>
                  <button className='button1'>
                    <span className="box">
                      <span className="icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='footr'>
        <Footer />
      </div>
    </div>
  );
}

export default Skills;
