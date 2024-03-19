import React from 'react';
import {Col, Container, Row} from 'reactstrap';

const Infomation = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="4" md="4">
                        <h5>
                            <span className="text-theme font-w-7">01.</span> Work From Home
                        </h5>
                        <p>
                            Experience the flexibility and convenience of working from the comfort of your own home with
                            our Work From Home program.
                        </p>
                    </Col>
                    <Col lg="4" md="4">
                        <h5>
                            <span className="text-theme font-w-7">02.</span> Office An Great Location
                        </h5>
                        <p>
                            Join us in our vibrant office located in a prime and convenient location, offering a
                            stimulating and collaborative work environment.
                        </p>
                    </Col>
                    <Col lg="4" md="4">
                        <h5>
                            <span className="text-theme font-w-7">03.</span> Shared Success
                        </h5>
                        <p>
                            Embrace a culture of shared success, where teamwork and collaboration drive us towards
                            achieving our goals together.
                        </p>
                    </Col>
                    <Col lg="4" md="4">
                        <h5>
                            <span className="text-theme font-w-7">04.</span> Medical insurance
                        </h5>
                        <p>
                            Enjoy peace of mind with comprehensive medical insurance coverage, ensuring your health and
                            well-being are prioritized.
                        </p>
                    </Col>
                    <Col lg="4" md="4">
                        <h5>
                            <span className="text-theme font-w-7">05.</span> Regular Reviews
                        </h5>
                        <p>
                            Experience growth and development through regular performance reviews, providing valuable
                            feedback and opportunities for personal and professional advancement.
                        </p>
                    </Col>
                    <Col lg="4" md="4">
                        <h5>
                            <span className="text-theme font-w-7">06.</span> Bonus Available
                        </h5>
                        <p>
                            Earn additional rewards and recognition for your hard work and dedication with our bonus
                            incentive program.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Infomation;
