import React from 'react';
import { Badge } from 'reactstrap';

const Work = () => {
    return (
        <section className="pt-0">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-lg-6 order-lg-2 mb-6 mb-lg-0">
                        <img src={require('../../assets/images/about/02.png')} alt="testimage" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5 order-lg-1">
                        <div>
                            <Badge color="primary" className="p-2">
                                <i className="la la-exclamation ic-3x rotation" />
                            </Badge>
                            <h2 className="mt-3">VIPTechnologies Focus on your success</h2>
                            <p className="lead mb-5">
                                We use the latest technologies like React and Ruby on Rails and Java.
                            </p>
                        </div>
                        <div className="d-flex align-items-center">
                            <img
                                alt="testimage"
                                src={require('../../assets/images/testimonial/vidurpunj.jpg')}
                                className="shadow-primary img-fluid rounded-circle d-inline me-3"
                            />
                            <div>
                                <h5>Vidur Punj</h5>
                                <span className="text-muted">Web Developer</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-lg-6 order-lg-2 mb-6 mb-lg-0">
                        <img src={require('../../assets/images/about/02.png')} alt="testimage" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5 order-lg-1">
                        <div className="d-flex align-items-center">
                            <img
                                alt="testimage"
                                src={require('../../assets/images/testimonial/ManishSharma.jpg')}
                                className="shadow-primary img-fluid rounded-circle d-inline me-3"
                            />
                            <div>
                                <h5>Manish Sharma</h5>
                                <span className="text-muted">Technical Architect</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;
