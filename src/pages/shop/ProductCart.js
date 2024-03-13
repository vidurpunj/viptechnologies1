import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    Button,
    Col,
    Container,
    Input,
    Label,
    Row,
    Table
} from "reactstrap";
import {
    removeCartItem,
    updateCartItemQuantity,
} from "../../store/reducer/productReducer";
import Pageheading from "../../widgets/PageHeading";

function ProductCart() {
    const cartItems = useSelector((state) => state.products.cart);
    const dispatch = useDispatch();
    
    const [quantities, setQuantities] = useState(
        cartItems.map((item) => item.quantity)
    );
    const handleQuantityChange = (index, newQuantity) => {
        if (newQuantity >= 1 && newQuantity <= cartItems[index].stock) {
            const updatedQuantities = [...quantities];
            updatedQuantities[index] = newQuantity;
            setQuantities(updatedQuantities);
            dispatch(updateCartItemQuantity({ index, quantity: newQuantity }));
        }
    };
    const handleDeleteItem = (index) => {
        // Dispatch the action to remove the cart item from the reducer
        dispatch(removeCartItem(index));
    };
    const handleApplyCoupon = () => {
        // Handle applying the coupon code
    };

    const handleUpdateCart = () => {
        // Handle updating the cart
    };

    const handleCancel = () => {
        // Handle canceling the cart update
    };
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const itemTotal = item.quantity * item.salePrice;
            return total + itemTotal;
        }, 0);
    };
    let Tax = 1.0;
    return (
        <div className="page-wrapper">
            <section className="position-relative">
                <Pageheading foldername={"Shop"} title={"Product Cart"} />
            </section>
            <div className="page-content">
                <section>
                    <Container>
                        <Row>
                            <Col>
                                <div className="table-responsive ">
                                    <Table className="cart-table table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    Product
                                                </th>
                                                <th scope="col">
                                                    Price
                                                </th>
                                                <th scope="col">
                                                    Quantity
                                                </th>
                                                <th scope="col">
                                                    Total
                                                </th>
                                                <th scope="col">
                                                    Remove
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody className="border-top-0">
                                            {cartItems.map((item, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <div className="d-md-flex align-items-center">
                                                            <Link to="/">
                                                                <img
                                                                    className="img-fluid me-lg-2 mb-2 mb-lg-0"
                                                                    style={{ height: "100px", width: "100px" }}
                                                                    src={require(`../../assets/images/${item.pictures[0]}`)}

                                                                    alt={item.name}
                                                                />
                                                            </Link>
                                                            <div className="text-start">
                                                                <p class="mb-0">{item.name}</p>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h6 className="mb-0">${item.salePrice}</h6>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <Button
                                                                className="btn-product btn-product-up"
                                                                onClick={() => {
                                                                    if (quantities[index] > 1) {
                                                                        handleQuantityChange(
                                                                            index,
                                                                            quantities[index] - 1
                                                                        );
                                                                    }
                                                                }}
                                                            >
                                                                <i className="ti-minus"></i>
                                                            </Button>
                                                            <Input
                                                                className="form-product"
                                                                type="number"
                                                                name="form-product"
                                                                value={quantities[index]}
                                                                onChange={(e) => {
                                                                    const newQuantity = parseInt(e.target.value);
                                                                    handleQuantityChange(index, newQuantity);
                                                                }}
                                                                max={item.stock}
                                                            />
                                                            <Button
                                                                className="btn-product btn-product-down"
                                                                onClick={() => {
                                                                    if (quantities[index] < item.stock) {
                                                                        handleQuantityChange(
                                                                            index,
                                                                            quantities[index] + 1
                                                                        );
                                                                    }
                                                                }}
                                                            >
                                                                <i className="ti-plus"></i>
                                                            </Button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h6 className="mb-0">
                                                            ${item.quantity * item.salePrice}
                                                        </h6>
                                                    </td>
                                                    <td className="border-right-0">
                                                        <button
                                                            type="submit"
                                                            onClick={() => {
                                                                handleDeleteItem(item.id);
                                                            }}
                                                            className="btn btn-primary btn-sm"
                                                        >
                                                            <i className="ti-close"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-8">
                            <Col lg={6}>
                                <div>
                                    <Row className="mb-5">
                                        <div class="col-md-6 mb-3 mb-md-0">
                                            <button
                                                className="btn btn-primary btn-sm btn-block"
                                                onClick={handleUpdateCart}
                                            >
                                                Update Cart
                                            </button>
                                        </div>
                                        <Col md={6}>
                                            <button className="btn btn-outline-primary btn-sm btn-block" onClick={handleCancel}>
                                                Cancel
                                            </button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <Label className="text-dark h4">Coupon</Label>
                                            <p>Enter your coupon code if you have one.</p>
                                        </Col>
                                        <div class="col-md-8 mb-3 mb-md-0">
                                            <Input
                                                className="form-control"
                                                id="c-code"
                                                placeholder="Coupon Code"
                                                aria-label="Coupon Code"
                                                aria-describedby="button-addon2"
                                                type="text"
                                            />
                                        </div>
                                        <div class="col-md-4">
                                            <button
                                                className="btn btn-primary btn-sm px-4"
                                                id="button-addon2"
                                                onClick={handleApplyCoupon}
                                            >
                                                Apply Coupon
                                            </button>
                                        </div>
                                    </Row>

                                </div>
                            </Col>
                            <div class="col-lg-6 pe-5 mt-5 mt-lg-0">
                                <div class="row justify-content-end">
                                    <div class="col-md-7">
                                        <div class="row">
                                            <div class="col-md-12 text-end border-bottom mb-5">
                                                <h3 class="text-dark h4 text-uppercase">Cart Totals</h3>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-md-6">
                                                <span class="text-dark">Subtotal</span>
                                            </div>
                                            <div class="col-md-6 text-end">
                                                <strong class="text-dark">${calculateTotal()}</strong>
                                            </div>
                                        </div>
                                        <div class="row mb-5">
                                            <div class="col-md-6">
                                                <span class="text-dark">Total</span>
                                            </div>
                                            <div class="col-md-6 text-end">
                                                <strong class="text-dark">${calculateTotal() + (calculateTotal() * Tax) / 100}</strong>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <Link className="btn btn-primary btn-md btn-block mb-2" to="/checkout">
                                                    Proceed To Checkout
                                                </Link>
                                                <Link
                                                    className="btn btn-outline-primary btn-md btn-block"
                                                    to="/product-grid"
                                                >
                                                    Continue Shopping
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>
            </div>
        </div >
    );
}

export default ProductCart;
