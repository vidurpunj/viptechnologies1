import React, { useEffect } from 'react'
import Header3 from '../../Layout/Header/Header3'
import About1 from '../../widgets/about/about1'
import Blog2 from '../../widgets/blog/blog2'
import Counter1 from '../../widgets/counter/counter1'
import FeatureServices from '../../widgets/featurebox/services'
import Skillbox from '../../widgets/featurebox/skillbox'
import Herosection1 from '../../widgets/herosection/heroSection1'
import Pricingplan1 from '../../widgets/pricing/pricingplan1'
import Team1 from '../../widgets/team/team1'

function Index2() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Herosection1 />
            <Header3 />
            <div className="page-content">
                <section className="custom-pb-3 bg-primary position-relative">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-12 col-md-12 col-lg-8">
                                <div>
                                    <h2 className="text-white font-w-5">Creative Design And Creative Services</h2>
                                    <p className="lead mb-0 text-light">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                                </div>
                            </div>
                        </div>
                        {/* / .row */}
                    </div>
                    <div className="shape-1 bottom" style={{ height: '200px', overflow: 'hidden' }}>
                        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                            <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#fff' }} />
                        </svg>
                    </div>
                </section>
                <section className="mt-n15 p-0">
                    <div className="container">
                        <FeatureServices />
                    </div>
                </section>            </div>
            <section>
                <div className="container">
                    <Counter1 />
                </div>
            </section>
            <section className="pt-0">
                <About1 />
            </section>
            <Skillbox />
            <Team1 />
            <section>
                <div className="container-fluid">
                    <Pricingplan1 />
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                            <div className="mb-8"> <span className="badge badge-primary-soft p-2 font-w-6">
                                Latest News
                            </span>
                                <h2 className="mt-3 font-w-6">From Our Blog List Latest Feed</h2>
                                <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                            </div>
                        </div>
                    </div>
                    {/* / .row */}
                    <Blog2 />
                </div>
            </section>
        </div>
    )
}

export default Index2