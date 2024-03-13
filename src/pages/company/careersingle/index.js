import React, { useEffect } from 'react';
import Pageheading from '../../../widgets/PageHeading';
import RegistrationForm from '../../../widgets/career/registrationform';

const CareerSingle = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {/*hero section start*/}
            <section className="position-relative">
                <Pageheading foldername="Company" title="Career Single" />
            </section>
            {/*hero section end*/}
            {/*body content start*/}
            <RegistrationForm />
            {/*body content end*/}
        </div>
    );
};

export default CareerSingle;
