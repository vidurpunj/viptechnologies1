import React from 'react';
import { Col } from 'reactstrap';
import Clientlogo from '../common/clientlogo';

const Herosection = () => {
    return (
        <div className="row align-items-center">
            <Col className="col-12 col-lg-5 col-lg-6 order-lg-2 mb-8 mb-lg-0">
                {/* Image */}
                <img src={require(`../../assets/images/hero/01.png`)} className="img-fluid" alt="..." />
            </Col>
            <div className="col-12 col-lg-7 col-xl-6 order-lg-1">
                {/* Heading */}
                <h5 className="badge badge-primary-soft font-w-6">Ever Created For</h5>
                <h1 className="display-4">
                    Let's Work With <span className="text-primary">VIPTechnologies</span>
                </h1>
                {/* Text */}
                <p className="lead text-muted">Build a Beautiful, Clean &amp; Modern Design website with flexible components.</p>
                {/* Buttons */}
                <Clientlogo logoitems={4} margintop={10} />
            </div>
        </div>
    );
};

export default Herosection;
