import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PriceTable5 = () => {
    const [activeTab, setActiveTab] = useState(1); // Initial active tab is set to the first tab

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };
    return (
        <section>
            <div className="container ps-8 pe-8">
                <div className="row align-items-end justify-content-between">
                    <div className="col-12 col-md-6 col-lg-5 mb-5 mb-md-0">
                        <div> <span className="badge badge-primary-soft p-2 font-w-6">
                            Price Table
                        </span>
                            <h2 className="mt-3 font-w-5">Simple, Fair and affordable prices for all.</h2>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <nav>
                            <div className="nav nav-tabs d-flex justify-content-md-end border-0" id="nav-tab" role="tablist">
                                <Link className={`nav-item nav-link border-0 ${activeTab === 1 ? 'active' : ''}`} id="nav-tab-1" data-bs-toggle="tab" role="tab" onClick={() => handleTabClick(1)} aria-controls="tab-1" aria-selected="true">Monthly</Link>
                                <Link className={`nav-item nav-link border-0 ${activeTab === 2 ? 'active' : ''}`} id="nav-tab-2" data-bs-toggle="tab" onClick={() => handleTabClick(2)} role="tab" aria-controls="tab-2" aria-selected="false">Yearly</Link>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="tab-content mt-8" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="nav-tab-1">
                                <div className="row align-items-center">
                                    <div className="col-12 col-lg-4 mb-8 mb-lg-0">

                                        <div className="card border-0 shadow">

                                            <div className="card-body py-8 px-6">

                                                <div className="text-center mb-5"> <span className="badge text-dark shadow">
                                                    <span className="h6 text-uppercase">Basic</span>
                                                </span>
                                                </div>
                                                <div className="mb-5">
                                                    <img className="img-fluid" src="assets/images/svg/01.svg" alt="testimage" />
                                                </div>

                                                <div className="d-flex align-items-start justify-content-between">

                                                    <p>Free Custom Domain</p>

                                                    <div className="ms-4"> <i className="la la-check text-primary fw-bold"></i>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start justify-content-between">

                                                    <p>Monthly updates</p>

                                                    <div className="ms-4"> <i className="la la-check text-primary fw-bold"></i>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start justify-content-between">

                                                    <p>Outstanding Support</p>

                                                    <div className="ms-4"> <i className="la la-check text-primary fw-bold"></i>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start justify-content-between">

                                                    <p>Happy Customers</p>

                                                    <div className="ms-4"> <i className="la la-check text-primary fw-bold"></i>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-center mt-5"> <span className="h3 mb-0 mt-2">$</span>
                                                    <span className="price display-3 text-primary font-w-6">29</span>
                                                </div>

                                                <p className="text-center text-muted">Per user</p>
                                                <Link src="#" className="btn btn-block btn-primary mt-5">
                                                    Choose Packege
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4">

                                        <div className="card border-0 shadow">

                                            <div className="card-body py-8 px-6">

                                                <div className="text-center mb-5"> <span className="badge text-dark shadow">
                                                    <span className="h6 text-uppercase">Standard</span>
                                                </span>
                                                </div>
                                                <div className="mb-5">
                                                    <img className="img-fluid" src="assets/images/svg/02.svg" alt="testimage" />
                                                </div>

                                                <div className="d-flex align-items-start justify-content-between">

                                                    <p>Free Custom Domain</p>

                                                    <div className="ms-4"> <i className="la la-check text-primary fw-bold"></i>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start justify-content-between">

                                                    <p>Monthly updates</p>

                                                    <div className="ms-4"> <i className="la la-check text-primary fw-bold"></i>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start justify-content-between">

                                                    <p>Outstanding Support</p>

                                                    <div className="ms-4"> <i className="la la-check text-primary fw-bold"></i>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start justify-content-between">

                                                    <p>Happy Customers</p>

                                                    <div className="ms-4"> <i className="la la-check text-primary fw-bold"></i>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-center mt-5"> <span className="h3 mb-0 mt-2">$</span>
                                                    <span className="price display-3 text-primary font-w-6">59</span>
                                                </div>

                                                <p className="text-center text-muted">Per user</p>
                                                <Link src="#" className="btn btn-block btn-primary mt-5">
                                                    Choose Packege
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4">

                                        <div className="card border-0 shadow">

                                            <div className="card-body py-8 px-6">

                                                <div className="text-center mb-5"> <span className="badge text-dark shadow">
                                                    <span className="h6 text-uppercase">Extended</span>
                                                </span>
                                                </div>
                                                <div className="mb-5">
                                                    <img className="img-fluid" src="assets/images/svg/02.svg" alt="testimage" />
                                                </div>

                                                <div className="d-flex align-items-start justify-content-between">

                                                    <p>Free Custom Domain</p>

                                                    <div className="ms-4"> <i className="la la-check text-primary fw-bold"></i>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start justify-content-between">

                                                    <p>Monthly updates</p>

                                                    <div className="ms-4"> <i className="la la-check text-primary fw-bold"></i>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start justify-content-between">

                                                    <p>Outstanding Support</p>

                                                    <div className="ms-4"> <i className="la la-check text-primary fw-bold"></i>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start justify-content-between">

                                                    <p>Happy Customers</p>

                                                    <div className="ms-4"> <i className="la la-check text-primary fw-bold"></i>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-center mt-5"> <span className="h3 mb-0 mt-2">$</span>
                                                    <span className="price display-3 text-primary font-w-6">89</span>
                                                </div>

                                                <p className="text-center text-muted">Per user</p>
                                                <Link src="#" className="btn btn-block btn-primary mt-5">
                                                    Choose Packege
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="nav-tab-2">
                                <div className="row align-items-center">
                                    <div className="col-12 col-lg-4 mb-8 mb-lg-0">

                                        <div className="card border-0 shadow">

                                            <div className="card-body py-8 px-6">

                                                <div className="text-center mb-5"> <span className="badge text-dark shadow">
                                                    <span className="h6 text-uppercase">Basic</span>
                                                </span>
                                                </div>
                                                <div className="mb-5">
                                                    <img className="img-fluid" src="assets/images/svg/01.svg" alt="testimage" />
                                                </div>

                                                <div className="d-flex align-items-start justify-content-between">

                                                    <p>Free Custom Domain</p>

                                                    <div className="ms-4"> <i className="la la-check text-primary fw-bold"></i>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start justify-content-between">

                                                    <p>Monthly updates</p>

                                                    <div className="ms-4"> <i className="la la-check text-primary fw-bold"></i>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start justify-content-between">

                                                    <p>Outstanding Support</p>

                                                    <div className="ms-4"> <i className="la la-check text-primary fw-bold"></i>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start justify-content-between">

                                                    <p>Happy Customers</p>

                                                    <div className="ms-4"> <i className="la la-check text-primary fw-bold"></i>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-center mt-5"> <span className="h3 mb-0 mt-2">$</span>
                                                    <span className="price display-3 text-primary font-w-6">29</span>
                                                </div>

                                                <p className="text-center text-muted">Per user</p>
                                                <Link src="#" className="btn btn-block btn-primary mt-5">
                                                    Choose Packege
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4">

                                        <div className="card border-0 shadow">
                                            <div className="card-body py-8 px-6">
                                                <div className="text-center mb-5"> <span className="badge text-dark shadow">
                                                    <span className="h6 text-uppercase">Standard</span>
                                                </span>
                                                </div>
                                                <div className="mb-5">
                                                    <img className="img-fluid" src="assets/images/svg/02.svg" alt="testimage" />
                                                </div>
                                                <div className="d-flex align-items-start justify-content-between">
                                                    <p>Free Custom Domain</p>
                                                    <div className="ms-4"> <i className="la la-check text-primary fw-bold"></i>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start justify-content-between">
                                                    <p>Monthly updates</p>
                                                    <div className="ms-4"> <i className="la la-check text-primary fw-bold"></i>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start justify-content-between">
                                                    <p>Outstanding Support</p>
                                                    <div className="ms-4"> <i className="la la-check text-primary fw-bold"></i>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start justify-content-between">
                                                    <p>Happy Customers</p>
                                                    <div className="ms-4"> <i className="la la-check text-primary fw-bold"></i>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mt-5"> <span className="h3 mb-0 mt-2">$</span>
                                                    <span className="price display-3 text-primary font-w-6">59</span>
                                                </div>
                                                <p className="text-center text-muted">Per user</p>
                                                <Link src="#" className="btn btn-block btn-primary mt-5">
                                                    Choose Packege
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <div className="card border-0 shadow">
                                            <div className="card-body py-8 px-6">
                                                <div className="text-center mb-5"> <span className="badge text-dark shadow">
                                                    <span className="h6 text-uppercase">Extended</span>
                                                </span>
                                                </div>
                                                <div className="mb-5">
                                                    <img className="img-fluid" src="assets/images/svg/02.svg" alt="testimage" />
                                                </div>
                                                <div className="d-flex align-items-start justify-content-between">
                                                    <p>Free Custom Domain</p>
                                                    <div className="ms-4"> <i className="la la-check text-primary fw-bold"></i>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start justify-content-between">
                                                    <p>Monthly updates</p>
                                                    <div className="ms-4"> <i className="la la-check text-primary fw-bold"></i>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start justify-content-between">
                                                    <p>Outstanding Support</p>
                                                    <div className="ms-4"> <i className="la la-check text-primary fw-bold"></i>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start justify-content-between">
                                                    <p>Happy Customers</p>
                                                    <div className="ms-4"> <i className="la la-check text-primary fw-bold"></i>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mt-5"> <span className="h3 mb-0 mt-2">$</span>
                                                    <span className="price display-3 text-primary font-w-6">89</span>
                                                </div>
                                                <p className="text-center text-muted">Per user</p>
                                                <Link src="#" className="btn btn-block btn-primary mt-5">
                                                    Choose Packege
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PriceTable5;
