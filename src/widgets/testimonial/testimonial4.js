import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';

const Testimonial4 = () => {
    return (
        <div className="row justify-content-center text-center">
            <div className="col">
                <OwlCarousel
                    className="owl-carousel no-pb owl-2"
                    dots={false}
                    nav={true}
                    items={1}
                    autoplay={true}
                    loop={true}

                >
                    <div className="item">
                        <div className="row justify-content-center text-center">
                            <div className="col-12 col-md-10 col-lg-8">
                                <div className="card bg-transparent border-0">
                                    <div>
                                        <img alt="testimage" src={require('../../assets/images/testimonial/01.jpg')} style={{ width: '15%' }} className="shadow-primary img-fluid rounded-circle d-inline" />
                                    </div>
                                    <div className="card-body p-0 mt-5">
                                        <p className="lead font-w-5">Bootsland Amazing Landing Page All-in-one, clean code, Crative &amp; Modern design. We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                        <div>
                                            <h5 className="text-primary d-inline mb-0">Romi Jensen</h5>
                                            <small className="text-muted font-w-5 font-italic">- Founder</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="row justify-content-center text-center">
                            <div className="col-12 col-md-10 col-lg-8">
                                <div className="card bg-transparent border-0">
                                    <div>
                                        <img alt="testimage" src={require('../../assets/images/testimonial/02.jpg')} style={{ width: '15%' }} className="shadow-primary img-fluid rounded-circle d-inline" />
                                    </div>
                                    <div className="card-body p-0 mt-5">
                                        <p className="lead font-w-5">Bootsland Amazing Landing Page All-in-one, clean code, Crative &amp; Modern design. We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                        <div>
                                            <h5 className="text-primary d-inline mb-0">Johny Stock</h5>
                                            <small className="text-muted font-w-5 font-italic">- Supervisor</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="row justify-content-center text-center">
                            <div className="col-12 col-md-10 col-lg-8">
                                <div className="card bg-transparent border-0">
                                    <div>
                                        <img alt="testimage" src={require('../../assets/images/testimonial/03.jpg')} style={{ width: '15%' }} className="shadow-primary img-fluid rounded-circle d-inline" />
                                    </div>
                                    <div className="card-body p-0 mt-5">
                                        <p className="lead font-w-5">Bootsland Amazing Landing Page All-in-one, clean code, Crative &amp; Modern design. We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                        <div>
                                            <h5 className="text-primary d-inline mb-0">Leeny Biton</h5>
                                            <small className="text-muted font-w-5 font-italic">- Manager</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    );
};

export default Testimonial4;
