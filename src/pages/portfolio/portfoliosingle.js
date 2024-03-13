import React, { useEffect, useState } from 'react';
import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css";
import ReactOwlCarousel from 'react-owl-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { setSelectedPortFolio } from '../../store/reducer/portFolioReducer';
import Pageheading from '../../widgets/PageHeading';



function PortfolioSingle() {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false);
    const portfoliolist = useSelector((state) => state.portFolio.portFolioItems);
    const portFolioId = useSelector((state) => state.portFolio.selectedPortFolio);
    useEffect(() => { }, [portFolioId]);
    let portFolio = portfoliolist.find((p) => p.id === portFolioId);
    const otherPortfolio = portfoliolist.filter((portFolio) => portFolio.id !== portFolioId);
    const [photoIndex, setPhotoIndex] = useState(0);

    const openLightbox = (index) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    const renderPortfolioItems = () => {
        return otherPortfolio.map((item, index) => (
            <div key={index} className="item">
                <div className="portfolio-item position-relative overflow-hidden">
                    <img class="img-fluid w-100" src={require(`../../assets/images/portfolio/${item.images}`)} alt="testimage" />
                    <div className="portfolio-title d-flex justify-content-between align-items-center">
                        <div>
                            <small className="text-light mb-2">{item.category[0]}{" " + item?.category[1]}
                            </small>
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
                            onClick={() => openLightbox(index)}
                        >
                            <i className="la la-plus"></i>
                        </Link>
                    </div>
                </div>
            </div>
        ));

    };



    if (portFolio === undefined ? (portFolio = portfoliolist[0]) : portFolio)
        return (
            <div>
                <section className='position-relative'>
                    <Pageheading foldername={"Portfolio"} title={"Portfolio Single"} />
                </section>
                <div className="page-content">
                    <section>
                        <Container className='pe-8 ps-8'>
                            <Row>
                                <Col xs={12} className='col-12'>
                                    <section>
                                        <Container>
                                            <Row>
                                                <Col lg="7" xs="12">
                                                    <ReactOwlCarousel className="owl-carousel" items={1} autoplay loop>
                                                        <div className="item">
                                                            <img class="img-fluid w-100" src={require(`../../assets/images/portfolio/${portFolio.images}`)} alt="testimage" />
                                                        </div>
                                                        <div className="item">
                                                            <img className="img-fluid w-100" src={require(`../../assets/images/portfolio/01.jpg`)} alt="testimage" />
                                                        </div>
                                                    </ReactOwlCarousel>
                                                </Col>
                                                <Col lg="5" xs="12">
                                                    <h2 className="title">{portFolio.name}</h2>
                                                    <p className="lead mb-5">
                                                        {portFolio.description}
                                                    </p>
                                                    <ul className="cases-meta list-unstyled text-muted">
                                                        <li className="mb-3">
                                                            <span className="text-dark"> Client: </span> Your client name
                                                        </li>
                                                        <li className="mb-3">
                                                            <span className="text-dark"> Created by: </span> Skytouch
                                                        </li>
                                                        <li className="mb-3">
                                                            <span className="text-dark"> Category: </span> {portFolio.category[0]}{" " + portFolio?.category[1]}
                                                        </li>
                                                        <li>
                                                            <span className="text-dark"> Project Completed: </span> {portFolio.projectcomplated}
                                                        </li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </section>
                                    <section>
                                        <div className="container">
                                            <div className="row justify-content-center text-center">
                                                <div className="col-lg-8 col-md-12">
                                                    <div className="mb-6">
                                                        <span className="badge badge-primary-soft p-2 font-w-6">Portfolio</span>
                                                        <h2 className="mt-3">Related Branding Work</h2>
                                                        <p>Bootsland discovering the source behind the ubiquitous filler text</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <ReactOwlCarousel
                                                        className="owl-carousel"
                                                        dots={true}
                                                        items={3}
                                                        responsive={{ 0: { items: 3 }, 768: { items: 3 }, 992: { items: 3 } }}
                                                        //margin={20}
                                                        autoplay
                                                    >
                                                        {renderPortfolioItems()}
                                                    </ReactOwlCarousel>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    {isOpen && (
                        <Lightbox
                            mainSrc={require(`../../assets/images/portfolio/${otherPortfolio[photoIndex].images}`)}
                            onCloseRequest={() => setIsOpen(false)}
                        />
                    )}

                </div>

            </div>
        )
}

export default PortfolioSingle;