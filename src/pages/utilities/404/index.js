import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="fullscreen-banner p-0">
            <Container className="" style={{ height: '100vh' }}>
                <Row className="h-100">
                    <Col className="text-center h-100 d-flex align-items-center">
                        <div className="w-100">
                            <img className="img-fluid d-inline mb-5" src={require('../../../assets/images/404.png')} alt="testimage" />
                            <h2>Oops! Page Not Found</h2>
                            <div className="col-lg-6 col-md-10 ms-auto me-auto">
                                <h6>You’re either misspelling the URL or requesting a page that's no longer here.</h6>
                                <Link className="btn btn-primary" to="/index">Back To Home Page</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PageNotFound;
