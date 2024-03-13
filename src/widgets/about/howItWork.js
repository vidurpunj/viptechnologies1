import React from 'react';
import bgImage from '../../assets/images/bg/02.png';
import image1 from '../../assets/images/svg/04.svg';
import image2 from '../../assets/images/svg/05.svg';
import image3 from '../../assets/images/svg/06.svg';

const HowItWorksSection = () => {
    return (
        <section className="custom-py-2 position-relative bg-dark" data-bg-img={bgImage}>
            <div className="container pe-8 ps-8">
                <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                        <div className="mb-8">
                            <span className="badge badge-primary-soft p-2 font-w-6">How It Work</span>
                            <h2 className="mt-3 font-w-5 mb-0 text-white">Three Simple Steps to Get Started Working Process</h2>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-between mb-10">
                    <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                        <img src={image1} alt="testimage" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                        <div>
                            <h2>
                                <span className="badge badge-primary-soft p-2">01</span>
                            </h2>
                            <h4 className="mt-3 text-light">Choose Project</h4>
                            <p className="lead mb-0">We use the latest technologies to create amazing projects that meet your needs.</p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-between mb-10">
                    <div className="col-12 col-lg-6 order-lg-1 mb-6 mb-lg-0">
                        <img src={image2} alt="testimage" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                        <div>
                            <h2>
                                <span className="badge badge-primary-soft p-2">02</span>
                            </h2>
                            <h4 className="mt-3 text-light">Start Creating</h4>
                            <p className="lead mb-0">We use the latest technologies to bring your ideas to life and start creating amazing results.</p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                        <img src={image3} alt="testimage" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                        <div>
                            <h2>
                                <span className="badge badge-primary-soft p-2">03</span>
                            </h2>
                            <h4 className="mt-3 text-light">Get Results</h4>
                            <p className="lead mb-0">We use the latest technologies to deliver outstanding results that exceed your expectations.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1" style={{ height: '200px', overflow: 'hidden' }}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                    <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#fff' }}></path>
                </svg>
            </div>
            <div className="shape-1 bottom" style={{ height: '200px', overflow: 'hidden' }}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                    <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#fff' }}></path>
                </svg>
            </div>
        </section>
    );
}

export default HowItWorksSection;
