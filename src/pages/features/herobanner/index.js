import React, { useEffect } from 'react';
import Herosection from '../../../widgets/herosection/herosection';
import Herosection1 from '../../../widgets/herosection/heroSection1';
import Herosection3 from '../../../widgets/herosection/heroSection3';
import Herosection2 from '../../../widgets/herosection/hersection2';
import Herosection4 from '../../../widgets/herosection/heroSection4';
import Herosection5 from '../../../widgets/herosection/heroSection5';
import Herosection6 from '../../../widgets/herosection/heroSection6';
import Herosection7 from '../../../widgets/herosection/heroSection7';
import Herosection8 from '../../../widgets/herosection/heroSection8';
import Pageheading from '../../../widgets/PageHeading';


const HeroBanner = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {/* hero section start */}
            <section className="position-relative">
                <Pageheading foldername={"Features"} title={"Hero Banner"} />
            </section>
            {/* hero section end */}
            {/* body content start */}
            <div className="page-content">
                {/* hero section start */}
                <section>
                    <div className="container">
                        <Herosection />
                    </div>
                </section>
                {/* hero section end */}
                {/* hero section start */}
                <Herosection1 />
                {/* hero section end */}
                {/* hero section start */}
                <Herosection2 />
                {/* hero section end */}
                {/* hero section start */}
                <Herosection3 />
                {/* hero section end */}
                {/* hero section start */}
                <Herosection4 />
                {/* hero section end */}
                {/* hero section start */}
                <Herosection5 />
                {/* hero section end */}
                {/* hero section start */}
                <section>
                    <div className="container">
                        <Herosection6 />
                    </div>
                </section>
                {/* hero section end */}
                {/* hero section start */}
                <section>
                    <div className="container">
                        <Herosection7 />
                    </div>
                </section>
                {/* hero section end */}
                {/* hero section start */}
                <section>
                    <div className="container">
                        <Herosection8 />
                    </div>
                </section>
                {/* hero section end */}
            </div>
            {/* body content end */}
        </div>
    );
};

export default HeroBanner;
