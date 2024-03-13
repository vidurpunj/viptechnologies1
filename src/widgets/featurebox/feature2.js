import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

const featureData = [
    {
        image: require('../../assets/images/services/01.png'),
        title: 'Overview',
        description: 'Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.',
    },
    {
        image: require('../../assets/images/services/02.png'),
        title: 'Video Chat',
        description: 'Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.',
    },
    {
        image: require('../../assets/images/services/03.png'),
        title: 'Unique Data',
        description: 'Serspiciatis unde omnis iste natus error sit doloremque laudantium, totam rem aperiam.',
    },
];

const Feature2 = () => {
    return (
        <section className="text-center">
            <Container className='ps-8 pe-8'>
                <Row>
                    <Col>
                        <div className="p-7 rounded bg-white shadow">
                            <Row className="align-items-center">
                                {featureData.map((feature, index) => (
                                    <Col key={index} xl="4" lg="4" sm="6" className={index !== 0 ? 'mt-6 mt-sm-0' : ''}>
                                        <div>
                                            <div>
                                                <img className="img-fluid" src={feature.image} alt="testimage" />
                                            </div>
                                            <h5 className="mt-4 mb-3">{feature.title}</h5>
                                            <p>{feature.description}</p>
                                            <Link className="btn-link" to="/" style={{ textDecoration: 'none' }}>
                                                Read Details
                                            </Link>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Feature2;
