import React from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const ContactForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="shadow rounded p-5">
            <img className="img-fluid mb-8" src={require(`../../assets/images/about/04.png`)} alt="testimage" />
            <Form id="contact-form" onSubmit={handleSubmit}>
                <div className="messages"></div>
                <Row form>
                    <Col sm={6}>
                        <FormGroup>
                            <Label for="InputName1" className="text-muted">First Name</Label>
                            <Input type="text" className="form-control input-1" id="InputName1" placeholder="First Name" required />
                            <div className="help-block with-errors"></div>
                        </FormGroup>
                    </Col>
                    <Col sm={6}>
                        <FormGroup>
                            <Label for="InputName2" className="text-muted">Last Name</Label>
                            <Input type="text" className="form-control input-1" id="InputName2" placeholder="Last Name" required />
                            <div className="help-block with-errors"></div>
                        </FormGroup>
                    </Col>
                    <Col sm={12}>
                        <FormGroup>
                            <Label for="InputEmail1" className="text-muted">Email address</Label>
                            <Input type="email" className="form-control input-1" id="InputEmail1" placeholder="Enter email" required />
                            <div className="help-block with-errors"></div>
                        </FormGroup>
                    </Col>
                    <Col sm={12}>
                        <FormGroup>
                            <Label for="InputPassword1" className="text-muted">Password</Label>
                            <Input type="password" className="form-control input-1" id="InputPassword1" placeholder="Password" />
                        </FormGroup>
                    </Col>
                </Row>
                <div className="col-12 mt-5">
                    <Button color="primary">Download</Button>
                </div>
            </Form>
        </div>
    );
};

export default ContactForm;

