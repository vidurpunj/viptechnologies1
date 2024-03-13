import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col } from 'reactstrap';

const Pricingplan2 = () => {
    const pricingPlans = [
        {
            badge: 'Basic',
            price: '29',
            features: [
                'Responsive landing pages',
                'Free Custom Domain',
                'Flexible, simple license',
                'Monthly updates',
                'Outstanding Support',
                'Happy Customers'
            ],
            link: '/'
        },
        {
            badge: 'Standard',
            price: '59',
            features: [
                'Responsive landing pages',
                'Free Custom Domain',
                'Flexible, simple license',
                'Monthly updates',
                'Outstanding Support',
                'Happy Customers'
            ],
            link: '/'
        },
        {
            badge: 'Extended',
            price: '89',
            features: [
                'Responsive landing pages',
                'Free Custom Domain',
                'Flexible, simple license',
                'Monthly updates',
                'Outstanding Support',
                'Happy Customers'
            ],
            link: '/'
        }
    ];

    return (
        <div className="row align-items-center">
            {pricingPlans.map((plan, index) => (
                <Col key={index} xs={12} lg={4} className="mb-8 mb-lg-0">
                    <Card className="border-0 hover-translate">
                        <CardBody className="py-11 px-6">
                            <div className="text-center mb-5">
                                <span className="badge shadow">
                                    <span className="h6 text-uppercase text-dark">{plan.badge}</span>
                                </span>
                            </div>
                            <div className="d-flex justify-content-center">
                                <span className="h2 mb-0 mt-2">$</span>
                                <span className="price display-2">{plan.price}</span>
                                <span className="h2 align-self-end mb-1">/mo</span>
                            </div>
                            <p className="text-center text-muted mb-6 mb-md-8">Per user</p>
                            {plan.features.map((feature, index) => (
                                <div key={index} className="d-flex align-items-start justify-content-between">
                                    <p>{feature}</p>
                                    <div className="ms-4">
                                        <i className="la la-check text-primary font-weight-bold" />
                                    </div>
                                </div>
                            ))}
                            <Link to={plan.link} className="btn btn-block btn-primary mt-5">
                                Choose Package
                            </Link>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </div>
    );
};

export default Pricingplan2;
