import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

const Herosection6 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <Row className="align-items-center">

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

            <Col xs="12" lg="5" xl="6" className="order-lg-2 mb-8 mb-lg-0">
                {/* Image */}
                <img src={require('../../assets/images/hero/04.png')} className="img-fluid" alt="..." />
            </Col>
            <Col xs="12" lg="7" xl="6" className="order-lg-1">
                {/* Heading */}
                <h6 className="border rounded-pill px-3 py-2 text-muted d-inline-block">
                    <span className="badge rounded-pill bg-primary me-3">New</span> Say Hello to all Bootsland
                </h6>
                <h1 className="display-4 mt-3">
                    Bootsland Creative <span className="text-primary font-w-5">App Landing</span> Page
                </h1>
                {/* Text */}
                <p className="lead text-muted">
                    Build a Beautiful, Clean &amp; Modern Design website with flexible Bootstrap components.
                </p>
                {/* Buttons */}
                <Link to="/" className="btn btn-primary shadow me-1">
                    Download
                </Link>
                <Link onClick={openModal} className="btn popup-vimeo link-title">
                    <i className="la la-play-circle me-1 ic-3x align-middle" /> Play Video
                </Link>
            </Col>
        </Row>
    );
};

export default Herosection6;
