import React from 'react';
import { Card, CardBody } from 'reactstrap';

const ClientFeedbackSection = () => {
    return (
        <section className="position-relative">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-12 col-md-12 col-lg-4 mb-6 mb-lg-0 order-lg-1">
                        <div>
                            <span className="badge badge-light-soft p-2">
                                <i className="la la-users ic-3x rotation"></i>
                            </span>
                            <h2 className="mt-4 text-white">Discover Our Client Feedback</h2>
                            <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-8">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-6">
                                <Card className="p-4 bg-transparent border-primary flex-sm-row">
                                    <div className="w-50 me-sm-5 mb-3 mb-sm-0">
                                        <img alt="testimage" src={require('../../assets/images/testimonial/01.jpg')} className="shadow-primary img-fluid rounded-circle d-inline" />
                                    </div>
                                    <CardBody className="p-0">
                                        <p>Bootsland Amazing Landing Page All-in-one, clean code, Creative &amp; Modern design.</p>
                                        <div>
                                            <h5 className="text-primary d-inline">Romi Jensen</h5>
                                            <small className="text-muted font-italic">- Founder</small>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6 mt-5">
                                <Card className="p-4 bg-transparent border-success flex-sm-row">
                                    <div className="w-50 me-sm-5 mb-3 mb-sm-0">
                                        <img alt="testimage" src={require('../../assets/images/testimonial/02.jpg')} className="shadow-primary img-fluid rounded-circle d-inline" />
                                    </div>
                                    <CardBody className="p-0">
                                        <p>Bootsland Amazing Landing Page All-in-one, clean code, Creative &amp; Modern design.</p>
                                        <div>
                                            <h5 className="text-primary d-inline">Johny Stock</h5>
                                            <small className="text-muted font-italic">- Supervisor</small>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6 mt-5 mt-md-0">
                                <Card className="p-4 bg-transparent border-warning flex-sm-row">
                                    <div className="w-50 me-sm-5 mb-3 mb-sm-0">
                                        <img alt="testimage" src={require('../../assets/images/testimonial/03.jpg')} className="shadow-primary img-fluid rounded-circle d-inline" />
                                    </div>
                                    <CardBody className="p-0">
                                        <p>Bootsland Amazing Landing Page All-in-one, clean code, Creative &amp; Modern design.</p>
                                        <div>
                                            <h5 className="text-primary d-inline">Leeny Biton</h5>
                                            <small className="text-muted font-italic">- Manager</small>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6 mt-5">
                                <Card className="p-4 bg-transparent border-danger flex-sm-row">
                                    <div className="w-50 me-sm-5 mb-3 mb-sm-0">
                                        <img alt="testimage" src={require('../../assets/images/testimonial/01.jpg')} className="shadow-primary img-fluid rounded-circle d-inline" />
                                    </div>
                                    <CardBody className="p-0">
                                        <p>Bootsland Amazing Landing Page All-in-one, clean code, Creative &amp; Modern design.</p>
                                        <div>
                                            <h5 className="text-primary d-inline">Jensen Rom</h5>
                                            <small className="text-muted font-italic">- CEO</small>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ClientFeedbackSection;
