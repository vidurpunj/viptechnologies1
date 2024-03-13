import React, { useEffect } from 'react';
import { Button, Col, Container, Form, Input, Row } from 'reactstrap';
import CommingSoonCounter from '../../../widgets/common/counter';

const ComingSoon = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-content">
            {/*coming soon start*/}
            <section className="fullscreen-banner p-0 o-hidden bg-pos-r" data-bg-img={require(`../../../assets/images/coming-bg.png`)} style={{ backgroundImage: `url(${require('../../../assets/images/coming-bg.png')}` }}>
                <Container fluid className="px-md-8 " style={{ height: '100vh' }}>
                    <Row className="h-100 align-items-center">
                        <Col>
                            <div className="shadow p-5 rounded" data-bg-color="rgba(255,255,255,0.2)">
                                <Row className="justify-content-between">
                                    <Col lg={5} md={12}>
                                        <div className="coming-soon">
                                            <h1 className="mt-4 mb-2 font-w-7">Coming Soon</h1>
                                            <p>We Are Creating Something Awesome And Exciting For You</p>
                                            <ul className="countdown list-inline d-flex justify-content-between" data-countdown="2020/03/23">
                                                <CommingSoonCounter time={'110150'} />
                                            </ul>
                                            <div>
                                                <h4 className="title z-index-1 mb-4">Subscribe to get notified!</h4>
                                                <Row>
                                                    <Col md={6}>
                                                        <div className="subscribe-form">
                                                            <Form id="mc-form" className="group">
                                                                <Input defaultValue name="EMAIL" className="email form-control" id="mc-email" placeholder="Email Address" required style={{ height: '60px' }} type="email" />
                                                                <Button className="btn btn-primary btn-block mt-3 mb-2" name="subscribe" type="submit">
                                                                    Subscribe
                                                                </Button>
                                                            </Form>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={12} className="md-mt-5 text-lg-right">
                                        <img className="img-fluid d-inline" src={require(`../../../assets/images/coming-soon-img.png`)} alt="testimage" />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/*coming soon end*/}
        </div>
    );
};

export default ComingSoon;
