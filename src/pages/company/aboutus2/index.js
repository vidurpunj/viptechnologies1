import React, { useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Memberaboutus1 from '../../../widgets/about/Memberaboutus1';
import BrandLogo from '../../../widgets/about/brands';
import Services from '../../../widgets/about/services';
import Pageheading from '../../../widgets/PageHeading';
import AccordionDemo from '../../../widgets/accordion/accordiondemo';
import Counter2 from '../../../widgets/counter/counter2';
import Team1 from '../../../widgets/team/team1';

const Aboutus2 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <section className="position-relative">
                <Pageheading foldername="Company" title="About Us" />
            </section>
            {/*hero section end*/}
            {/*body content start*/}
            <div className="page-content">
                {/*about start*/}
                <Memberaboutus1 />
                {/*about end*/}
                {/*counter start*/}
                <section>
                    <Container>
                        <Row className="align-items-center justify-content-between">
                            <Col xs="12" lg="6" xl="5">
                                <AccordionDemo />
                            </Col>
                            <Col xs="12" lg="6" className="mb-8 mb-lg-0">
                                <Counter2 />
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/*counter end*/}
                {/*services start*/}
                <Services />
                {/*services end*/}
                {/*team start*/}
                <Team1 />
                {/*team end*/}
                {/*client start*/}
                <section className="text-center">
                    <Container>
                        <Row className="justify-content-center text-center">
                            <Col xs="12" md="12" lg="8" className="mb-8 mb-lg-0">
                                <div className="mb-8">
                                    <span className="badge badge-primary-soft p-2 font-w-6">Brand Logo</span>
                                    <h2 className="mt-3">Market leaders use app to enrich their brand &amp; business.</h2>
                                </div>
                            </Col>
                        </Row>
                        <BrandLogo />
                    </Container>
                </section>
                {/*client end*/}
            </div>
            {/*body content end*/}
        </div>
    );
};

export default Aboutus2;
