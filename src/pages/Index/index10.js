import React from 'react';
import Footer1 from '../../Layout/Footer/Footer1';
import Header3 from '../../Layout/Header/Header3';
import BlogLight from '../../widgets/blog/blogLight';
import AboutSection from '../../widgets/about/aboutLight';
import ExperienceSection from '../../widgets/about/expLight';
import AccordionDemoLight from '../../widgets/accordion/accordionDemoLight';
import Counter5 from '../../widgets/counter/counter5';
import FeatureSection from '../../widgets/featurebox/featureSection';
import ContactFormLight from '../../widgets/form/ContactFormLight';
import Herosection10 from '../../widgets/herosection/heroSection10';
import PricingSection from '../../widgets/pricing/pricingLight';
import ClientFeedbackSection from '../../widgets/testimonial/testimonialLight';

function Index10() {
    return (

        <div className='bg-dark'>
            <Header3 />
            <Herosection10 />
            <div className='page-content'>
                <FeatureSection />
                <AboutSection />
                <Counter5 />
                <ExperienceSection />
                <ClientFeedbackSection />
                <section>
                    <div className="container pe-8 ps-8">
                        <div className="row align-items-center justify-content-between">
                            <AccordionDemoLight />
                            <ContactFormLight />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                                <div className="mb-8"> <span className="badge badge-light-soft p-2">
                                    <i className="la la-money ic-3x rotation"></i>
                                </span>
                                    <h2 className="mt-4 text-white">Simple, Fair and affordable prices for all.</h2>
                                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-12">
                                <PricingSection />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container ps-4 pe-4">
                        <div className="row align-items-end mb-5">
                            <div className="col-12 col-md-12 col-lg-4">
                                <div> <span className="badge badge-light-soft p-2">
                                    <i className="la la-bold ic-3x rotation"></i>
                                </span>
                                    <h2 className="mt-4 mb-0 text-white">From Our Blog List Latest Feed</h2>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-6 ms-auto">
                                <div>
                                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                                </div>
                            </div>
                        </div>
                        <BlogLight />
                    </div>
                </section>

            </div>
            <Footer1 />
        </div>
    )
}

export default Index10;