import React from 'react';
import { Col, Row } from 'reactstrap';

const Featureskill = () => {
    return (
        <Row className="align-items-center">
            <Col lg="4" xs="12" className="text-lg-end">
                <div className="d-flex align-items-start mb-8">
                    <div className="order-lg-1 ms-lg-3">
                        <div className="f-icon-shape-sm text-white bg-primary rounded-circle shadow-primary me-3 me-lg-0">
                            <i className="la la-wechat ic-2x" />
                        </div>
                    </div>
                    <div>
                        <h5>Live Chat</h5>
                        <p className="mb-0">Serspiciatis unde omnis iste natus laudantium.</p>
                    </div>
                </div>
                <div className="d-flex align-items-start mb-8">
                    <div className="order-lg-1 ms-lg-3">
                        <div className="f-icon-shape-sm text-white bg-primary rounded-circle shadow-primary me-3 me-lg-0">
                            <i className="la la-desktop ic-2x" />
                        </div>
                    </div>
                    <div>
                        <h5>Responsive</h5>
                        <p className="mb-0">Serspiciatis unde omnis iste natus laudantium.</p>
                    </div>
                </div>
                <div className="d-flex align-items-start">
                    <div className="order-lg-1 ms-lg-3">
                        <div className="f-icon-shape-sm text-white bg-primary rounded-circle shadow-primary me-3 me-lg-0">
                            <i className="ti-check-box ic-2x" />
                        </div>
                    </div>
                    <div>
                        <h5>Free Update</h5>
                        <p className="mb-0">Serspiciatis unde omnis iste natus laudantium.</p>
                    </div>
                </div>
            </Col>
            <Col lg="4" xs="12" className="my-5 my-lg-0">
                <img src={require(`../../assets/images/about/09.png`)} alt="testimage" className="img-fluid" />
            </Col>
            <Col lg="4" xs="12">
                <div className="d-flex align-items-start mb-8">
                    <div>
                        <div className="f-icon-shape-sm text-white bg-primary rounded-circle shadow-primary me-3">
                            <i className="la la-eye ic-2x" />
                        </div>
                    </div>
                    <div>
                        <h5>Display Ratio</h5>
                        <p className="mb-0">Serspiciatis unde omnis iste natus laudantium.</p>
                    </div>
                </div>
                <div className="d-flex align-items-start mb-8">
                    <div>
                        <div className="f-icon-shape-sm text-white bg-primary rounded-circle shadow-primary me-3">
                            <i className="la la-film ic-2x" />
                        </div>
                    </div>
                    <div>
                        <h5>High Resolution</h5>
                        <p className="mb-0">Serspiciatis unde omnis iste natus laudantium.</p>
                    </div>
                </div>
                <div className="d-flex align-items-start">
                    <div>
                        <div className="f-icon-shape-sm text-white bg-primary rounded-circle shadow-primary me-3">
                            <i className="la la-headphones ic-2x" />
                        </div>
                    </div>
                    <div>
                        <h5>24/7 Support</h5>
                        <p className="mb-0">Serspiciatis unde omnis iste natus laudantium.</p>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Featureskill;
