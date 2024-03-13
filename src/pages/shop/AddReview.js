import React from 'react';

const AddReview = () => {
    return (
        <div className="col-md-5">
            <div className="post-comments mt-5 pos-r">
                <div className="section-title mb-3">
                    <h5>Add Review</h5>
                </div>
                <form id="contact-form" method="post" action="https://themeht.com/template/bootsland/html/contact.php">
                    <div className="messages"></div>
                    <div className="form-group">
                        <input
                            id="form_name"
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Name"
                            required="required"
                            data-error="Name is required."
                        />
                        <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group">
                        <input
                            id="form_email"
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email Address"
                            required="required"
                            data-error="Valid email is required."
                        />
                        <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group clearfix">
                        <select className="form-control form-select">
                            <option value="">Rating -- Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input
                            id="form_number"
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Phone Number"
                            required="required"
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            id="form_message"
                            name="message"
                            className="form-control"
                            placeholder="Type Comment"
                            rows="4"
                            required="required"
                            data-error="Please, leave us a message."
                        ></textarea>
                        <div className="help-block with-errors"></div>
                    </div>
                    <button className="btn btn-primary mt-3">Post Review</button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;
