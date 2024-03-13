import React from 'react';
import { Col, Row } from 'reactstrap';
import ReviewList from './reviewlist';

function Reviewsection() {
    const ratings = [
        { label: '5 Star', percentage: 90 },
        { label: '4 Star', percentage: 60 },
        { label: '3 Star', percentage: 40 },
        { label: '2 Star', percentage: 20 },
        { label: '1 Star', percentage: 10 },
    ];
    return (
        <Col md={7}>
            <Row className='total-rating'>
                <Col md={6}>
                    <div class="bg-light shadow-sm text-center p-5">
                        <h5>Overall</h5>
                        <h4>4.0</h4>
                        <h6>(03 Reviews)</h6>
                    </div>
                </Col>
                <Col md={6} className='mt-0 mt-lg-0'>
                    <div className="rating-list">
                        {ratings.map((rating, index) => (
                            <div className="d-flex align-items-center mb-2" key={index}>
                                <div className="text-nowrap me-3">{rating.label}</div>
                                <div className="w-100">
                                    <div className="progress" style={{ height: '5px' }}>
                                        <div
                                            className={
                                                rating.percentage >= 70
                                                    ? 'progress-bar bg-success'
                                                    : rating.percentage >= 40
                                                        ? 'progress-bar bg-warning'
                                                        : 'progress-bar bg-danger'
                                            }
                                            role="progressbar"
                                            style={{ width: `${rating.percentage}%` }}
                                            aria-valuenow={rating.percentage}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                </div>
                                <span className="text-muted ms-3">{`${rating.percentage}%`}</span>
                            </div>
                        ))}
                    </div>

                </Col>
            </Row>
            <ReviewList />
        </Col>
    )
}

export default Reviewsection