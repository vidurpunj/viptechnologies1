import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactOwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import Blog1 from '../../widgets/blog/blog1';
import Counter2 from '../../widgets/counter/counter2';
import Feature1 from '../../widgets/featurebox/feature1';
import Feature2 from '../../widgets/featurebox/feature2';
import HeroSection6 from '../../widgets/herosection/heroSection6';
import Pricingplan4 from '../../widgets/pricing/pricingplan4';
import Worktab from '../../widgets/tab/worktab';
import Testimonial1 from '../../widgets/testimonial/testimonial1';

function Index7() {
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
                <div className="container">
                    <HeroSection6 />
                </div>
            </section>
            <div className='page-content'>
                <Feature2 />
                <section className="pt-0">
                    <div className="container ps-8 pe-8">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                                <img src={require(`../../assets/images/about/14.png`)} alt="testimage" className="img-fluid" />
                            </div>
                            <div className="col-12 col-lg-6 col-xl-5">
                                <div> <span className="badge badge-primary-soft p-2">
                                    <i className="la la-exclamation ic-3x rotation" />
                                </span>
                                    <h2 className="mt-3">Bulit for everybody with unlimited unique features</h2>
                                    <p className="lead">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                </div>
                                <Link to="/" className="btn btn-primary text-white text-left me-1"> <i className="la la-apple me-2 ic-3x d-inline-block" />
                                    <div className="d-inline-block"> <small className="d-block">Available On The</small>
                                        App Store</div>
                                </Link>
                                <Link to="/" className="btn btn-dark text-white text-left"> <i className="la la-android me-2 ic-3x d-inline-block" />
                                    <div className="d-inline-block"> <small className="d-block">Android App On</small>
                                        Google Play</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="custom-py-2 position-relative bg-dark parallaxie" style={{ backgroundImage: `url(${require(`../../assets/images/bg/01.jpg`)})`, backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} data-overlay={6}>



                    <div className="container ps-8 pe-8">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-12 col-lg-4 col-xl-5 mb-11 mb-lg-0 text-center">
                                <div className="video-btn">
                                    <Link className="play-btn popup-youtube" onClick={openModal}>
                                        <i className="la la-play" />
                                    </Link>
                                    <div className="spinner-eff">
                                        <div className="spinner-circle circle-1" />
                                        <div className="spinner-circle circle-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-7 col-xl-6">
                                <Counter2 />
                            </div>
                        </div>
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
                <Feature1 />
                <section>
                    <div className="container">
                        <Worktab />
                    </div>
                </section>
                <Testimonial1 />
                <section>
                    <div className="container ps-8 pe-8">
                        <div className="row justify-content-center text-center">
                            <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                                <div className="mb-5"> <span className="badge badge-primary-soft p-2">
                                    <i className="la la-file-image-o ic-3x rotation" />
                                </span>
                                    <h2 className="mt-3">See Our Bootsland App Screenshots</h2>
                                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <ReactOwlCarousel
                                    className="owl-carousel"
                                    dotData={false}
                                    items={3}
                                    autoplay={true}
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
                                </ReactOwlCarousel>
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

export default Index7;