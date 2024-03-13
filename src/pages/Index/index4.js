import React from 'react'
import Header3 from '../../Layout/Header/Header3'
import HowItWorksSection from '../../widgets/about/howItWork'
import Blog2 from '../../widgets/blog/blog2'
import Counter4 from '../../widgets/counter/counter4'
import FeatureServices from '../../widgets/featurebox/services'
import Herosection3 from '../../widgets/herosection/heroSection3'
import Pricingplan1 from '../../widgets/pricing/pricingplan1'
import Team1 from '../../widgets/team/team1'

function Index4() {

    return (
        <div>
            <Header3 />
            <Herosection3 />
            <div className='page-content'>
                <section>
                    <div className="container pe-8 ps-8">
                        <div className="row justify-content-center text-center">
                            <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                                <div className="mb-8"> <span className="badge badge-primary-soft p-2 font-w-6">
                                    What We Offerd
                                </span>
                                    <h2 className="mt-3 font-w-5">Creative Design And Creative Services</h2>
                                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                                </div>
                            </div>
                        </div>
                        {/* / .row */}
                        <FeatureServices />
                    </div>
                </section>
                <section>
                    <div className="container pe-8 ps-8">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-12 col-lg-6 mb-8 mb-lg-0">
                                <img src={require(`../../assets/images/about/05.png`)} alt="testimage" className="img-fluid" />
                            </div>
                            <div className="col-12 col-lg-6 col-xl-5">
                                <div> <span className="badge badge-primary-soft p-2 font-w-6">
                                    About Bootsland
                                </span>
                                    <h2 className="mt-3 font-w-5">Bootsland Crafting Creative And Beautiful Experience</h2>
                                    <p className="lead mb-0">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                </div>
                                <Counter4 />
                            </div>
                        </div>
                    </div>
                </section>
                <HowItWorksSection />
                <Team1 />
                <section>
                    <div className="container-fluid">
                        <Pricingplan1 />
                    </div>
                </section>
                <section>
                    <div className="container pe-4 ps-4">
                        <div className="row justify-content-center text-center">
                            <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                                <div className="mb-8"> <span className="badge badge-primary-soft p-2 font-w-6">
                                    Latest News
                                </span>
                                    <h2 className="mt-3 font-w-5">From Our Blog List Latest Feed</h2>
                                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                                </div>
                            </div>
                        </div>
                        {/* / .row */}
                        <Blog2 />
                    </div>
                </section>           </div>
        </div>
    )
}

export default Index4