import React from 'react';
import { Link } from 'react-router-dom';

const Pricingplan4 = () => {
    const packages = [
        {
            type: 'Monthly',
            image: require('../../assets/images/svg/01.svg').default,
            features: ['Free Custom Domain', 'Monthly updates', 'Outstanding Support', 'Happy Customers'],
            price: 59,
        },
        {
            type: 'Yearly',
            image: require('../../assets/images/svg/02.svg').default,
            features: ['Free Custom Domain', 'Monthly updates', 'Outstanding Support', 'Happy Customers'],
            price: 89,
        },
    ];

    return (
        <div className="row align-items-center">
            <div className="col-12 col-md-12 col-lg-4 order-lg-1 mb-8 mb-lg-0">
                <div className="mb-0">
                    <span className="badge badge-primary-soft p-2">
                        <i className="la la-money ic-3x rotation" />
                    </span>
                    <h2 className="mt-3">Simple, Fair and affordable prices for all.</h2>
                    <p className="lead mb-0">
                        All types of businesses need access to development resources, so we give you the option to decide how much you need to use.
                    </p>
                </div>
            </div>
            <div className="col-12 col-md-12 col-lg-8">
                <div className="row align-items-center">
                    {packages.map((pkg, index) => (
                        <div className="col-12 col-md-6" key={index}>
                            {/* Card */}
                            <div className="card border-0 shadow">
                                {/* Body */}
                                <div className="card-body py-8 px-6">
                                    {/* Badge */}
                                    <div className="text-center mb-5">
                                        <span className="badge shadow text-dark">
                                            <span className="h6 text-uppercase">{pkg.type}</span>
                                        </span>
                                    </div>
                                    <div className="mb-5">
                                        <img className="img-fluid" src={pkg.image} alt="testimage" />
                                    </div>
                                    {/* Features */}
                                    {pkg.features.map((feature, index) => (
                                        <div className="d-flex align-items-start justify-content-between" key={index}>
                                            {/* Text */}
                                            <p>{feature}</p>
                                            {/* Check */}
                                            <div className="ms-4">
                                                <i className="la la-check text-primary font-weight-bold" />
                                            </div>
                                        </div>
                                    ))}
                                    {/* Price */}
                                    <div className="d-flex justify-content-center mt-5">
                                        <span className="h3 mb-0 mt-2">$</span>
                                        <span className="price display-3 text-primary font-w-6">{pkg.price}</span>
                                    </div>
                                    {/* Text */}
                                    <p className="text-center text-muted">Per user</p>
                                    {/* Button */}
                                    <Link to="/" className="btn btn-block btn-primary mt-5">
                                        Choose Package
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricingplan4;
