import React from 'react';
import icon1 from '../../assets/images/icon/01.svg';
import icon2 from '../../assets/images/icon/02.svg';
import icon3 from '../../assets/images/icon/03.svg';
import icon4 from '../../assets/images/icon/04.svg';
import icon5 from '../../assets/images/icon/05.svg';

const FeatureSection = () => {
    return (
        <section className="pt-0">
            <div className="container ps-8 pe-8">
                <div className="row align-items-end">
                    <div className="col-lg-4 col-md-6 mb-8 mb-lg-0 text-white">
                        <div>
                            <span className="badge badge-light-soft p-2">
                                <i className="la la-cubes ic-3x rotation"></i>
                            </span>
                            <h2 className="mt-3 mb-0">One Platform, Deep Insight Why Choose Bootsland</h2>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div>
                            <div className="d-flex align-items-center mb-4">
                                <div className="me-3">
                                    <img className="img-fluid" src={icon1} alt="testimage" />
                                </div>
                                <h5 className="m-0 text-light">App Development</h5>
                            </div>
                            <p className="mb-0">Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-6 mt-md-0">
                        <div>
                            <div className="d-flex align-items-center mb-4">
                                <div className="me-3">
                                    <img className="img-fluid" src={icon2} alt="testimage" />
                                </div>
                                <h5 className="m-0 text-light">Clean Code</h5>
                            </div>
                            <p className="mb-0">Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-6">
                        <div>
                            <div className="d-flex align-items-center mb-4">
                                <div className="me-3">
                                    <img className="img-fluid" src={icon3} alt="testimage" />
                                </div>
                                <h5 className="m-0 text-light">Software Development</h5>
                            </div>
                            <p className="mb-0">Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-6">
                        <div>
                            <div className="d-flex align-items-center mb-4">
                                <div className="me-3">
                                    <img className="img-fluid" src={icon4} alt="testimage" />
                                </div>
                                <h5 className="m-0 text-light">Easy to customize</h5>
                            </div>
                            <p className="mb-0">Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-6">
                        <div>
                            <div className="d-flex align-items-center mb-4">
                                <div className="me-3">
                                    <img className="img-fluid" src={icon5} alt="testimage" />
                                </div>
                                <h5 className="m-0 text-light">24/7 Support</h5>
                            </div>
                            <p className="mb-0">Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeatureSection;
