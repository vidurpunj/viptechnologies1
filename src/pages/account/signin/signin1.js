import React, { useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Pageheading from '../../../widgets/PageHeading';
import SigninForm from '../../../widgets/account/signin';

const SignIn1 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {/*hero section start*/}
            <section className="position-relative">
                <Pageheading foldername="Account" title="Login" />
            </section>
            {/*hero section end*/}
            {/*body content start*/}
            <div className="page-content">
                {/*login start*/}
                <section>
                    <Container className='pe-8 ps-8'>
                        <Row className="justify-content-center">
                            <Col sm={12} md={5} lg={5} className=''>
                                <SigninForm />
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/*login end*/}
            </div>
            {/*body content end*/}
        </div>
    );
}

export default SignIn1;
