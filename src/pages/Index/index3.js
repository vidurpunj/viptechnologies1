import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Header3 from '../../Layout/Header/Header3';
import About from '../../widgets/about/about';
import Blog2 from '../../widgets/blog/blog2';
import Clientlogo from '../../widgets/common/clientlogo';
import Experience from '../../widgets/about/experience';
import AccordionDemo from '../../widgets/accordion/accordiondemo';
import Counter2 from '../../widgets/counter/counter2';
import ContactForm from '../../widgets/form/ContactForm';
import Herosection2 from '../../widgets/herosection/hersection2';
import Testimonial2 from '../../widgets/testimonial/testimonial2';

function Index3() {
    return (
        <div>
            <Header3 />
            <Herosection2 />
            <div className='page-content'>
                <section>
                    <Container className='px-8'>
                        <Row>
                            <Col className='col-12'>
                                <Clientlogo logoitems={6} />
                            </Col>
                        </Row>
                    </Container>
                </section>
                <About />
                <Experience />
                <Testimonial2 />
                <section className="p-0">
                    <div className="container ps-5 pe-5">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-12 col-lg-6 col-xl-5">
                                {/* <AccordionDemo /> */}
                                <AccordionDemo />
                            </div>
                            <div className="col-12 col-lg-6 mb-8 mb-lg-0">
                                <Counter2 />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container pe-8 ps-8">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-12 col-lg-6 col-xl-6 mb-8 mb-lg-0 order-lg-1">
                                <div> <span className="badge badge-primary-soft p-2">
                                    <i className="la la-exclamation ic-3x rotation"></i>
                                </span>
                                    <h2 className="mt-3">Professional It Services For Individual And Companies</h2>
                                    <p className="lead mb-0">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                </div>
                                <div className="mt-5">
                                    <div className="mb-3">
                                        <div className="d-flex align-items-center">
                                            <div className="badge-primary-soft rounded p-1">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                            </div>
                                            <p className="mb-0 ms-3">Create For Designer</p>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="d-flex align-items-center">
                                            <div className="badge-primary-soft rounded p-1">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                            </div>
                                            <p className="mb-0 ms-3">Create For Developer</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-center">
                                            <div className="badge-primary-soft rounded p-1">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                            </div>
                                            <p className="mb-0 ms-3">Create For Freelancer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Col lg={6} xl={5} className="col-12">
                                <ContactForm />
                            </Col>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container pe-8 ps-8">
                        <div className="row justify-content-center text-center">
                            <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                                <div className="mb-8"> <span className="badge badge-primary-soft p-2">
                                    <i className="la la-bold ic-3x rotation" />
                                </span>
                                    <h2 className="mt-4">From Our Blog List Latest Feed</h2>
                                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                                </div>
                            </div>
                        </div>
                        {/* / .row */}
                    </div>
                    <div className="container">
                        <Blog2 />
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Index3;