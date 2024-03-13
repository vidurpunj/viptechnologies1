import React from 'react';
import CountUp from 'react-countup';
import { Col, Row } from 'reactstrap';

const Counter2 = () => {
    return (
        <Row className="text-center">
            <Col lg="6" md="6">
                <div className="counter bg-primary rounded p-5 shadow">
                    <div className="counter-desc text-white">
                        <h5>Project</h5>
                        <CountUp className="count-number display-4" end={234} duration={100} />
                        <span className="display-4">k</span>
                    </div>
                </div>
            </Col>
            <Col lg="6" md="6" className="mt-5">
                <div className="counter bg-white rounded p-5 shadow">
                    <div className="counter-desc">
                        <h5>Member</h5>
                        <CountUp className="count-number display-4 text-primary" end={455} duration={100} />
                        <span className="display-4 text-primary">k</span>
                    </div>
                </div>
            </Col>
            <Col lg="6" md="6" className="mt-5 mt-md-0">
                <div className="counter bg-white rounded p-5 shadow">
                    <div className="counter-desc">
                        <h5>Love Us</h5>
                        <CountUp className="count-number display-4 text-primary" end={365} duration={100} />
                        <span className="display-4 text-primary">k</span>
                    </div>
                </div>
            </Col>
            <Col lg="6" md="6" className="mt-5">
                <div className="counter bg-orange rounded p-5 shadow">
                    <div className="counter-desc text-white">
                        <h5>Happy Client</h5>
                        <CountUp className="count-number display-4" end={528} duration={100} />
                        <span className="display-4">k</span>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Counter2;
