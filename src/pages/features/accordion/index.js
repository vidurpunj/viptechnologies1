import React, { useEffect } from 'react';
import Pageheading from '../../../widgets/PageHeading';
import AccordionDemo from '../../../widgets/accordion/accordiondemo';

const FeaturesAccordion = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {/*hero section start*/}
            <section className="position-relative">
                <Pageheading foldername={"Features"} title={"Accordion"} />
            </section>
            {/*hero section end*/}
            {/*body content start*/}
            <div className="page-content">
                {/*accordion start*/}
                <section>
                    <div className="container ps-8 pe-8">
                        <div className="row">
                            <div className="col-12">
                                <AccordionDemo />
                            </div>
                        </div>
                    </div>
                </section>
                {/*accordion end*/}
            </div>
            {/*body content end*/}
        </div>
    );
};

export default FeaturesAccordion;
