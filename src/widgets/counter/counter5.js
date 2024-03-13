import React from 'react';
import CountUp from 'react-countup';

const Counter5 = () => {
    return (
        <section className="pt-0">
            <div className="container">
                <div className="row text-center align-items-center justify-content-between">
                    <div className="col-lg-3 col-md-4">
                        <div className="counter rounded py-8 px-3 shadow mb-5 mb-md-0">
                            <div className="counter-desc">
                                <CountUp end={234} duration={10} className="count-number text-primary display-4" />
                                <span className="display-4 text-light">k</span>
                                <h5 className="mb-0 mt-3 text-muted">Year Of Experience</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="counter rounded py-8 px-3 shadow mb-5">
                            <div className="counter-desc">
                                <CountUp end={234} duration={10} className="count-number text-success display-4" />
                                <span className="display-4 text-light">k</span>
                                <h5 className="mb-0 mt-3 text-muted">Completed Project</h5>
                            </div>
                        </div>
                        <div className="counter rounded py-8 px-3 shadow mb-5 mb-md-0">
                            <div className="counter-desc">
                                <CountUp end={455} duration={10} className="count-number text-warning display-4" />
                                <span className="display-4 text-light">k</span>
                                <h5 className="mb-0 mt-3 text-muted">Member</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="counter rounded py-8 px-3 shadow">
                            <div className="counter-desc">
                                <CountUp end={455} duration={10} className="count-number text-danger display-4" />
                                <span className="display-4 text-light">k</span>
                                <h5 className="mb-0 mt-3 text-muted">Satisfied Customers</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Counter5;
