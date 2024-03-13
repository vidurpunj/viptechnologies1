import React, { useState } from 'react';
import Modal from 'react-modal';
import OwlCarousel from 'react-owl-carousel';
import { Progress } from 'reactstrap';
import Blog1 from '../../widgets/blog/blog1';
import Clientlogo from '../../widgets/common/clientlogo';
import Counter4 from '../../widgets/counter/counter4';
import Featureskill from '../../widgets/featurebox/featureskill';
import Herosection7 from '../../widgets/herosection/heroSection7';
import Pricingplan4 from '../../widgets/pricing/pricingplan4';
import Testimonial3 from '../../widgets/testimonial/testimonial3';
import { Link } from 'react-router-dom';

function Index8() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <section>
                <div className="container ps-8 pe-8">
                    <Herosection7 />
                </div>
            </section>
            <div className="page-content">
                <section className="text-center p-0">
                    <div className="container ps-8 pe-8">
                        <div className="row text-center">
                            <div className="col-12 ">
                                <Clientlogo logoitems={6} margintop={10} />
                            </div>
                        </div>
                    </div>
                </section>
                <Testimonial3 />
                <section className="pt-0">
                    <div className="container ps-8 pe-8">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                                <div class="row align-items-center no-gutters">
                                    <div class="col">
                                        <img src={require(`../../assets/images/about/09.png`)} alt="testimage" class="img-fluid" />
                                    </div>
                                    <div class="col">
                                        <img src={require(`../../assets/images/about/09.png`)} alt="testimage" class="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-5">
                                <div> <span className="badge badge-primary-soft p-2">
                                    <i className="la la-sort-numeric-asc ic-3x rotation" />
                                </span>
                                    <h2 className="mt-3">Bulit for everybody with unlimited unique features</h2>
                                    <p className="lead">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                </div>
                                <Counter4 />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="custom-py-2 position-relative bg-dark parallaxie" data-bg-img="assets/images/bg/02.png">
                    <div className="container ps-8 pe-8">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-12 col-lg-6 mb-11 mb-lg-0 order-lg-1">
                                <div className='position-relative'>
                                    {/* Image */}
                                    <img src={require(`../../assets/images/about/07.png`)} className="img-fluid" alt="..." />
                                    <div class="video-btn video-btn-pos">

                                        <Link className="play-btn popup-youtube" onClick={openModal}>
                                            <i className="la la-play" />
                                        </Link>
                                        <div class="spinner-eff">
                                            <div class="spinner-circle circle-1"></div>
                                            <div class="spinner-circle circle-2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-5">
                                <div className="ht-progress-bar mb-5">
                                    <h6 className="text-white">DownLoad</h6>
                                    <Progress value="65" color="info">65%</Progress>
                                </div>
                                <div className="ht-progress-bar mb-5">
                                    <h6 className="text-white">Consulting</h6>
                                    <Progress value="75" color="danger">75%</Progress>
                                </div>
                                <div className="ht-progress-bar mb-5">
                                    <h6 className="text-white">Marketing</h6>
                                    <Progress value="70" color="success">70%</Progress>
                                </div>
                                <div className="ht-progress-bar">
                                    <h6 className="text-white">Developing</h6>
                                    <Progress value="80" color="warning">80%</Progress>
                                </div>
                            </div>
                        </div>
                        {/* / .row */}
                    </div>
                    <div className="shape-1" style={{ height: '200px', overflow: 'hidden' }}>
                        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                            <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#fff' }} />
                        </svg>
                    </div>
                    <div className="shape-1 bottom" style={{ height: '200px', overflow: 'hidden' }}>
                        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                            <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#fff' }} />
                        </svg>
                    </div>
                </section>
                <section className="p-0">
                    <div className="container ps-8 pe-8 ">
                        <div className="row justify-content-center text-center">
                            <div className="col-12 col-md-12 col-lg-8 mb-8">
                                <div> <span className="badge badge-primary-soft p-2">
                                    <i className="la la-cubes ic-3x rotation" />
                                </span>
                                    <h2 className="mt-3">Awesome Bootsland App Feature</h2>
                                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                                </div>
                            </div>
                        </div>
                        <Featureskill />
                    </div>
                </section>
                <section className="p-0">
                    <div className="container ps-8 pe-8">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-12 col-lg-4 mb-8 mb-lg-0">
                                <div className="mb-0"> <span className="badge badge-primary-soft p-2">
                                    <i className="la la-file-image-o ic-3x rotation" />
                                </span>
                                    <h2 className="mt-3">See Our Bootsland App Screenshots</h2>
                                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-8">
                                <OwlCarousel
                                    className="owl-carousel owl-center no-pb"
                                    dotData={false}
                                    dots={false}
                                    center={true}
                                    items={3}
                                    autoplay={true}
                                    loop={true}
                                    autoplaySpeed={3000}
                                >
                                    <div className="item">
                                        <img className="img-fluid" src={require(`../../assets/images/app/01.png`)} alt="testimage" />
                                    </div>
                                    <div className="item">
                                        <img className="img-fluid" src={require(`../../assets/images/app/02.png`)} alt="testimage" />
                                    </div>
                                    <div className="item">
                                        <img className="img-fluid" src={require(`../../assets/images/app/03.png`)} alt="testimage" />
                                    </div>
                                    <div className="item">
                                        <img className="img-fluid" src={require(`../../assets/images/app/01.png`)} alt="testimage" />
                                    </div>
                                    <div className="item">
                                        <img className="img-fluid" src={require(`../../assets/images/app/02.png`)} alt="testimage" />
                                    </div>
                                    <div className="item">
                                        <img className="img-fluid" src={require(`../../assets/images/app/03.png`)} alt="testimage" />
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container ps-8 pe-8">
                        <Pricingplan4 />
                    </div>
                    {/* / .container */}
                </section>
                <Blog1 />
            </div>
            {isOpen && <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                appElement={document.getElementById('root')}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 9999,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                    content: {
                        position: 'relative',
                        border: 'none',
                        background: 'none',
                        padding: 0,
                        width: '50%',
                        maxHeight: '50%',
                        marginTop: '5rem',
                    },
                }}
            >

                <div
                    style={{
                        position: 'relative',
                        paddingBottom: '56.25%',
                        height: 0,
                        maxWidth: '100%',
                    }}
                >
                    <iframe
                        title="Video"
                        src="https://www.youtube.com/embed/P_wKDMcr1Tg"
                        frameBorder="0"
                        allowFullScreen
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '90%',
                            height: '90%',
                        }}
                    />
                </div>
            </Modal>}
        </div>
    )
}

export default Index8;