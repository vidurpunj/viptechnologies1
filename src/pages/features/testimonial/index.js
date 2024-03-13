import React, { useEffect } from 'react';
import Pageheading from '../../../widgets/PageHeading';
import Testimonial1 from '../../../widgets/testimonial/testimonial1';
import Testimonial2 from '../../../widgets/testimonial/testimonial2';
import Testimonial3 from '../../../widgets/testimonial/testimonial3';
import Testimonial4 from '../../../widgets/testimonial/testimonial4';


const TestimonialDemo = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {/*hero section start*/}
            <section className="position-relative">
                <Pageheading foldername={"Features"} title={"Testimonial"} />
            </section>
            {/*hero section end*/}
            {/*body content start*/}
            <div className="page-content">
                {/*testimonial start*/}
                <Testimonial1 />

                {/*testimonial end*/}
                {/*testimonial start*/}
                <Testimonial2 />
                {/*testimonial end*/}
                {/*testimonial start*/}
                <Testimonial3 />
                {/*testimonial end*/}
                {/*testimonial start*/}
                <section className="custom-py-2 position-relative bg-dark">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                                <div className="mb-8">
                                    <span className="h6 text-primary">
                                        Testimonial
                                    </span>
                                    <h2 className="mt-3 font-w-5 mb-0 text-white">Discover Our Client Feedback</h2>
                                </div>
                            </div>
                        </div>
                        {/* / .row */}
                        <Testimonial4 />
                    </div>
                    <div className="shape-1" style={{ height: '200px', overflow: 'hidden' }}>
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
                {/*testimonial end*/}
            </div>
            {/*body content end*/}
        </div>
    );
};

export default TestimonialDemo;
