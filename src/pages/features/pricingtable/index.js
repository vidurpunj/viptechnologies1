import React, { useEffect } from 'react';
import Pageheading from '../../../widgets/PageHeading';
import Pricingplan1 from '../../../widgets/pricing/pricingplan1';
import Pricingplan2 from '../../../widgets/pricing/pricingplan2';
import PricingPlan3 from '../../../widgets/pricing/pricingplan3';
import Pricingplan4 from '../../../widgets/pricing/pricingplan4';
import PriceTable5 from '../../../widgets/pricing/pricingplan5';


const PricingTable = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {/* hero section start */}
            <section className="position-relative">
                <Pageheading foldername={"Features"} title={"Price Table"} />
            </section>
            {/* hero section end */}
            {/* body content start */}
            <div className="page-content">
                {/* pricing start */}
                <section>
                    <div className="container-fluid">
                        <Pricingplan1 />
                    </div>
                </section>
                {/* pricing end */}
                {/* pricing start */}
                <section>
                    <div className="container">
                        <Pricingplan2 />
                    </div>
                </section>
                {/* pricing end */}
                {/* pricing start */}
                <section>
                    <div className="container">
                        <div className="row align-items-end mb-8">
                            <div className="col-12 col-md-12 col-lg-5">
                                <div> <span className="h6 text-primary">
                                    Price Table
                                </span>
                                    <h2 className="mt-4 mb-0">Simple, Fair and affordable prices for all.</h2>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-6 ml-auto">
                                <div>
                                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                                </div>
                            </div>
                        </div>
                        <PricingPlan3 />
                    </div>
                </section>
                {/* pricing end */}
                {/* pricing start */}
                <section>
                    <div className="container">
                        <Pricingplan4 />
                    </div>
                </section>
                {/* pricing end */}
                {/* pricing start */}
                <PriceTable5 />
                {/* pricing end */}
            </div>
            {/* body content end */}
        </div>
    );
};

export default PricingTable;
