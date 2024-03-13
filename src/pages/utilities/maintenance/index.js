import React, { useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';

const Maintenance = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-content">
            {/*404 start*/}
            <section className="fullscreen-banner p-0 bg-primary overflow-hidden">
                <Container fluid className="ps-0" style={{ height: '100vh' }}>
                    <Row className="h-100">
                        <Col md={7} className="h-100 d-flex align-items-center">
                            <img className="img-fluid d-inline" src={require('../../../assets/images/maintenance.png')} alt="testimage" />
                        </Col>
                    </Row>
                </Container>
            </section>
            {/*404 end*/}
        </div>
    );
};

export default Maintenance;
