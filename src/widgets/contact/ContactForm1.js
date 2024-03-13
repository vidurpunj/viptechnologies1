import React from 'react';
import { Button, Col, Form, FormGroup, Input } from 'reactstrap';

const ContactForm1 = () => {
    return (
        <div className="row justify-content-center text-center">
            <div className="col-12 col-lg-10">
                <Form id="contact-form" className="row" method="post" action="php/contact.php">
                    <div className="messages" />
                    <FormGroup className="col-md-6">
                        <Input
                            id="form_name"
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="First Name"
                            required
                            data-error="Name is required."
                        />
                        <div className="help-block with-errors" />
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Input
                            id="form_name1"
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Last Name"
                            required
                            data-error="Name is required."
                        />
                        <div className="help-block with-errors" />
                    </FormGroup>
                    <FormGroup className="col-md-12">
                        <Input
                            id="form_email"
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            required
                            data-error="Valid email is required."
                        />
                        <div className="help-block with-errors" />
                    </FormGroup>
                    <FormGroup className="col-md-12">
                        <Input
                            id="form_phone"
                            type="tel"
                            name="phone"
                            className="form-control"
                            placeholder="Phone"
                            required
                            data-error="Phone is required"
                        />
                        <div className="help-block with-errors" />
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Input type="select" className="form-control">
                            <option>- Select Service</option>
                            <option>Consulting</option>
                            <option>Finance</option>
                            <option>Marketing</option>
                            <option>Avanced Analytics</option>
                            <option>planning</option>
                        </Input>
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Input
                            id="form_subject"
                            type="tel"
                            name="subject"
                            className="form-control"
                            placeholder="Subject"
                            required
                            data-error="Subject is required"
                        />
                        <div className="help-block with-errors" />
                    </FormGroup>
                    <FormGroup className="col-md-12">
                        <Input
                            id="form_message"
                            type="textarea"
                            name="message"
                            className="form-control"
                            placeholder="Message"
                            rows={4}
                            required
                            data-error="Please, leave us a message."
                        />
                        <div className="help-block with-errors" />
                    </FormGroup>
                    <Col md="12" className="text-center mt-4">
                        <Button color="primary">
                            <span>Send Messages</span>
                        </Button>
                    </Col>
                </Form>
            </div>
        </div>
    );
};

export default ContactForm1;
