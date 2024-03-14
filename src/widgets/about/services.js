import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import bgImage from '../../assets/images/bg/02.png';
import icon01 from '../../assets/images/icon/01.svg';
import icon02 from '../../assets/images/icon/02.svg';
import icon03 from '../../assets/images/icon/03.svg';
import icon04 from '../../assets/images/icon/04.svg';
import icon05 from '../../assets/images/icon/05.svg';

const ServiceItem = ({ icon, title, description }) => (
    <Col lg={4} md={6} mt={6}>
        <div className="bg-primary-soft rounded p-5">
            <div className="d-flex align-items-center mb-4">
                <div className="me-3">
                    <img className="img-fluid" src={icon} alt="testimage" />
                </div>
                <h5 className="m-0 text-light">{title}</h5>
            </div>
            <p className="mb-0">{description}</p>
        </div>
    </Col>
);

const Services = () => {
    const serviceItems = [
        {
            icon: icon01,
            title: 'App Development',
            description: 'Whether it’s crafting a sleek mobile app, a game, or a productivity tool, app development bridges creativity and technology to shape the digital landscape.',
        },
        {
            icon: icon02,
            title: 'Clean Code',
            description: ' It’s code that’s easy to read, maintain, understand, and change.',
        },
        {
            icon: icon03,
            title: 'Website Development',
            description: 'For a successful website, each step plays a crucial role in creating a seamless user experience and ensuring the site’s functionality and performance.',
        },
        {
            icon: icon04,
            title: 'Easy to customize',
            description: 'Certainly! When it comes to design and functionality, a website or software that is easy to customize is like a well-tailored suit.',
        },
        {
            icon: icon05,
            title: '24/7 Support',
            description: 'Whether it’s troubleshooting technical issues, addressing inquiries, or resolving concerns, 24/7 support is a critical component of excellent customer service in today’s digital-first world.',
        },
    ];

    return (
        <section className="custom-pt-1 custom-pb-2 bg-dark position-relative" data-bg-img={bgImage}>
            <Container>
                <Row className="align-items-end">
                    <Col lg={4} md={6} className="mb-8 mb-lg-0 text-white">
                        <div>
                            <span className="badge badge-primary-soft p-2">
                                <i className="la la-cubes ic-3x rotation" />
                            </span>
                            <h2 className="mt-3 mb-0">One Platform, Deep Insight Why Choose VIPTechnologies</h2>
                        </div>
                    </Col>
                    {serviceItems.map((item, index) => (
                        <ServiceItem key={index} icon={item.icon} title={item.title} description={item.description} />
                    ))}
                </Row>
            </Container>
            <div className="shape-1" style={{ height: '150px', overflow: 'hidden' }}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                    <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#fff' }} />
                </svg>
            </div>
            <div className="shape-1 bottom" style={{ height: '200px', overflow: 'hidden' }}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                    <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#fff' }} />
                </svg>
            </div>
        </section>
    );
};

export default Services;
