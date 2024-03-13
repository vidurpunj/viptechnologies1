import React, { useEffect } from 'react';
import Pageheading from '../../../widgets/PageHeading';
import Infomation from '../../../widgets/career/information';
import PortfolioInfo from '../../../widgets/career/portfolio';

const Career = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {/*hero section start*/}
            <section className="position-relative">
                <Pageheading foldername="Company" title="Career" />
            </section>
            {/*hero section end*/}
            {/*body content start*/}
            <div className="page-content">
                {/*about us start*/}
                <Infomation />
                {/*about us end*/}
                {/*open position start*/}
                <PortfolioInfo />
                {/*open position end*/}
            </div>
            {/*body content end*/}
        </div>
    );
};

export default Career;
