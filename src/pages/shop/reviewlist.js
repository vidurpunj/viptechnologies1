import React from 'react';
import img1 from '../../assets/images/thumbnail/01.jpg'
import img2 from '../../assets/images/thumbnail/02.jpg'
import img3 from '../../assets/images/thumbnail/03.jpg'

const ReviewList = () => {
    // Define the reviews data
    const reviews = [
        {
            name: 'Sasha James',
            imageSrc: img1,
            content:
                'Seuismod dissentiunt ne sit, ad eos iudico qualisque adversarium, tota falli et mei. Esse euismod urbanitas ut sed, et duo scaevola pericula splendide. Primis veritus contentiones nec ad, nec et tantas semper delicatissimi.',
            stars: 5,
        },
        {
            name: 'Ben Miller',
            imageSrc: img2,
            content:
                'Seuismod dissentiunt ne sit, ad eos iudico qualisque adversarium, tota falli et mei. Esse euismod urbanitas ut sed, et duo scaevola pericula splendide. Primis veritus contentiones nec ad, nec et tantas semper delicatissimi.',
            stars: 5,
        },
        {
            name: 'Keron Jolie',
            imageSrc: img3,
            content:
                'Seuismod dissentiunt ne sit, ad eos iudico qualisque adversarium, tota falli et mei. Esse euismod urbanitas ut sed, et duo scaevola pericula splendide. Primis veritus contentiones nec ad, nec et tantas semper delicatissimi.',
            stars: 5,
        },
    ];

    return (
        <div className="media-holder review-list mt-5 mb-5">
            {reviews.map((review, index) => (
                <div className="row mt-5" key={index}>
                    <div className="mb-4 mb-md-0 col-md-auto">
                        <img className="img-fluid" alt="testimage" src={review.imageSrc} />
                    </div>
                    <div className="col-md">
                        <h6>{review.name}</h6>
                        <p>{review.content}</p>
                        <span className="text-primary my-5">
                            {[...Array(review.stars)].map((_, starIndex) => (
                                <i key={starIndex} className="ti-star"></i>
                            ))}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReviewList;
