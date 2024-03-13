import React, { useState } from 'react';
import Modal from 'react-modal';
import Typewriter from 'typewriter-effect';
import Clientlogo from '../common/clientlogo';
import { Link } from 'react-router-dom';

const Herosection10 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <section className="custom-pt-1 custom-pb-2 position-relative bg-primary">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-12 col-lg-10">
                        <h4 className="text-white">
                            Created For{' '}
                            <Typewriter
                                options={{
                                    strings: ['Sass', 'Software', 'Startup', 'WebApp', 'Agency', 'Marketing', 'Designer', 'Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h4>
                        <h1 className="display-4 mt-3 font-w-5 text-white">
                            Design, prototype,<br /> collaborate all in one place.
                        </h1>
                        {/* Text */}
                        <p className="lead text-light">Build a Beautiful, Clean &amp; Modern Design website with flexible Bootstrap components. A platform that is widely used and loved by designers</p>
                        {/* Buttons */}
                        <Link onClick={openModal} className="btn text-white popup-vimeo me-1">
                            <i className="la la-play-circle me-1 ic-3x align-middle line-h-0"></i> Watch Video
                        </Link>
                        <Link to="/" className="btn btn-dark">
                            Learn More
                        </Link>
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col-12 ">
                        <Clientlogo logoitems={6} />
                    </div></div>
                {/* / .row */}
            </div>
            {/* / .container */}
            <div className="shape-1 bottom" style={{ height: '200px', overflow: 'hidden' }}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                    <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#060927' }}></path>
                </svg>
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
                        title="vimeo"
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
        </section>
    );
}



export default Herosection10;
