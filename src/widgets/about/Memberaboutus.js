import React from 'react';

const Memberaboutus = () => {
    return (
        <div className="row align-items-center justify-content-between">
            <div className="col-12 col-lg-6 mb-6 mb-lg-0 order-lg-1">
                <div className="row align-items-center">
                    <div className="col-6">
                        <img src={require(`../../assets/images/about/10.jpg`)} className="img-fluid rounded shadow-lg" alt="..." />
                    </div>
                    <div className="col-6">
                        <img src={require(`../../assets/images/about/12.jpg`)} className="img-fluid rounded shadow-lg mt-10" alt="..." />
                    </div>
                    <div className="col-10 ms-auto me-auto mt-n11">
                        <img src={require(`../../assets/images/about/11.jpg`)} className="img-fluid rounded shadow-lg" alt="..." />
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-5">
                <div>
                    <span className="badge badge-primary-soft p-2">
                        <i className="la la-exclamation ic-3x rotation" />
                    </span>
                    <h2 className="mt-3 font-w-5">VIPTechnologies is small team crafting beautiful experience</h2>
                    <p className="lead">We use the latest technologies like React, Ruby on Rails.</p>
                    <p className="mb-0">We use the latest technologies to blend web and app experiences seamlessly.</p>
                </div>
                {/*<Counter4 />*/}
            </div>
        </div>
    );
};

export default Memberaboutus;
