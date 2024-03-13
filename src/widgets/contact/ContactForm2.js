import React from 'react';
import { Button, Col, Form, FormGroup, Input, Row } from 'reactstrap';

const ContactForm2 = () => {
    return (
        <Form id="contact-form" method="post" action="php/contact.php">
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Input
                            type="text"
                            name="name"
                            id="form_name"
                            placeholder="First Name"
                            required
                            data-error="Name is required."
                        />
                        <div className="help-block with-errors" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Input
                            type="text"
                            name="name"
                            id="form_name1"
                            placeholder="Last Name"
                            required
                            data-error="Name is required."
                        />
                        <div className="help-block with-errors" />
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup>
                        <Input
                            type="email"
                            name="email"
                            id="form_email"
                            placeholder="Email"
                            required
                            data-error="Valid email is required."
                        />
                        <div className="help-block with-errors" />
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup>
                        <Input
                            type="tel"
                            name="phone"
                            id="form_phone"
                            placeholder="Phone"
                            required
                            data-error="Phone is required"
                        />
                        <div className="help-block with-errors" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Input type="select" name="service" className="form-control">
                            <option>- Select Service</option>
                            <option>Consulting</option>
                            <option>Finance</option>
                            <option>Marketing</option>
                            <option>Advanced Analytics</option>
                            <option>Planning</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Input
                            type="tel"
                            name="subject"
                            id="form_subject"
                            placeholder="Subject"
                            required
                            data-error="Subject is required"
                        />
                        <div className="help-block with-errors" />
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup>
                        <Input
                            type="textarea"
                            name="message"
                            id="form_message"
                            placeholder="Message"
                            rows={4}
                            required
                            data-error="Please, leave us a message."
                        />
                        <div className="help-block with-errors" />
                    </FormGroup>
                </Col>
                <Col md={12} className="mt-4">
                    <Button color="primary"><span>Send Message</span></Button>
                </Col>
            </Row>
        </Form>
    );
};

export default ContactForm2;
