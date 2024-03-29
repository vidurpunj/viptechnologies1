import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const About2 = () => {
    return (
        <section>
            <Container>
                <Row className="align-items-center justify-content-between">
                    <Col xs={12} lg={6} mb={8} mb-lg={0} className='order-lg-1'>
                        <img
                            src={require('../../assets/images/about/03.png')}
                            alt="testimage"
                            className="img-fluid"
                        />
                    </Col>
                    <Col xs={12} lg={6} xl={5}>
                        <div className="mb-5">
                            <span className="h6 text-primary">About Bootsland</span>
                            <h2 className="mt-3 font-w-5">A Creative landing Page</h2>
                            <p className="lead">
                                We use the latest technologies it voluptatem accusantium doloremque.
                            </p>
                        </div>
                        <div className="">
                            <div className="mb-3">
                                <div className="d-flex align-items-start">
                                    <div className="badge-primary-soft rounded p-1">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-check"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <p className="mb-0 ms-3">
                                        We use the latest technologies it voluptatem accusantium doloremqu
                                    </p>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="d-flex align-items-start">
                                    <div className="badge-primary-soft rounded p-1">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-check"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <p className="mb-0 ms-3">Bootsland Landing Page Build With Static Bootstarp Code</p>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex align-items-start">
                                    <div className="badge-primary-soft rounded p-1">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-check"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <p className="mb-0 ms-3">All types of businesses need access to development</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About2;
