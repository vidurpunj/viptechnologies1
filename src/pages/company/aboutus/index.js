import React, { useEffect } from 'react';
import Blog1 from '../../../widgets/blog/blog1';
import Pageheading from '../../../widgets/PageHeading';
import Memberaboutus from '../../../widgets/about/Memberaboutus';
import FeatureServices from '../../../widgets/featurebox/services';
import Testimonial1 from '../../../widgets/testimonial/testimonial1';


const Aboutus = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <section className="position-relative">
                <Pageheading foldername={"Company"} title={"About Us"} />
            </section>
            <div className="page-content">
                {/*about start*/}
                <section>
                    <div className="container">
                        <Memberaboutus />
                    </div>
                </section>
                {/*about end*/}
                {/*feature start*/}
                <section>
                    <div className="container">
                        <FeatureServices bgshadow="bg-white shadow" />
                    </div>
                </section>
                {/*feature end*/}
                {/*testimonial start*/}
                <Testimonial1 />
                {/*testimonial end*/}
                {/*blog start*/}
                <section>
                    <div className="container">
                        <Blog1 />
                    </div>
                </section>
                {/*blog end*/}
            </div>
        </div>
    );
};

export default Aboutus;
