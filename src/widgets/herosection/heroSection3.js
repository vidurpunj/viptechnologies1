import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

const Herosection3 = () => {
    return (
        <section className="custom-pt-1 custom-pb-2 bg-primary parallaxie position-relative" style={{ backgroundImage: `url(${require('../../assets/images/bg/01.jpg')})`, backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} data-overlay={6}>
            <Container>
                <Row className="justify-content-center text-center">
                    <Col xs="12" lg="10" xl="8">
                        {/* Heading */}
                        <h1 className="display-4 text-white font-weight-bold">
                            Change the way you build websites With Bootsland
                        </h1>
                        {/* Text */}
                        <p className="lead text-light">
                            Build a Beautiful, Clean &amp; Modern Design website with flexible Bootstrap components.
                        </p>
                        {/* Buttons */}
                        <Link to="/" className="btn btn-primary me-1">
                            Learn More
                        </Link>
                        <Link to="/" className="btn btn-light">
                            Get Started
                        </Link>
                    </Col>
                </Row>
            </Container>
            {/* / .container */}
            <div className="shape-1 bottom" style={{ height: '100px', overflow: 'hidden' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                    <polygon className="svg--sm" fill="white" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100" />
                    <polygon className="svg--lg" fill="white" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" />
                </svg>
            </div>
        </section>
    );
};

export default Herosection3;
