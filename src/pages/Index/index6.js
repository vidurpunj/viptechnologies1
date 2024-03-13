import React from 'react'
import Blog4 from '../../widgets/blog/blog4'
import Clientlogo from '../../widgets/common/clientlogo'
import About2 from '../../widgets/about/about2'
import AccordionDemo from '../../widgets/accordion/accordiondemo'
import Counter3 from '../../widgets/counter/counter3'
import Feature3 from '../../widgets/featurebox/feature3'
import Herosection5 from '../../widgets/herosection/heroSection5'
import PricingPlan3 from '../../widgets/pricing/pricingplan3'
import Team3 from '../../widgets/team/team3'

function Index6() {
    return (
        <div>
            <Herosection5 />
            <div className="page-content">
                <Feature3 />
                <About2 />
                <section>
                    <div className="container ps-8 pe-8">
                        <Counter3 />
                    </div>
                </section>
                <section className="custom-py-2 position-relative bg-dark parallaxie" data-bg-img="assets/images/bg/02.png">
                    <div className="container ps-8 pe-8">
                        <div className="row justify-content-center text-center">
                            <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                                <div className="mb-8"> <span className="h6 text-primary">
                                    Bootsland Team
                                </span>
                                    <h2 className="mt-3 font-w-5 text-white">Meet Our Team Of Expert</h2>
                                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                                </div>
                            </div>
                        </div>
                        {/* / .row */}
                        <Team3 />
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
                <section className="pt-0">
                    <div className="container ps-8 pe-8">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-12 col-lg-6 mb-8 mb-lg-0">
                                <img src={require(`../../assets/images/about/04.png`)} alt="testimage" className="img-fluid" />
                            </div>
                            <div className="col-12 col-lg-6 col-xl-5">
                                <AccordionDemo />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container ps-8 pe-8">
                        <div className="row align-items-end mb-8">
                            <div className="col-12 col-md-12 col-lg-5">
                                <div> <span className="h6 text-primary">
                                    Price Table
                                </span>
                                    <h2 className="mt-4 mb-0 font-w-5">Simple, Fair and affordable prices for all.</h2>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-6 ms-auto">
                                <div>
                                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                                </div>
                            </div>
                        </div>
                        <PricingPlan3 />
                    </div>
                    {/* / .container */}
                </section>
                <section className="p-0">
                    <div className="container pe-8 ps-8">
                        <div className="row">
                            <div className="col-12">
                                <Clientlogo logoitems={6} margintop={10} />
                            </div>
                        </div>
                    </div>
                </section>
                <Blog4 />

            </div>
        </div>
    )
}

export default Index6