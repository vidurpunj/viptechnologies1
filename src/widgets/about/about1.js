import React from 'react';
import { Link } from 'react-router-dom';

const About1 = () => {
    return (
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                    <img src={require(`../../assets/images/about/04.png`)} alt="testimage" className="img-fluid" />
                </div>
                <div className="col-12 col-lg-6 col-xl-5">
                    <div>
                        <h2 className="font-w-6">Solve Your Problem Very Fast With Bootsland</h2>
                        <p className="lead">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    </div>
                    <div className="d-flex flex-wrap justify-content-start">
                        <div className="mb-3 me-4 ms-lg-0 me-lg-4">
                            <div className="d-flex align-items-center">
                                <div className="badge-primary-soft rounded p-1">
                                    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <p className="mb-0 ms-3">Fully Responsive</p>
                            </div>
                        </div>
                        <div className="mb-3 me-4 ms-lg-0 me-lg-4">
                            <div className="d-flex align-items-center">
                                <div className="badge-primary-soft rounded p-1">
                                    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <p className="mb-0 ms-3">Based On Bootstrap 4</p>
                            </div>
                        </div>
                        <div className="mb-3 me-4 ms-lg-0 me-lg-4">
                            <div className="d-flex align-items-center">
                                <div className="badge-primary-soft rounded p-1">
                                    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <p className="mb-0 ms-3">Built with Sass</p>
                            </div>
                        </div>
                        <div className="mb-3 me-4 ms-lg-0 me-lg-4">
                            <div className="d-flex align-items-center">
                                <div className="badge-primary-soft rounded p-1">
                                    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <p className="mb-0 ms-3">SVG Icon</p>
                            </div>
                        </div>
                    </div>
                    <Link to="/" className="btn btn-outline-primary mt-5">
                        About Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About1;
