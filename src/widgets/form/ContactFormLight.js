import React from 'react';
import { Col } from 'reactstrap';


function ContactFormLight() {
    return (
        <Col xs="12" lg="6" className="mb-8 mb-lg-0">
            <div className="shadow rounded p-5">
                <img className="img-fluid mb-8" src={require('../../assets/images/about/04.png')} alt="testimage" />
                <form className="row" id="contact-form" method="post" action="https://themeht.com/template/bootsland/html/php/contact.php">
                    <div className="messages"></div>
                    <div className="form-group col-sm-6">
                        <label className="text-muted" htmlFor="InputName1">
                            First Name
                        </label>
                        <input
                            type="text"
                            className="form-control input-1"
                            id="InputName1"
                            placeholder="First Name"
                            required="required"
                            data-error="Firstname is required."
                        />
                        <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group col-sm-6">
                        <label className="text-muted" htmlFor="InputName2">
                            Last Name
                        </label>
                        <input
                            type="text"
                            className="form-control input-1"
                            id="InputName2"
                            placeholder="Last Name"
                            required="required"
                            data-error="Lastname is required."
                        />
                        <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group col-12">
                        <label className="text-muted" htmlFor="InputEmail1">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control input-1"
                            id="InputEmail1"
                            placeholder="Enter email"
                            required="required"
                            data-error="Valid email is required."
                        />
                        <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group col-12">
                        <label className="text-muted" htmlFor="InputPassword1">
                            Password
                        </label>
                        <input type="password" className="form-control input-1" id="InputPassword1" placeholder="Password" />
                    </div>
                    <div className="col-12 mt-5">
                        <button className="btn btn-primary">Download</button>
                    </div>
                </form>
            </div>
        </Col>
    )
}

export default ContactFormLight