import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

function Testimonial1() {
    const testimonialData = [
        {
            image: require('../../assets/images/testimonial/01.jpg'),
            text: 'Bootsland Amazing Landing Page All-in-one, clean code, Creative & Modern design.',
            name: 'Romi Jensen',
            role: 'Founder',
        },
        {
            image: require('../../assets/images/testimonial/02.jpg'),
            text: 'Bootsland Amazing Landing Page All-in-one, clean code, Creative & Modern design.',
            name: 'Johny Stock',
            role: 'Supervisor',
        },
        {
            image: require('../../assets/images/testimonial/03.jpg'),
            text: 'Bootsland Amazing Landing Page All-in-one, clean code, Creative & Modern design.',
            name: 'Leeny Biton',
            role: 'Manager',
        },
        {
            image: require('../../assets/images/testimonial/01.jpg'),
            text: 'Bootsland Amazing Landing Page All-in-one, clean code, Creative & Modern design.',
            name: 'Jensen Rom',
            role: 'CEO',
        },
    ];
    return (
        <div>
            <section className="position-relative">
                <div className="shape-2 transform-md-rotate" style={{ overflow: 'hidden' }}>
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                        <path d="M208.09,0.00 C152.70,67.10 262.02,75.98 200.80,150.00 L0.00,150.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#1360ef' }} />
                    </svg>
                </div>
                <Container fluid className="container-fluid z-index-1">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-12 col-lg-4 mb-6 mb-lg-0">
                            <div> <span className="badge badge-light-soft p-2">
                                <i className="la la-users ic-3x rotation" />
                            </span>
                                <h2 className="mt-4 text-white">Discover Our Client Feedback</h2>
                                <p className="lead mb-0 text-white">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                            </div>
                        </div>
                        {/* <Testimonial1 /> */}
                        <Col lg="8">
                            <Row>
                                {testimonialData.map((testimonial, index) => (
                                    <Col key={index} md="6" lg="6" className="mt-5">
                                        <Card className="p-4 shadow border-0 flex-sm-row">
                                            <div className="w-50 me-sm-5 mb-3 mb-sm-0">
                                                <img alt="testimage" src={testimonial.image} className="shadow-primary img-fluid rounded-circle d-inline" />
                                            </div>
                                            <CardBody className="p-0">
                                                <p>{testimonial.text}</p>
                                                <div>
                                                    <h5 className="text-primary d-inline">{testimonial.name}</h5>
                                                    <small className="text-muted font-italic">- {testimonial.role}</small>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </div>
                    {/* / .row */}
                </Container>
            </section>
        </div>
    )
}

export default Testimonial1