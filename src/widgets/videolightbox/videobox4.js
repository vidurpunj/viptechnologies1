import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const Videobox4 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="row align-items-center justify-content-center">


            <div className="col-12 col-lg-6 mb-8 mb-lg-0 position-relative">
                <img
                    src={require(`../../assets/images/about/05.png`)}
                    alt="testimage"
                    className="img-fluid"
                />
                <div className="video-btn video-btn-pos ">
                    <Link className="play-btn popup-youtube" onClick={openModal}>
                        <i className="la la-play" />
                    </Link>
                    <div className="spinner-eff">
                        <div className="spinner-circle circle-1" />
                        <div className="spinner-circle circle-2" />
                    </div>
                </div>
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
    );
};

export default Videobox4;
