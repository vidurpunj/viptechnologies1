import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Pageheading from '../../../widgets/PageHeading';
import ContactForm2 from '../../../widgets/contact/ContactForm2';
import { Link } from 'react-router-dom';

const Contact2 = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {/*hero section start*/}
            <section className="position-relative">
                <Pageheading foldername={"Company"} title={"Contact Us"} />
            </section>
            {/*hero section end*/}
            {/*body content start*/}
            <div className="page-content">
                <section>
                    <Container>
                        <Row className="align-items-end">
                            <Col lg="8" >
                                <div className="mb-5">
                                    <span className="badge badge-primary-soft p-2">
                                        <i className="la la-bold ic-3x rotation" />
                                    </span>
                                    <h2 className="mt-4 mb-0">Drop A Line</h2>
                                    <p className="lead mb-0">
                                        Get in touch and let us know how we can help. Fill out the form and we’ll be in touch as soon as possible.
                                    </p>
                                </div>
                                <ContactForm2 />
                            </Col>
                            <Col lg="4">
                                <div className="mb-5 mt-5">
                                    <svg
                                        className="feather feather-map-pin"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={50}
                                        height={50}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#1360ef"
                                        strokeWidth={1}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx={12} cy={10} r={3} />
                                    </svg>
                                    <h4 className="mt-3">Address:</h4>
                                    <span className="text-black">423B, Road Worldwide Country, USA</span>
                                </div>
                                <div className="mb-5">
                                    <svg
                                        className="feather feather-mail"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={50}
                                        height={50}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#1360ef"
                                        strokeWidth={1}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                    <h4 className="mt-3">Email Us</h4>
                                    <Link to="mailto:admin@viptechnologies.in">admin@viptechnologies.in</Link>
                                </div>
                                <div>
                                    <svg
                                        className="feather feather-phone-call"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={50}
                                        height={50}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#1360ef"
                                        strokeWidth={1}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    <h4 className="mt-3">Phone Number</h4>
                                    <Link to="tel:+912345678900">+91-9541-555-660</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
            {/*body content end*/}
        </div>
    );
};

export default Contact2;
