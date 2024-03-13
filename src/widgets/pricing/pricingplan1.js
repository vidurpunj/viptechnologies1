import React from 'react';
import { Link } from 'react-router-dom';

const Pricingplan1 = () => {
    const pricingData = [
        {
            badge: 'Monthly',
            price: '59',
            interval: '/mo',
            features: [
                'Responsive landing pages',
                'Free Custom Domain',
                'Flexible, simple license',
                'Monthly updates',
                'Outstanding Support',
                'Happy Customers'
            ]
        },
        {
            badge: 'Yearly',
            price: '89',
            interval: '/mo',
            features: [
                'Responsive landing pages',
                'Free Custom Domain',
                'Flexible, simple license',
                'Monthly updates',
                'Outstanding Support',
                'Happy Customers'
            ]
        }
    ];

    return (
        <div className="row align-items-center">
            <div className="col-12 col-md-12 col-lg-4 order-lg-1 mb-8 mb-lg-0">
                <div className="mb-0">
                    <span className="badge badge-primary-soft p-2 font-w-6">
                        Price Table
                    </span>
                    <h2 className="mt-3">
                        Simple, Fair and affordable prices for all.
                    </h2>
                    <p className="lead mb-0">
                        All types of businesses need access to development resources, so we
                        give you the option to decide how much you need to use.
                    </p>
                </div>
            </div>
            <div className="col-12 col-md-12 col-lg-8">
                <div className="row align-items-center">
                    {pricingData.map((plan, index) => (
                        <div className={`col-12 col-md-6 `} key={index}>
                            <div className={`card border-0 ${index % 2 === 0 ? '' : 'shadow'}`}>
                                <div className="card-body py-11 px-6">
                                    <div className="text-center mb-5">
                                        <span className="badge shadow text-dark">
                                            <span className="h6 text-uppercase">
                                                {plan.badge}
                                            </span>
                                        </span>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <span className="h2 mb-0 mt-2">$</span>
                                        <span className="price display-2">{plan.price}</span>
                                        <span className="h2 align-self-end mb-1">{plan.interval}</span>
                                    </div>
                                    <p className="text-center text-muted mb-6 mb-md-8">
                                        Per user
                                    </p>
                                    {plan.features.map((feature, index) => (
                                        <div className="d-flex align-items-start justify-content-between" key={index}>
                                            <p>{feature}</p>
                                            <div className="ms-4">
                                                <i className="la la-check text-primary font-weight-bold" />
                                            </div>
                                        </div>
                                    ))}
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

export default Pricingplan1;
