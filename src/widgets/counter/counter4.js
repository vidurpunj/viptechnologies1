import React from 'react';
import CountUp from 'react-countup';
import { Col, Row } from 'reactstrap';

const Counter4 = () => {
    return (
        <Row className="align-items-center mt-5">
            <Col className='col-4'>
                <div className="counter">
                    <div className="counter-desc">
                        <CountUp className="count-number display-4" end={15} duration={40} />
                        <span className="display-4 text-primary">k</span>
                        <h6 className="text-muted mb-0">Project</h6>
                    </div>
                </div>
            </Col>
            <Col className='col-4'>
                <div className="counter">
                    <div className="counter-desc">
                        <CountUp className="count-number display-4" end={29} duration={40} />
                        <span className="display-4 text-primary">k</span>
                        <h6 className="text-muted mb-0">Member</h6>
                    </div>
                </div>
            </Col>
            <Col className='col-4'>
                <div className="counter">
                    <div className="counter-desc">
                        <CountUp className="count-number display-4" end={45} duration={40} />
                        <span className="display-4 text-primary">k</span>
                        <h6 className="text-muted mb-0">Love Us</h6>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default Counter4;
