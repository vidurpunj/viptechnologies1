import React, { useState } from "react";
import {
    Col,
    Container,
    Row
} from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    addToCart,
    addToWishList,
    setSelectedProduct
} from "../../store/reducer/productReducer";
import Pageheading from "../../widgets/PageHeading";
import CustomPagination from "../../widgets/pagination";
import SideBar from "../../widgets/sidebar/Sidebar";

function ProductList() {
    const dispatch = useDispatch();
    const filteredProducts = useSelector(
        (state) => state.products.filteredProducts
    );
    const [activePage, setActivePage] = useState(1);
    const pageSize = 6;

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };
    const totalPages = Math.ceil(filteredProducts.length / pageSize);
    const startIndex = (activePage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);
    const handleAddToCart = (product) => {
        const size = product.size[0];
        const color = product.colors[0];

        const productToAdd = {
            ...product,
            size,
            colors: color,
            quantity: 1,
        };
        dispatch(addToCart(productToAdd));
    };
    const handleAddToWishList = (product) => {
        const size = product.size[0];
        const color = product.colors[0];

        const productToAdd = {
            ...product,
            size,
            colors: color,
            quantity: 1,
        };

        dispatch(addToWishList(productToAdd));
    };
    return (
        <div className="page-wrapper">
            <section className="position-relative">
                <Pageheading foldername={"Shop"} title={"Product List"} />
            </section>
            <div className="page-content py-2">
                <Container>
                    <Row>
                        <Col lg={9} md={12} className="order-lg-1">
                            <Row className="align-item-center">
                                {productsToShow.map((product) => (
                                    <div class="product-item product-list mb-5">
                                        <div class="row align-items-center">
                                            <div class="col-lg-4 col-md-5">
                                                <div class="product-img">
                                                    <img class="img-fluid"
                                                        src={require(`../../assets/images/${product.pictures[0]}`)} alt="testimage" />
                                                </div>
                                            </div>
                                            <div class="col-lg-8 col-md-7">
                                                <div class="product-desc">
                                                    <Link
                                                        to="/product-single"
                                                        onClick={() => {
                                                            dispatch(setSelectedProduct(product.id));
                                                        }}
                                                        className="product-name mt-4 mb-2 d-block link-title"
                                                    >
                                                        {product.name}
                                                    </Link>
                                                    <span className="product-price text-dark">
                                                        <del className="text-muted me-2">
                                                            ${product.price}
                                                        </del>
                                                        <span style={{ marginLeft: "2px" }}>
                                                            ${product.salePrice}
                                                        </span>
                                                    </span>
                                                    <p class="mb-0 mt-2">{product.description}</p>
                                                    <div class="product-link mt-3">
                                                        <Link
                                                            style={{ marginRight: "3px" }}
                                                            className="add-cart"

                                                            onClick={() => {
                                                                handleAddToCart(product);
                                                            }}
                                                        >
                                                            <i className="ti-bag me-2"></i>Add To Cart
                                                        </Link>
                                                        <Link
                                                            className="wishlist-btn"
                                                            onClick={() => {
                                                                handleAddToWishList(product);
                                                            }}
                                                        >
                                                            <i className="ti-heart"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <Row
                                    className="mt-5"
                                    style={{ display: "inline-grid", justifyContent: "center" }}
                                >
                                    <CustomPagination
                                        activePage={activePage}
                                        totalPages={totalPages}
                                        onPageChange={handlePageChange}
                                    />
                                </Row>
                            </Row>
                        </Col>
                        <Col lg={3} md={12}>
                            <SideBar />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ProductList;
