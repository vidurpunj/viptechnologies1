import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Col, Container, Row } from 'reactstrap';
import '../../assets/css/owl.carousel.css';


function Testimonial2() {

    const testimonials = [
        {
            image: require('../../assets/images/testimonial/01.jpg'),
            text: 'Bootsland Amazing Landing Page All-in-one, clean code, Creative &amp; Modern design.',
            name: 'Romi Jensen',
            role: 'Founder',
        },
        {
            image: require('../../assets/images/testimonial/02.jpg'),
            text: 'Bootsland Amazing Landing Page All-in-one, clean code, Creative &amp; Modern design.',
            name: 'Johny Stock',
            role: 'Supervisor',
        },
        {
            image: require('../../assets/images/testimonial/03.jpg'),
            text: 'Bootsland Amazing Landing Page All-in-one, clean code, Creative &amp; Modern design.',
            name: 'Leeny Biton',
            role: 'Manager',
        },
        {
            image: require('../../assets/images/testimonial/02.jpg'),
            text: 'Bootsland Amazing Landing Page All-in-one, clean code, Creative &amp; Modern design.',
            name: 'Jensen Rom',
            role: 'CEO',
        },
    ];
    return (
        <div><section className="custom-py-2 position-relative bg-dark parallaxie" data-bg-img="assets/images/bg/02.png">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-12 col-lg-8 mb-8">
                        <div> <span className="badge badge-primary p-2">
                            <i className="la la-users ic-3x rotation" />
                        </span>
                            <h2 className="mt-4 text-white">Discover Our Client Feedback</h2>
                            <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                        </div>
                    </div>
                </div>
                {/* / .row */}
            </div>
            {/* <Testimonial2 /> */}
            <Container fluid className="text-center">
                <Row className="justify-content-center">
                    <Col xs="12" className='col-12'>
                        <OwlCarousel
                            className="owl-carousel owl-center"
                            center={true}
                            dots={true}
                            items={3}
                            autoplay={true}
                            loop={true}
                            responsive={{
                                0: {
                                    items: 1 // Show 1 item for screens with width less than or equal to 0px (mobile screens)
                                },
                                768: {
                                    items: 3 // Show 3 items for screens with width greater than or equal to 768px (larger screens)
                                }
                            }}
                        >
                            {testimonials.map((item, index) => (
                                <div className="item" key={index}>
                                    <div className="card p-5 p-lg-8 bg-primary-soft border-0">
                                        <div>
                                            <img
                                                alt="testimage"
                                                src={item.image}
                                                style={{
                                                    width: 'auto',
                                                    '@media (max-width: 768px)': {
                                                        width: '23%' // or any other default value
                                                    }
                                                }}
                                                //  style={{ width: '30%' }}
                                                className="shadow-primary img-fluid rounded-circle d-inline"
                                            />
                                        </div>
                                        <div className="card-body p-0 mt-5">
                                            <p className="text-light">{item.text}</p>
                                            <div>
                                                <h5 className="text-primary d-inline mb-0">{item.name}</h5>
                                                <small className="text-muted font-italic">- {item.role}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel>
                    </Col>
                </Row>
            </Container>
            <div className="shape-1" style={{ height: '200px', overflow: 'hidden' }}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                    <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#fff' }}></path>
                </svg>
            </div>
            <div className="shape-1 bottom" style={{ height: '200px', overflow: 'hidden' }}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                    <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#fff' }}></path>
                </svg>
            </div>
        </section></div>
    )
}

export default Testimonial2