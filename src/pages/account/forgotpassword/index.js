import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Pageheading from '../../../widgets/PageHeading';
import ForgotPasswordForm from '../../../widgets/account/forgotpassword';

const ForgotPassword = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {/* hero section start */}
            <section className="position-relative">
                <Pageheading foldername="Account" title="Forgot Password" />
            </section>
            {/* hero section end */}
            {/* body content start */}
            <div className="page-content">
                {/* login start */}
                <section>
                    <Container className='pe-8 ps-8'>
                        <Row className="justify-content-center">
                            <Col md={5} lg={5}>
                                <div>
                                    <div className="text-center mb-5">
                                        <h2>Forgot your password?</h2>
                                        <p>Enter your email to reset your password.</p>
                                    </div>
                                    <ForgotPasswordForm />
                                    <div className="mt-4 text-center">
                                        <Link className="link-title" to="/sign-up">
                                            Back to sign in
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* login end */}
            </div>
            {/* body content end */}
        </div>
    );
};

export default ForgotPassword;
