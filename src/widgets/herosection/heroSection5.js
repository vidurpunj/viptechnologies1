import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Typewriter from 'typewriter-effect';
import Videobox2 from '../videolightbox/videobox2';

const Herosection5 = () => {
    return (
        <section>
            <Container className='ps-8 pe-8'>
                <Row className="justify-content-center mb-8">
                    <Col xs={12} lg={8} className="text-center">
                        {/* Heading */}
                        <h4>
                            Created For{' '}
                            <Typewriter
                                options={{
                                    strings: ['Sass', 'Software', 'Startup', 'WebApp', 'Agency', 'Marketing', 'Designer', 'Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h4>
                        <h1 className="display-4 mt-3 font-w-5">
                            Bootsland All In One Solution For Your Website
                        </h1>
                        {/* Text */}
                        <p className="lead text-muted">
                            Build a Beautiful, Clean &amp; Modern Design website with flexible Bootstrap components.
                        </p>
                    </Col>
                </Row>
                {/* / .row */}
                <Videobox2 />
            </Container>
            {/* / .container */}
        </section>
    );
};

export default Herosection5;
