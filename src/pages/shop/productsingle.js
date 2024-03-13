import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Button,
    Col,
    Container,
    FormGroup,
    Input,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane,
    Table
} from "reactstrap";
import { addToCart, addToWishList } from "../../store/reducer/productReducer";

import ReactOwlCarousel from "react-owl-carousel";
import Pageheading from "../../widgets/PageHeading";
import AddReview from "./AddReview";
import Reviewsection from "./reviewsection";

function ProductSingle() {
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.products.allProducts);

    const id = useSelector((state) => state.products.selectedProduct);
    useEffect(() => { }, [id]);
    const filteredProducts = useSelector(
        (state) => state.products.filteredProducts
    );
    let product = filteredProducts.find((p) => p.id === Number(id));

    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("1");

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSetlectedColor] = useState("");
    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };
    const handleColorClick = (color) => {
        setSetlectedColor(color);
    };
    const handleAddToCart = (product) => {
        const size = selectedSize || product.size[0];
        const color = selectedColor || product.colors[0];

        const productToAdd = {
            ...product,
            size,
            colors: color,
            quantity,
        };

        dispatch(addToCart(productToAdd));
    };
    const handleAddToWishList = (product) => {
        const size = selectedSize || product.size[0];
        const color = selectedColor || product.colors[0];

        const productToAdd = {
            ...product,
            size,
            colors: color,
            quantity,
        };

        dispatch(addToWishList(productToAdd));
    };
    if (product === undefined ? (product = allProducts[0]) : product)
        return (
            <div className="page-wrapper">
                <section className="position-relative">
                    <Pageheading foldername={"Shop"} title={"Product Single"} />
                </section>
                <div className="page-content">
                    <div>
                        <section>
                            <Container>
                                <Row className="align-items-center">
                                    <Col lg={5} md={6}>

                                        <ReactOwlCarousel
                                            className="owl-carousel"
                                            id="imageGallery"
                                            dotData={true}
                                            dots={true}
                                            items={1}
                                            autoplay={true}
                                        //nav={true}
                                        >
                                            {product.pictures.map((image, index) => {
                                                return (
                                                    <div className="item" key={index}>
                                                        <img className="img-fluid w-100" src={require(`../../assets/images/${image}`)} alt="testimage" />
                                                    </div>
                                                )
                                            })}
                                        </ReactOwlCarousel>
                                    </Col>
                                    <Col lg={7} md={6} className=" mt-5 mt-md-0">
                                        <div className="product-details">
                                            <h3> {product.name} </h3>
                                            <div className="product-price my-4">
                                                <span className="product-price text-dark">
                                                    <del className="text-muted">${product.price}</del> $
                                                    {product.salePrice}
                                                </span>
                                                <span className="text-primary">
                                                    {Array.from({ length: product.rating }).map(
                                                        (_, i) => (
                                                            <i key={i} className="bi bi-star-fill"></i>
                                                        )
                                                    )}
                                                </span>
                                            </div>
                                            <ul className="list-unstyled mb-4">
                                                <li className="mb-2">
                                                    <span className="text-dark"> Availibility: </span>{" "}
                                                    {product.stock}
                                                </li>
                                                <li>
                                                    <span className="text-dark"> Categories :</span>{" "}
                                                    {product.category}'s
                                                </li>
                                            </ul>
                                            <p>{product.description}</p>
                                            <Row className="my-4">
                                                <Col lg={5} md={6}>
                                                    <FormGroup>
                                                        <h6>Size</h6>
                                                        <Input
                                                            type="select"
                                                            name="size"
                                                            id="size"
                                                            placeholder="Size"
                                                            onChange={handleSizeChange}
                                                        >
                                                            <option disabled selected hidden>
                                                                Size
                                                            </option>
                                                            {/* <option value="">Size</option> */}
                                                            {product.size.map((size) => (
                                                                <option key={size} value={size}>
                                                                    {size}
                                                                </option>
                                                            ))}
                                                        </Input>
                                                    </FormGroup>
                                                </Col>
                                                <Col lg={7} sm={6} className=" mt-3 mt-sm-0">
                                                    <h6>Color</h6>
                                                    <div className="d-flex">
                                                        {product.colors.map((color) => (
                                                            <div className="form-check pl-2">
                                                                <input
                                                                    type="radio"
                                                                    value={color}
                                                                    className="form-check-input"
                                                                    id={color}
                                                                    style={{
                                                                        background: color,
                                                                        width: "24px",
                                                                        height: "24px",
                                                                        paddingLeft: "2px",
                                                                        borderRadius: "0",
                                                                    }}
                                                                    onClick={() => handleColorClick(color)}
                                                                />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </Col>
                                            </Row>
                                            <FormGroup className="d-flex align-items-center">
                                                <h6 style={{ paddingRight: "4px" }}>Quantity: </h6>
                                                <div className="d-flex align-items-center">
                                                    <Button
                                                        className="btn-product btn-product-up"
                                                        onClick={() => {
                                                            if (quantity > 1) setQuantity(quantity - 1);
                                                        }}
                                                    >
                                                        <i className="ti-minus"></i>
                                                    </Button>
                                                    <Input
                                                        className="form-product"
                                                        type="number"
                                                        name="form-product"
                                                        value={quantity}
                                                        onChange={(e) => {
                                                            const newQuantity = parseInt(e.target.value);
                                                            if (
                                                                newQuantity >= 1 &&
                                                                newQuantity <= product.stock
                                                            ) {
                                                                setQuantity(newQuantity);
                                                            }
                                                        }}
                                                        max={product.stock}
                                                    />
                                                    <Button
                                                        className="btn-product btn-product-down"
                                                        onClick={() => {
                                                            if (quantity < product.stock)
                                                                setQuantity(quantity + 1);
                                                        }}
                                                    >
                                                        <i className="ti-plus"></i>
                                                    </Button>
                                                </div>
                                            </FormGroup>
                                            <div className="product-link d-flex align-items-center mt-4">
                                                <Button
                                                    className="btn btn-primary me-3"
                                                    type="button"
                                                    onClick={() => handleAddToCart(product)}
                                                >
                                                    Add To Cart
                                                </Button>
                                                <Button
                                                    className="btn btn-dark"
                                                    type="button"
                                                    onClick={() => {
                                                        handleAddToWishList(product);
                                                    }}
                                                >
                                                    Add To Wishlist
                                                </Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                        <section>
                            <Container>
                                <Row>
                                    <Col md={12}>
                                        <Nav tabs className="nav nav-tabs border-0">
                                            <NavItem className="">
                                                <NavLink
                                                    className={
                                                        activeTab === "1"
                                                            ? "text-dark active ms-0 nav-item nav-link"
                                                            : "text-dark ms-0 nav-item nav-link"
                                                    }
                                                    onClick={() => {
                                                        toggle("1");
                                                    }}
                                                >
                                                    Description
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={
                                                        activeTab === "2" ? "text-dark active nav-item nav-link" : "text-dark nav-item nav-link"
                                                    }
                                                    onClick={() => {
                                                        toggle("2");
                                                    }}
                                                >
                                                    Additional Information
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={
                                                        activeTab === "3" ? "nav-item nav-link active text-dark" : "nav-item nav-link text-dark"
                                                    }
                                                    onClick={() => {
                                                        toggle("3");
                                                    }}
                                                >
                                                    Reviews (3)
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                        <TabContent activeTab={activeTab} className="pt-5">
                                            <TabPane tabId="1">
                                                <h5 className="mb-3">Product Description</h5>
                                                <p className="mb-0">{product.description}</p>
                                            </TabPane>
                                            <TabPane tabId="2">
                                                <h5 className="mb-3">Additional information</h5>
                                                <Table bordered className="mb-0">
                                                    <tbody>
                                                        <tr>
                                                            <td>Size</td>
                                                            <td>{product.size.join(" ")}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Color</td>
                                                            <td>{product.colors.join(" ")}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Chest</td>
                                                            <td>38 inches</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Waist</td>
                                                            <td>20 cm</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Length</td>
                                                            <td>35 cm</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Fabric</td>
                                                            <td>Cotton, Silk &amp; Synthetic</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Warranty</td>
                                                            <td>6 Months</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </TabPane>
                                            <TabPane tabId="3">

                                                <Row>
                                                    <Reviewsection />
                                                    <AddReview />
                                                </Row>
                                            </TabPane>
                                        </TabContent>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                    </div>
                </div>
            </div>
        );
}

export default ProductSingle;
