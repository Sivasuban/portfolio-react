import React from 'react';
import './Bg.css';
import { Typewriter } from 'react-simple-typewriter';
import img1 from '../asset/photo1.jpg';
import Footer from './Footer';

const MirroredBackground = () => {
  return (
    <>
    <div className='background container-fluid d-flex align-items-center justify-content-center'>
      <div className='row'>
        <div className='col-12 col-sm-12 col-md-6 col-lg-6 d-flex align-items-center'>
          <div>
            <h1 className='height'>
              I'm <span style={{ color: "red" }}>S</span>ivasuban <span style={{ color: "blue" }}>G</span>
              <br />
              <span className="effect">
                <Typewriter
                  words={['Front-End Developer', 'Designer']}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  typeSpeed={150}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
          </div>
        </div>
        <div className='outside col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center'>
          <img src={img1} alt={'Profile'}   className='img-fluid'/>
        </div>
      </div>
      <div className='footr mt-3'>
      <Footer/>
      </div>
    </div>
   
    </>
  );
};

export default MirroredBackground;
