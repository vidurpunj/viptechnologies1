import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PortfolioInfo = () => {
    const [activeTab, setActiveTab] = useState('tab1-1');

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <section>
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-8 col-md-12">
                        <div className="mb-6">
                            <span className="badge badge-primary-soft p-2">
                                <i className="la la-exclamation ic-3x rotation" />
                            </span>
                            <h2 className="mt-3">Open Positions</h2>
                            <p className="lead">
                                We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="tab">
                            {/* Nav tabs */}
                            <nav>
                                <div className="nav nav-tabs w-100 border-0" id="nav-tab" role="tablist">
                                    <Link
                                        className={`nav-item nav-link ${activeTab === 'tab1-1' ? 'active' : ''}`}
                                        id="nav-tab1"
                                        onClick={() => handleTabChange('tab1-1')}
                                    >
                                        Designer
                                    </Link>
                                    <Link
                                        className={`nav-item nav-link ${activeTab === 'tab1-2' ? 'active' : ''}`}
                                        id="nav-tab2"
                                        onClick={() => handleTabChange('tab1-2')}
                                    >
                                        PHP Web Developer
                                    </Link>
                                    <Link
                                        className={`nav-item nav-link ${activeTab === 'tab1-3' ? 'active' : ''}`}
                                        id="nav-tab3"
                                        onClick={() => handleTabChange('tab1-3')}
                                    >
                                        Marketing Manager
                                    </Link>
                                    <Link
                                        className={`nav-item nav-link ${activeTab === 'tab1-4' ? 'active' : ''}`}
                                        id="nav-tab4"
                                        onClick={() => handleTabChange('tab1-4')}
                                    >
                                        Front-End Web Developer
                                    </Link>
                                </div>
                            </nav>
                            <div className="tab-content px-5 pt-5" id="nav-tabContent">
                                <div role="tabpanel" className={`tab-pane fade ${activeTab === 'tab1-1' ? 'show active' : ''}`} id="tab1-1">
                                    {/* Tab 1 content */}
                                    <h5>Job Descriptions:</h5>
                                    <p>Get in touch with us and we’ll figure out something that works for everyone Consulterz discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur</p>
                                    <h5 className="mt-5 mb-4">Desired Skills: </h5>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">It has survived not only five centuries, leap typesetting</p>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">Bootsland discovering the source behind the ubiquitous</p>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">The smartest thing to do with your Landing</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">I will give you a complete account the teachings</p>
                                    </div> <Link className="btn btn-primary mt-5" to="career-single">Apply Now</Link>
                                </div>
                                <div role="tabpanel" className={`tab-pane fade ${activeTab === 'tab1-2' ? 'show active' : ''}`} id="tab1-2">
                                    {/* Tab 2 content */}
                                    <h5>Job Descriptions:</h5>
                                    <p>Get in touch with us and we’ll figure out something that works for everyone Consulterz discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur</p>
                                    <h5 className="mt-5 mb-4">Desired Skills: </h5>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">It has survived not only five centuries, leap typesetting</p>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">Bootsland discovering the source behind the ubiquitous</p>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">The smartest thing to do with your Landing</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">I will give you a complete account the teachings</p>
                                    </div> <Link className="btn btn-primary mt-5" to="career-single">Apply Now</Link>
                                </div>
                                <div role="tabpanel" className={`tab-pane fade ${activeTab === 'tab1-3' ? 'show active' : ''}`} id="tab1-3">
                                    {/* Tab 3 content */}
                                    <h5>Job Descriptions:</h5>
                                    <p>Get in touch with us and we’ll figure out something that works for everyone Consulterz discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur</p>
                                    <h5 className="mt-5 mb-4">Desired Skills: </h5>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">It has survived not only five centuries, leap typesetting</p>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">Bootsland discovering the source behind the ubiquitous</p>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">The smartest thing to do with your Landing</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">I will give you a complete account the teachings</p>
                                    </div> <Link className="btn btn-primary mt-5" to="career-single">Apply Now</Link>
                                </div>
                                <div role="tabpanel" className={`tab-pane fade ${activeTab === 'tab1-4' ? 'show active' : ''}`} id="tab1-4">
                                    {/* Tab 4 content */}
                                    <h5>Job Descriptions:</h5>
                                    <p>Get in touch with us and we’ll figure out something that works for everyone Consulterz discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur</p>
                                    <h5 className="mt-5 mb-4">Desired Skills: </h5>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">It has survived not only five centuries, leap typesetting</p>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">Bootsland discovering the source behind the ubiquitous</p>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">The smartest thing to do with your Landing</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">I will give you a complete account the teachings</p>
                                    </div> <Link className="btn btn-primary mt-5" to="career-single">Apply Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PortfolioInfo;