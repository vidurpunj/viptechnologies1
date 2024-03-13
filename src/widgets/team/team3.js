import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';

const Team3 = () => {
    const teamMembers = [
        {
            name: 'Vinit Saw',
            role: 'Manager',
            image: require('../../assets/images/team/01.png'),
        },
        {
            name: 'Nina Loe',
            role: 'CEO',
            image: require('../../assets/images/team/02.png'),
        },
        {
            name: 'Renut John',
            role: 'Founder',
            image: require('../../assets/images/team/03.png'),
        },
        {
            name: 'Celio Jemy',
            role: 'Founder',
            image: require('../../assets/images/team/02.png'),
        },
    ];

    return (
        <OwlCarousel
            className="owl-carousel"
            dotData={false}
            items={3}
            autoplay={true}
            margin={30}
            dots={false}
            loop={true}
            nav={true}
            responsive={{
                0: {
                    items: 1 // Show 1 item for screens with width less than or equal to 0px (mobile screens)
                },
                768: {
                    items: 3 // Show 3 items for screens with width greater than or equal to 768px (larger screens)
                }
            }}
        >
            {teamMembers.map((member, index) => (
                <div className="item" key={index}>
                    <div className="bg-primary-soft rounded text-center p-5">
                        <div className="mb-3">
                            <img className="img-fluid rounded-top d-inline" style={{ height: '80%', width: '70%' }} src={member.image} alt="testimage" />
                        </div>
                        <div>
                            <h5 className="mb-1 text-light">{member.name}</h5>
                            <small className="text-primary mb-3 d-block">{member.role}</small>
                            <p>Build a Beautiful, Clean &amp; Modern Design website.</p>
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                    <Link className="text-muted" to="/">
                                        <i className="la la-facebook h4" />
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link className="text-muted h6" to="/">
                                        <i className="la la-dribbble h4" />
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link className="text-muted h6" to="/">
                                        <i className="la la-twitter h4" />
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link className="text-muted h6" to="/">
                                        <i className="la la-linkedin h4" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </OwlCarousel>
    );
};

export default Team3;
