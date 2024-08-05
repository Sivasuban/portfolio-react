import React from 'react';
import "./Certificates.css"
import CSS from '../asset/HackerRank_CSS_Certificate.jpg.jpg';
import HTML from '../asset/HTML_certificate.jpg.jpg';
import Front from '../asset/Introduction Front-End Development_Certificate.jpg.jpg';
import JS from '../asset/meta_JavaScript.jpg.jpg';
import React1 from '../asset/react.jpg.jpg';
import Tech from '../asset/Tech_Foundation_Certificate.jpg.jpg';
import Footer from './Footer';


function Certificates() {
    return (
        <>
            <div className='parent_div container-fluid '>
                <h1 className='txt text-center'>Certificates</h1>
                <div className='d-flex justify-content-center align-items-center '>
                    <div className='row p-5 g-4 '>
                        <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
                            <div class="container1">
                                <div class="card1">
                                    <div class="front">

                                        <div className='txt12'>
                                            <h4>Tech Foundation for Web Development</h4>
                                            <p>Coursera</p>
                                        </div>

                                    </div>
                                    <div class="back">
                                        <img src={Tech} alt='no'className='img-fluid' />


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
                            <div class="container1">
                                <div class="card1">
                                    <div class="front">

                                        <div className='txt12'>
                                            <h4>Phase-1 HTML</h4>
                                            <p>Coursera</p>
                                        </div>

                                    </div>
                                    <div class="back">
                                        <img src={HTML} alt='no' className='img-fluid' />


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
                            <div class="container1">
                                <div class="card1">
                                    <div class="front">

                                        <div className='txt12'>
                                            <h4>CSS</h4>
                                            <p>Hacker Rank</p>
                                        </div>

                                    </div>
                                    <div class="back">
                                        <img src={CSS} alt='no' className='img-fluid'/>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
                            <div class="container1">
                                <div class="card1">
                                    <div class="front">

                                        <div className='txt12'>
                                            <h4>Introduction to Front-End Development</h4>
                                            <p>Coursera</p>
                                        </div>

                                    </div>
                                    <div class="back">
                                        <img src={Front} alt='no' className='img-fluid' />


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
                            <div class="container1">
                                <div class="card1">
                                    <div class="front">

                                        <div className='txt12'>
                                            <h4>Programming with JavaScript</h4>
                                            <p>Coursera</p>
                                        </div>

                                    </div>
                                    <div class="back">
                                        <img src={JS} alt='no' className='img-fluid'/>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
                            <div class="container1">
                                <div class="card1">
                                    <div class="front">

                                        <div className='txt12'>
                                            <h4>React Basics</h4>
                                            <p>Coursera</p>
                                        </div>

                                    </div>
                                    <div class="back">
                                        <img src={React1} alt='no' className='img-fluid' />


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='footr'>
                    <Footer />
                </div>
                
            </div>

        </>
    )
}

export default Certificates