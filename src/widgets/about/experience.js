import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

const Experience = () => {
    return (
        <section>
            <Container className='ps-8 pe-8'>
                <Row className="align-items-center justify-content-between">
                    <Col xs="12" lg="6" className="mb-8 mb-lg-0 order-lg-1">
                        <div className="d-flex justify-content-between mb-5">
                            <div className="me-3">
                                <svg width={60} height={60} viewBox="0 0 24 24" fill="none" stroke="#1360ef" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid">
                                    <rect x={3} y={3} width={7} height={7} />
                                    <rect x={14} y={3} width={7} height={7} />
                                    <rect x={14} y={14} width={7} height={7} />
                                    <rect x={3} y={14} width={7} height={7} />
                                </svg>
                            </div>
                            <div>
                                <h5 className="mb-2">Creative Design</h5>
                                <p className="mb-0">Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between mb-5">
                            <div className="me-3">
                                <svg width={60} height={60} viewBox="0 0 24 24" fill="none" stroke="#1360ef" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-square">
                                    <polyline points="9 11 12 14 22 4" />
                                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                </svg>
                            </div>
                            <div>
                                <h5 className="mb-2">Easy To Start</h5>
                                <p className="mb-0">Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="me-3">
                                <svg width={60} height={60} viewBox="0 0 24 24" fill="none" stroke="#1360ef" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="feather feather-wifi">
                                    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                                    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                                    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                                    <line x1={12} y1={20} x2={12} y2={20} />
                                </svg>
                            </div>
                            <div>
                                <h5 className="mb-2">Management</h5>
                                <p className="mb-0">Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" lg="6" xl="5">
                        <div>
                            <span className="badge badge-primary-soft p-2">
                                <i className="la la-exclamation ic-3x rotation" />
                            </span>
                            <h2 className="mt-3">We Have Experience Website building With Bootstrap</h2>
                            <p className="lead mb-0">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
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

export default Experience;
