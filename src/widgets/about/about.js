import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

const About = () => {
    return (
        <section>
            <Container>
                <Row className=" align-items-center justify-content-between">
                    <Col lg={6} className="col-12 mb-6 mb-lg-0">
                        <img src={require(`../../assets/images/about/03.png`)} alt="testimage" className="img-fluid" />
                    </Col>
                    <Col lg={6} xl={5} className="col-12">
                        <div>
                            <span className="badge badge-primary-soft p-2">
                                <i className="la la-exclamation ic-3x rotation" />
                            </span>
                            <h2 className="mt-3">We're A Creative Software Landing Page</h2>
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
                            Learn More
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
