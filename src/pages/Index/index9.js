import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import Header2 from '../../Layout/Header/Header2';
import Blog2 from '../../widgets/blog/blog2';
import Gallerylist from '../../widgets/gallery/gallerylist';
import Counter2 from '../../widgets/counter/counter2';
import FeatureServices from '../../widgets/featurebox/services';
import Herosection8 from '../../widgets/herosection/heroSection8';
import Pricingplan5 from '../../widgets/pricing/pricingplan5';
import Team1 from '../../widgets/team/team1';

function Index9() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <div>
            <Header2 />
            <section>
                <div className="container ps-8 pe-8">
                    <Herosection8 />
                </div>
            </section>
            <div className="page-content">
                <section>
                    <div className="container ps-8 pe-8">
                        <div className="row justify-content-center text-center">
                            <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0 ">
                                <div className="mb-8"> <span className="badge badge-primary-soft p-2 font-w-6">
                                    What We Offerd
                                </span>
                                    <h2 className="mt-3 font-w-5">Creative Design And Creative Services</h2>
                                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                                </div>
                            </div>
                        </div>
                        {/* / .row */}
                        <FeatureServices />
                    </div>
                </section>
                <section>
                    <div className="container-fluid">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-12 col-lg-6 mb-8 mb-lg-0 position-relative">
                                <img src={require(`../../assets/images/about/05.png`)} alt="testimage" className="img-fluid" />
                                <div className="video-btn video-btn-pos"> <Link className="play-btn popup-youtube" onClick={openModal}><i className="la la-play" /></Link>
                                    <div className="spinner-eff">
                                        <div className="spinner-circle circle-1" />
                                        <div className="spinner-circle circle-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-5">
                                <Counter2 />
                            </div>
                        </div>
                    </div>
                </section>
                <Team1 />
                <section>
                    <div className="container ps-8 pe-8">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-12 col-lg-6 mb-6 mb-lg-0 order-lg-1">
                                <div className="row align-items-center">
                                    <div className="col-7">
                                        <img src={require(`../../assets/images/about/10.jpg`)} className="img-fluid rounded shadow-lg" alt="..." />
                                    </div>
                                    <div className="col-5">
                                        <img src={require(`../../assets/images/about/11.jpg`)} className="img-fluid rounded shadow-lg mb-4" alt="..." />
                                        <img src={require(`../../assets/images/about/12.jpg`)} className="img-fluid rounded shadow-lg mt-1" alt="..." />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-5">
                                <div> <span className="badge badge-primary-soft p-2 font-w-6">
                                    About Bootsland
                                </span>
                                    <h2 className="mt-3 font-w-5">Bootsland Crafting Beautiful Experience</h2>
                                    <p className="lead">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                    <p className="mb-0">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                </div> <Link to="/" className="btn btn-outline-primary mt-5">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container ps-8 pe-8">
                        <div className="row align-items-end mb-8">
                            <div className="col-12 col-md-12 col-lg-5">
                                <div> <span className="badge badge-primary-soft p-2 font-w-6">
                                    Portfolio
                                </span>
                                    <h2 className="mt-3 font-w-5">We’ve done lot’s of work, Let’s Check some from here</h2>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-6 mS-auto">
                                <div>
                                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                                </div>
                            </div>
                        </div>
                        <Gallerylist />
                    </div>
                </section>
                <Pricingplan5 />
                <section>
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                                <div className="mb-8"> <span className="badge badge-primary-soft p-2 font-w-6">
                                    Latest News
                                </span>
                                    <h2 className="mt-3 font-w-5">From Our Blog List Latest Feed</h2>
                                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                                </div>
                            </div>
                        </div>
                        {/* / .row */}
                        <Blog2 />
                    </div>
                </section>
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

export default Index9;