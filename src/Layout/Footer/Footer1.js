import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

const Footer1 = () => {
    return (
        <footer className="py-11 bg-primary position-relative" data-bg-img="assets/images/bg/03.png">
            <div className="shape-1" style={{ height: '150px', overflow: 'hidden' }}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                    <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#060927' }}></path>
                </svg>

            </div>
            <Container className=" mt-11">
                <Row>
                    <div className="col-12 col-lg-5 col-xl-4 me-auto mb-6 mb-lg-0">
                        <div className="subscribe-form bg-warning-soft p-5 rounded">
                            <h5 className="mb-4 text-white">Newsletter</h5>
                            <h6 className="text-light">Subscribe Our Newsletter</h6>
                            <form id="mc-form" className="group">
                                <input type="email" name="EMAIL" className="email form-control" id="mc-email" placeholder="Email Address" required style={{ height: '60px' }} />
                                <input className="btn btn-outline-light btn-block mt-3 mb-2" type="submit" name="subscribe" defaultValue="Subscribe" />
                            </form>
                            <small className="text-light">Get started for 1 Month free trial No Purchace required.</small>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-7">
                        <Row>
                            <Col className="col-12 col-sm-4 navbar-dark">
                                <h5 className="mb-4 text-white">Pages</h5>
                                <ul className="navbar-nav list-unstyled mb-0">
                                    <li className="mb-3 nav-item"><Link className="nav-link" to="/about-us">About</Link>
                                    </li>
                                    <li className="mb-3 nav-item"><Link className="nav-link" to="/product-grid">Shop</Link>
                                    </li>
                                    <li className="mb-3 nav-item"><Link className="nav-link" to="/faq">Faq</Link>
                                    </li>
                                    <li className="mb-3 nav-item"><Link className="nav-link" to="/blog-card">Blogs</Link>
                                    </li>
                                    <li className="nav-item"><Link className="nav-link" to="/contact-us">Contact Us</Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col className="col-12 col-sm-4 mt-6 mt-sm-0 navbar-dark">
                                <h5 className="mb-4 text-white">Service</h5>
                                <ul className="navbar-nav list-unstyled mb-0">
                                    <li className="mb-3 nav-item"><Link className="nav-link" to="#">Content Writing</Link>
                                    </li>
                                    <li className="mb-3 nav-item"><Link className="nav-link" to="#">Documentation</Link>
                                    </li>
                                    <li className="mb-3 nav-item"><Link className="nav-link" to="/sign-in">Account</Link>
                                    </li>
                                    <li className="nav-item"><Link className="nav-link" to="/career">Careers</Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col className="col-12 col-sm-4 mt-6 mt-sm-0 navbar-dark">
                                <h5 className="mb-4 text-white">Legal</h5>
                                <ul className="navbar-nav list-unstyled mb-0">
                                    <li className="mb-3 nav-item"><Link className="nav-link" to="/term-condition">Term Of Service</Link>
                                    </li>
                                    <li className="mb-3 nav-item"><Link className="nav-link" to="/privacy-policy">Privacy Policy</Link>
                                    </li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Support</Link>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col className="col-12 col-sm-6">
                                <Link className="footer-logo text-white h2 mb-0" style={{ textDecoration: 'none' }} to="/">
                                    Boots<span className="font-weight-bold">Land.</span>
                                </Link>
                            </Col>
                            <Col className="col-12 col-sm-6 mt-6 mt-sm-0">
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item"><Link className="text-light ic-2x" to="#"><i className="la la-facebook" /></Link>
                                    </li>
                                    <li className="list-inline-item"><Link className="text-light ic-2x" to="#"><i className="la la-dribbble" /></Link>
                                    </li>
                                    <li className="list-inline-item"><Link className="text-light ic-2x" to="#"><i className="la la-instagram" /></Link>
                                    </li>
                                    <li className="list-inline-item"><Link className="text-light ic-2x" to="#"><i className="la la-twitter" /></Link>
                                    </li>
                                    <li className="list-inline-item"><Link className="text-light ic-2x" to="#"><i className="la la-linkedin" /></Link>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </Row>
                <Row className="text-white text-center mt-8">
                    <Col>
                        <hr className="mb-8" />Copyright 2020 Bootsland Theme by <u><Link className="text-white" to="#">Skytouch Infotech</Link></u> | All Rights Reserved
                    </Col>
                </Row>
            </Container>
        </footer >
    );
};

export default Footer1;
