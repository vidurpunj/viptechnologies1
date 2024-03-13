import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Nav, Row } from "reactstrap";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedPortFolio } from "../../store/reducer/portFolioReducer";
import CustomPagination from "../pagination";

function Gallerylist() {

    const [activeTab, setActiveTab] = useState("all");
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const dispatch = useDispatch();
    const portfolioItems = useSelector((state) => state.portFolio.portFolioItems);

    const filteredPortfolioItems = activeTab === "all"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category.some((cat) => cat === activeTab));
    const totalPages = Math.ceil(filteredPortfolioItems.length / itemsPerPage);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const prevIndex = (photoIndex + filteredPortfolioItems.length - 1) % filteredPortfolioItems.length;
    const nextIndex = (photoIndex + 1) % filteredPortfolioItems.length;

    const openLightbox = (index) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    // const handlePrevPage = () => {
    //     if (currentPage > 1) {
    //         setCurrentPage(currentPage - 1);
    //     }
    // };

    // const handleNextPage = () => {
    //     const totalPages = Math.ceil(filteredPortfolioItems.length / itemsPerPage);
    //     if (currentPage < totalPages) {
    //         setCurrentPage(currentPage + 1);
    //     }
    // };
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleItems = filteredPortfolioItems.slice(startIndex, endIndex);

    return (
        <div>
            <section>
                <Container>
                    <Row>

                        <Col className="text-center">
                            <div className="portfolio-filter ">
                                <Nav>
                                    <Button
                                        className={activeTab === "all" ? "is-checked mb-3 mb-sm-0" : "mb-3 mb-sm-0"}
                                        onClick={() => handleTabClick("all")}
                                    >
                                        All Work
                                    </Button>
                                    <Button
                                        className={activeTab === "Design" ? "is-checked mb-3 mb-sm-0" : "mb-3 mb-sm-0"}
                                        onClick={() => handleTabClick("Design")}
                                    >
                                        Design
                                    </Button>
                                    <Button
                                        className={activeTab === "Development" ? "is-checked mb-3 mb-sm-0" : "mb-3 mb-sm-0"}
                                        onClick={() => handleTabClick("Development")}
                                    >
                                        Development
                                    </Button>
                                    <Button
                                        className={activeTab === "Marketing" ? "is-checked mb-3 mb-sm-0" : "mb-3 mb-sm-0"}
                                        onClick={() => handleTabClick("Marketing")}
                                    >
                                        Marketing
                                    </Button>
                                    <Button
                                        className={activeTab === "Branding" ? "is-checked mb-3 mb-sm-0" : "mb-3 mb-sm-0"}
                                        onClick={() => handleTabClick("Branding")}
                                    >
                                        Branding
                                    </Button>
                                </Nav>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <div className="col-lg-12 col-md-12">
                            <div className="grid columns-3 row popup-gallery">
                                <div className="grid-sizer" />


                                {visibleItems.map((item, index) => (
                                    <div class="grid-item col-lg-4 col-md-6 mb-5 cat3">
                                        <div class="portfolio-item position-relative overflow-hidden">
                                            <img class="img-fluid w-100" src={require(`../../assets/images/portfolio/${item.images}`)} alt="testimage" />
                                            <div class="portfolio-title d-flex justify-content-between align-items-center">
                                                <div> <small class="text-light mb-2">{(item.category).join(" | ")}</small>
                                                    <h6>

                                                        <Link className="btn-link text-white" to="/portfolio-single" onClick={() => {
                                                            dispatch(setSelectedPortFolio(item.id))
                                                        }}>
                                                            {item.name}
                                                        </Link>
                                                    </h6>
                                                </div>
                                                <Link
                                                    className="popup-img h2 text-white"
                                                    to="/"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        openLightbox(index);
                                                    }}
                                                >
                                                    <i className="la la-plus"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>))}
                            </div>
                        </div>
                    </Row>
                    <Row className="" style={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}>
                        {filteredPortfolioItems.length > 6 &&
                            <CustomPagination
                                activePage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />}
                    </Row>
                </Container>
            </section>
            {isOpen && (
                <Lightbox
                    mainSrc={require(`../../assets/images/portfolio/${filteredPortfolioItems[photoIndex].images}`)}
                    prevSrc={require(`../../assets/images/portfolio/${filteredPortfolioItems[prevIndex].images}`)}
                    nextSrc={require(`../../assets/images/portfolio/${filteredPortfolioItems[nextIndex].images}`)}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex(prevIndex)}
                    onMoveNextRequest={() => setPhotoIndex(nextIndex)}
                />
            )}

        </div>
    );
}

export default Gallerylist;
