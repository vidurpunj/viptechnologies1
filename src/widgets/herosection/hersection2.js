import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const Herosection2 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <>
            <section className="custom-pt-1 custom-pb-3 bg-primary position-relative parallaxie" data-bg-img={require(`../../assets/images/bg/03.png`)}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-5 col-xl-5 me-auto mb-8 mb-lg-0">
                            {/* Image */}
                            <img src={require(`../../assets/images/hero/02.png`)} className="img-fluid" alt="..." />
                        </div>
                        <div className="col-12 col-lg-7 col-xl-6">
                            {/* Heading */}
                            <h1 className="display-4 text-white">
                                Change the way you build websites With <span className="font-weight-bold">Bootsland</span>
                            </h1>
                            {/* Text */}
                            <p className="lead text-light">Build a Beautiful, Clean &amp; Modern Design website with flexible Bootstrap components.</p>
                            {/* Buttons */}
                            <Link to="/" className="btn btn-outline-light me-1">
                                Learn More
                            </Link>
                            <button className="btn text-white popup-vimeo" onClick={openModal}>
                                <i className="la la-play-circle me-1 ic-3x align-middle" /> Watch Video
                            </button>
                        </div>
                    </div>
                    {/* / .row */}
                </div>
                {/* / .container */}
                <div className="shape-1 bottom" style={{ height: '250px', overflow: 'hidden' }}>
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                        <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#fff' }} />
                    </svg>
                </div>
            </section>
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
                    {/* <button
                    onClick={closeModal}
                    style={{
                        position: 'absolute',
                        top: '0rem',
                        right: '4rem',
                        background: 'none',
                        border: 'none',
                        color: '#fff',
                        fontSize: '3rem',
                        cursor: 'pointer',
                    }}
                >
                        &times;
                    </button> */}
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
        </>
    );
};

export default Herosection2;
