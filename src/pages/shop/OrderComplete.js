import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Pageheading from "../../widgets/PageHeading";

function OrderComplete() {
    return (
        <div>
            <div className="page-wrapper">
                <section className="position-relative">
                    <Pageheading foldername={"Shop"} title={"Order Complete"} />
                </section>
                <div className="page-content">
                    <section class="text-center pb-11">
                        <Container>
                            <Row>
                                <Col md={12}>
                                    <h3 className="mb-4">
                                        Thank you for purchasing, Your order is complete
                                    </h3>
                                    <Link className="btn btn-primary me-1" to="/index">
                                        Home
                                    </Link>
                                    <Link to="/product-grid" className="btn btn-primary">
                                        Continue Shopping
                                    </Link>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default OrderComplete;
