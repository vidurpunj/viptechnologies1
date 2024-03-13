import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';

const pricingPlans = [
    {
        name: 'Basic',
        features: [
            'Free Custom Domain',
            'Monthly updates',
            'Outstanding Support',
            'Happy Customers',
        ],
        price: '29',
        buttonText: 'Choose Package',
        buttonColor: 'btn-outline-primary',
    },
    {
        name: 'Standard',
        features: [
            'Free Custom Domain',
            'Monthly updates',
            'Outstanding Support',
            'Happy Customers',
        ],
        price: '59',
        buttonText: 'Choose Package',
        buttonColor: 'btn-outline-light',
    },
    {
        name: 'Extended',
        features: [
            'Free Custom Domain',
            'Monthly updates',
            'Outstanding Support',
            'Happy Customers',
        ],
        price: '89',
        buttonText: 'Choose Package',
        buttonColor: 'btn-outline-primary',
    },
];

const PricingPlan3 = () => {
    return (
        <div className="row align-items-center">
            {pricingPlans.map((plan, index) => (
                <div className="col-12 col-lg-4 mb-8 mb-lg-0" key={index}>
                    <Card className={index === 1 ? 'bg-primary shadow border-0' : 'border-0 hover-translate'}>
                        <CardBody className={index === 1 ? 'py-11 px-6 text-light' : 'py-11 px-6'}>
                            {plan.features.map((feature, featureIndex) => (
                                <div className="d-flex align-items-start justify-content-between" key={featureIndex}>
                                    <p className={index === 1 ? 'text-light' : ''}>{feature}</p>
                                    <div className="ms-4">
                                        <i className={index === 1 ? 'la la-check text-light font-weight-bold' : 'la la-check text-primary font-weight-bold'} />
                                    </div>
                                </div>
                            ))}
                            <div className="text-center my-5">
                                <span className={index === 1 ? 'badge shadow badge-light bg-light text-dark' : 'badge shadow badge-primary bg-primary'}>
                                    <span className="h6 text-uppercase">{plan.name}</span>
                                </span>
                            </div>

                            <div className="d-flex justify-content-center">
                                <span className={index === 1 ? 'h2 mb-0 mt-2 text-white' : 'h2 mb-0 mt-2'}>
                                    $
                                </span>
                                <span className={index === 1 ? 'price display-2 text-white' : 'price display-2'}>
                                    {plan.price}
                                </span>
                                <span className={index === 1 ? 'h2 align-self-end' : 'h2 align-self-end text-primary'}>
                                    /mo
                                </span>
                            </div>
                            <p className={index === 1 ? 'text-center text-light mb-6 mb-md-8' : 'text-center text-muted mb-6 mb-md-8'}>
                                Per user
                            </p>
                            <Link to="/" className={`btn btn-block ${plan.buttonColor} mt-5`}>
                                {plan.buttonText}
                            </Link>
                        </CardBody>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default PricingPlan3;
