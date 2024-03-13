import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Pageheading from '../../../widgets/PageHeading';
import SigninForm2 from '../../../widgets/account/signin2';

const SignIn2 = () => {
    return (
        <div>
            {/*hero section start*/}
            <section className="position-relative">
                <Pageheading foldername="Account" title="Login 2" />
            </section>
            {/*hero section end*/}
            {/*body content start*/}
            <div className="page-content">
                {/*login start*/}
                <section>
                    <Container className='pe-8 ps-8'>
                        <Row className="align-items-center">
                            <Col lg="7" className="col-12">
                                <img className="img-fluid" src={require(`../../../assets/images/login.png`)} alt="testimage" />
                            </Col>
                            <Col lg="5" className="col-12">
                                <SigninForm2 />
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

export default SignIn2;
