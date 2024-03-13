import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Container, Row } from 'reactstrap';

const PackageCard = ({ name, price, features, cardBgColor, buttonBgColor }) => {
    return (
        <div className="col-12 col-lg-4 mb-8 mb-lg-0">
            <Card className={`bg-transparent border-0 hover-translate ${cardBgColor}`}>
                <CardBody className="py-11 px-6">
                    <div className="text-center mb-5">
                        <span className="badge bg-light text-dark shadow">
                            <span className="h6 text-uppercase">{name}</span>
                        </span>
                    </div>
                    <div className="d-flex justify-content-center text-white">
                        <span className="h2 mb-0 mt-2">$</span>
                        <span className="price display-2">{price}</span>
                        <span className="h2 align-self-end mb-1">/mo</span>
                    </div>
                    <p className="text-center text-muted mb-6 mb-md-8">Per user</p>
                    {features.map((feature, index) => (
                        <div className="d-flex align-items-start justify-content-between" key={index}>
                            <p>{feature}</p>
                            <div className="ms-4">
                                <i className="la la-check text-primary fw-bold"></i>
                            </div>
                        </div>
                    ))}
                    <Link to="/" className={`btn btn-block ${buttonBgColor}`}>
                        Choose Package
                    </Link>
                </CardBody>
            </Card>
        </div>
    );
};

const PricingSection = () => {
    return (
        <section>
            <Container>
                <Row className="align-items-center">
                    <PackageCard
                        name="Basic"
                        price={29}
                        features={['Responsive landing pages', 'Free Custom Domain', 'Flexible, simple license', 'Monthly updates', 'Outstanding Support', 'Happy Customers']}
                        cardBgColor="bg-transparent"
                        buttonBgColor="btn-primary"
                    />
                    <PackageCard
                        name="Standard"
                        price={59}
                        features={['Responsive landing pages', 'Free Custom Domain', 'Flexible, simple license', 'Monthly updates', 'Outstanding Support', 'Happy Customers']}
                        cardBgColor="bg-primary"
                        buttonBgColor="btn-dark"
                    />
                    <PackageCard
                        name="Extended"
                        price={89}
                        features={['Responsive landing pages', 'Free Custom Domain', 'Flexible, simple license', 'Monthly updates', 'Outstanding Support', 'Happy Customers']}
                        cardBgColor="bg-transparent"
                        buttonBgColor="btn-primary"
                    />
                </Row>
            </Container>
        </section>
    );
};

export default PricingSection;
