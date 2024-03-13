import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';

const Herosection8 = () => {
    const carouselItems = [
        {
            heading: 'Truly Flexible and Creative',
            highlight: 'Flexible and Creative',
            text: 'Build a Beautiful, Clean & Modern Design website with flexible Bootstrap components.',
        },
        {
            heading: 'Incredible Business Feature With Bootsland',
            highlight: 'Business Feature',
            text: 'Build a Beautiful, Clean & Modern Design website with flexible Bootstrap components.',
        },
        {
            heading: 'Bootsland Built With Static Bootstrap Code',
            highlight: 'Bootstrap Code',
            text: 'Build a Beautiful, Clean & Modern Design website with flexible Bootstrap components.',
        },
    ];

    return (
        <div className="row align-items-center">
            <div className="col-12 col-lg-5 col-xl-6 order-lg-2 mb-8 mb-lg-0">
                {/* Image */}
                <img src={require(`../../assets/images/hero/06.png`)} className="img-fluid" alt="..." />
            </div>
            <div className="col-12 col-lg-7 col-xl-6 order-lg-1">
                <OwlCarousel
                    className="owl-carousel no-pb"
                    dotData={false}
                    items={1}
                    autoplay={true}
                    margin={30}
                    dots={false}
                    loop={true}
                >
                    {carouselItems.map((item, index) => (
                        <div className="item" key={index}>
                            {/* Heading */}
                            <h1 className="display-4 font-w-6">
                                {item.heading}
                                <span className="text-primary">{item.highlight}</span>
                            </h1>
                            {/* Text */}
                            <p className="lead text-muted">{item.text}</p>
                            {/* Buttons */}
                            <Link to="/" className="btn btn-primary shadow me-1">
                                Contact Us
                            </Link>
                            <Link to="/" className="btn btn-outline-primary">
                                Get Started
                            </Link>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </div>
    );
};

export default Herosection8;
