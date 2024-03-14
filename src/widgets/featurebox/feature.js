import React from 'react';

const Feature = () => {
    return (
        <section className="text-center p-0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-4 mb-8 mb-lg-0">
                        <div className="px-4 py-7 rounded hover-translate bg-primary-soft">
                            <div>
                                <svg width={80} height={80} viewBox="0 0 24 24" fill="none" stroke="#f94f15" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid">
                                    <rect x={3} y={3} width={7} height={7} />
                                    <rect x={14} y={3} width={7} height={7} />
                                    <rect x={14} y={14} width={7} height={7} />
                                    <rect x={3} y={14} width={7} height={7} />
                                </svg>
                            </div>
                            <h5 className="mt-4 mb-3">Creative Design</h5>
                            <p className="mb-0">The art of transforming ideas into visually captivating and memorable expressions.</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="px-4 py-7 rounded hover-translate">
                            <div>
                                <svg width={80} height={80} viewBox="0 0 24 24" fill="none" stroke="#1360ef" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-square">
                                    <polyline points="9 11 12 14 22 4" />
                                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                </svg>
                            </div>
                            <h5 className="mt-4 mb-3">Easy To Start</h5>
                            <p className="mb-0">It is like a gentle breeze that nudges you forward, inviting you to take the first step on a promising journey.</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 mt-6 mt-sm-0">
                        <div className="px-4 py-7 rounded hover-translate">
                            <div>
                                <svg width={80} height={80} viewBox="0 0 24 24" fill="none" stroke="#1360ef" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="feather feather-wifi">
                                    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                                    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                                    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                                    <line x1={12} y1={20} x2={12} y2={20} />
                                </svg>
                            </div>
                            <h5 className="mt-4 mb-3">Management</h5>
                            <p className="mb-0">Website management involves maintaining, securing, and optimizing a website to ensure it remains professional, up-to-date, and fully functional. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;
