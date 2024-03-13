import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Col, Container, Row } from 'reactstrap';
import PageHeading from '../../../widgets/PageHeading';

const TermCondition = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {/*hero section start*/}
            <section className="position-relative">
                <PageHeading foldername="Utilities" title="Terms and Conditions" />
            </section>
            {/*hero section end*/}
            {/*body content start*/}
            <div className="page-content">
                {/*terms start*/}
                <section>
                    <Container>
                        <Row>
                            <Col lg="12" md="12">
                                <h4 className="text-primary">1. Description of Service</h4>
                                <p className="mb-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
                                    distinctio iste praesentium totam quasi tempore, magnam ipsum cum animi at
                                    fuga alias harum quo quibusdam odit eum reprehenderit consectetur
                                    suscipit!
                                </p>
                                <h4 className="text-primary mt-5">2. Your Registration Obligations</h4>
                                <p className="mb-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
                                    nesciunt officia culpa nostrum maxime vero architecto, corporis placeat
                                    repudiandae minima facere animi, pariatur fugit dignissimos qui error est
                                    nulla. Doloribus.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Distinctio nesciunt officia culpa nostrum maxime vero architecto, corporis
                                    placeat repudiandae minima facere animi, pariatur fugit dignissimos qui
                                    error est nulla. Doloribus.
                                </p>
                                <h4 className="text-primary mt-5">3. User Account, Password, and Security</h4>
                                <p className="mb-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
                                    distinctio iste praesentium totam quasi tempore, magnam ipsum cum animi.
                                </p>
                                <h4 className="text-primary mt-5">4. User Conduct</h4>
                                <p className="mb-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
                                    distinctio iste praesentium totam quasi tempore, magnam ipsum cum animi.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium vel
                                    recusandae ad impedit ipsum, vitae facere expedita! Voluptatem iure dolorem
                                    dignissimos nisi magni a dolore, et inventore optio, voluptas, obcaecati.
                                </p>
                                <div className="d-flex align-items-center mb-3">
                                    <Badge color="primary" className="rounded p-1">
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
                                    </Badge>
                                    <p className="mb-0 ms-3">Lorem ipsum dolor sit amet, consectetur</p>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <Badge color="primary" className="rounded p-1">
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
                                    </Badge>
                                    <p className="mb-0 ms-3">Quidem error quae illo excepturi nostrum blanditiis laboriosam</p>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <Badge color="primary" className="rounded p-1">
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
                                    </Badge>
                                    <p className="mb-0 ms-3">Molestias, eum nihil expedita dolorum odio dolorem</p>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <Badge color="primary" className="rounded p-1">
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
                                    </Badge>
                                    <p className="mb-0 ms-3">Eum nihil expedita dolorum odio dolorem</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Badge color="primary" className="rounded p-1">
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
                                    </Badge>
                                    <p className="mb-0 ms-3">Explicabo rem illum magni perferendis</p>
                                </div>
                                <h4 className="text-primary mt-5">5. International Use</h4>
                                <p className="mb-5">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
                                    distinctio iste praesentium totam quasi tempore, magnam ipsum cum animi.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium vel
                                    recusandae ad impedit ipsum, vitae facere expedita! Voluptatem iure dolorem
                                    dignissimos nisi magni a dolore, et inventore optio, voluptas, obcaecati.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
                                    incidunt aliquam sint, magnam excepturi quas a, id doloremque quasi iusto
                                    quo consequuntur dolorum neque optio ipsum, rerum nesciunt illo iure.
                                </p>
                                <Link className="btn btn-primary me-2" to="/">
                                    Accept
                                </Link>
                                <Link className="btn btn-outline-primary" to="/">
                                    Close
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/*terms end*/}
            </div>
            {/*body content end*/}
        </div>
    );
};

export default TermCondition;
