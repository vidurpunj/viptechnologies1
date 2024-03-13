import React from "react";
import { useSelector } from "react-redux";
import {
    Button,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    ListGroup,
    ListGroupItem,
    Row,
} from "reactstrap";
import Pageheading from "../../widgets/PageHeading";

function CheckOut() {
    const cart = useSelector((state) => state.products.cart);
    function calculateSubtotal() {
        let subtotal = 0;
        cart.forEach((item) => {
            subtotal += item.quantity * item.salePrice;
        });
        return subtotal.toFixed(2);
    }
    let shipping = 50.0;

    function calculateTotal() {
        const subtotal = calculateSubtotal();
        // const shipping = 50;

        const total = parseFloat(subtotal) + parseFloat(shipping);
        return total.toFixed(2);
    }
    return (
        <div>
            <div className="page-wrapper">
                <section className="position-relative">
                    <Pageheading foldername={"Shop"} title={"Product Checkout"} />
                </section>
                <div className="page-content">
                    <Container>
                        <Row>
                            <Col lg={7} md={12}>
                                <div className="checkout-form box-shadow white-bg">
                                    <h2 className="mb-4">Billing Details</h2>
                                    <Form>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="fname" >
                                                        First Name
                                                    </Label>
                                                    <Input
                                                        className="form-control"
                                                        type="text"
                                                        id="fname"
                                                        placeholder="Your firstname"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="lname" >
                                                        Last Name
                                                    </Label>
                                                    <Input
                                                        className="form-control"
                                                        type="text"
                                                        id="lname"
                                                        placeholder="Your lastname"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="email" >
                                                        E-mail Address
                                                    </Label>
                                                    <Input
                                                        className="form-control"
                                                        type="text"
                                                        id="email"
                                                        placeholder="State Province"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="phone" >
                                                        Phone Number
                                                    </Label>
                                                    <Input type="text" id="phone"
                                                        className="form-control" placeholder="" />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="companyname" >
                                                        Company Name
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        id="companyname"
                                                        placeholder="Company Name"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="country" >
                                                        Select Country
                                                    </Label>
                                                    <Input
                                                        type="select"
                                                        id="country"
                                                        className="form-control form-select"
                                                    >
                                                        <option>Select country</option>
                                                        <option value="#">Alaska</option>
                                                        <option value="#">China</option>
                                                        <option value="#">Japan</option>
                                                        <option value="#">Korea</option>
                                                        <option value="#">Philippines</option>
                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                            <Col md={12}>
                                                <FormGroup>
                                                    <Label for="address" >
                                                        Address
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        id="address"
                                                        className="form-control"
                                                        placeholder="Enter Your Address"
                                                    />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Input
                                                        type="text"
                                                        id="address2"
                                                        className="form-control"
                                                        placeholder="Second Address"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={12}>
                                                <FormGroup>
                                                    <Label for="towncity" >
                                                        Town/City
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        id="towncity"
                                                        className="form-control"
                                                        placeholder="Town or City"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="statename" >
                                                        State/Province
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        id="statename"
                                                        className="form-control"
                                                        placeholder="State Province"
                                                    />
                                                </FormGroup>{" "}
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="zippostalcode" >
                                                        Zip/Postal Code
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        id="zippostalcode"
                                                        placeholder="Zip / Postal"
                                                        className="form-control"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            </Col>
                            <Col lg={5} md={12} className="md-mt-5">
                                <Row className="mb-5">
                                    <Col md={12}> <h3 className="mb-3">Coupon Code</h3>
                                        <div className="p-3 p-lg-5 border ">

                                            <label className="text-dark mb-3">
                                                Enter your coupon code if you have one
                                            </label>

                                            <div class="input-group">
                                                <input class="form-control" id="c-code" placeholder="Coupon Code" aria-label="Coupon Code" aria-describedby="button-addon2" type="text" />
                                                <div class="input-group-append">
                                                    <button class="btn btn-primary btn-sm px-4" type="button" id="button-addon2">Apply</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-3 my-5 p-lg-5 border ">
                                            <h3 className="mb-3">Your Order</h3>
                                            <ListGroup className="list-unstyled">
                                                {cart.map((item, index) => (
                                                    <ListGroupItem
                                                        className="mb-3 border-bottom pb-3"
                                                        key={index}
                                                        style={{ borderRight: 'none', borderLeft: 'none', borderTop: 'none' }}
                                                    >
                                                        <span>
                                                            {item.quantity} x {item.name}
                                                        </span>
                                                        $ {item.salePrice * item.quantity}
                                                    </ListGroupItem>
                                                ))}
                                                <ListGroupItem className="mb-3 border-bottom pb-3" style={{ borderRight: 'none', borderLeft: 'none' }}>
                                                    <span>Shipping</span> $ {shipping}
                                                </ListGroupItem>
                                                <ListGroupItem className="mb-3 border-bottom pb-3" style={{ borderRight: 'none', borderLeft: 'none' }}>
                                                    <span>Subtotal</span> $ {calculateSubtotal()}
                                                </ListGroupItem>
                                                <ListGroupItem style={{ borderRight: 'none', borderLeft: 'none', borderBottom: 'none' }}>
                                                    <span>
                                                        <strong className="cart-total">Total:</strong>
                                                    </span>
                                                    <strong className="cart-total">
                                                        $ {calculateTotal()}
                                                    </strong>
                                                </ListGroupItem>
                                            </ListGroup>
                                        </div>
                                        <div className="cart-detail my-5">
                                            <h3 className="mb-3">Payment Method</h3>
                                            <FormGroup className="form-group">
                                                <div className="form-check">
                                                    <Input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="flexRadioDefault"
                                                        id="customRadio1"
                                                    />
                                                    <Label
                                                        className="form-check-label"
                                                        for="customRadio1"
                                                    >
                                                        Direct Bank Tranfer
                                                    </Label>
                                                </div>
                                            </FormGroup>
                                            <FormGroup>
                                                <div className="form-check">
                                                    <Input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="flexRadioDefault"
                                                        id="customRadio2"
                                                    />
                                                    <Label
                                                        className="form-check-label"
                                                        for="customRadio2"
                                                    >
                                                        Check Payment
                                                    </Label>
                                                </div>
                                            </FormGroup>
                                            <FormGroup>
                                                <div className="form-check">
                                                    <Input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="flexRadioDefault"
                                                        id="customRadio3"
                                                    />
                                                    <Label
                                                        className="form-check-label"
                                                        for="customRadio3"
                                                    >
                                                        Paypal Account
                                                    </Label>
                                                </div>
                                            </FormGroup>
                                            <FormGroup className="mb-0">
                                                <div className="form-check">
                                                    <Input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                        id="flexCheckDefault"
                                                    />
                                                    <Label
                                                        className="form-check-label"
                                                        for="flexCheckDefault"
                                                    >
                                                        I have read and accept the terms and conditions
                                                    </Label>
                                                </div>
                                            </FormGroup>
                                            <Button color="primary" className="btn btn-primary btn-block">
                                                Proceed to Payment
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default CheckOut;
