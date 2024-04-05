import React from 'react';
import {Button, Col, Form, FormGroup, Input} from 'reactstrap';
import {useState} from 'react';
import axios from "axios";
import {toast} from "react-toastify";

const ContactForm1 = () => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [service, setService] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = () => {
        const apiUrl = `${window.env.REACT_APP_API}/contact_us/create`;
        const postData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            service: service,
            subject: subject,
            message: message,
        }
        console.log(postData);
        console.log('inside the handle submit method');
        axios.post(apiUrl, postData)
            .then((response) => {
                if (response.data.status === 500) {
                    toast.error(response.data.error);
                } else if (response.data.status === 200) {
                    toast.success(response.data.message);
                    // Reset form fields if needed
                    this.setState({
                        // firstName: "",
                        // lastName: "",
                        // email: "",
                        // phone: "",
                        // service: "",
                        // subject: "",
                        // message: "",
                    });
                }
            })
            .catch((error) => {

            });
    }
    return (
        <div className="row justify-content-center text-center">
            <div className="col-12 col-lg-10">
                <Form id="contact-form" className="row" method="post" onSubmit={e => e.preventDefault()}>
                    <div className="messages"/>
                    <FormGroup className="col-md-6">
                        <Input
                            id="form_name"
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="First Name"
                            required
                            data-error="Name is required."
                            onChange={(e) => setfirstName(e.target.value)}
                        />
                        <div className="help-block with-errors"/>
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
                            onChange={(e) => setlastName(e.target.value)}
                        />
                        <div className="help-block with-errors"/>
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
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="help-block with-errors"/>
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
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <div className="help-block with-errors"/>
                    </FormGroup>
                    <FormGroup className="col-md-6" onChange={(e) => setService(e.target.value)}>
                        <Input type="select" className="form-control">
                            <option>Select Service</option>
                            <option>Web development</option>
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
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        <div className="help-block with-errors"/>
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
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <div className="help-block with-errors"/>
                    </FormGroup>
                    <Col md="12" className="text-center mt-4">
                        <input className="btn btn-primary btn-block mt-3 mb-2" color="primary" type="submit"
                               name="subscribe" defaultValue="Subscribe" onClick={handleSubmit}/>
                    </Col>
                </Form>
            </div>
        </div>
    );
};

export default ContactForm1;
