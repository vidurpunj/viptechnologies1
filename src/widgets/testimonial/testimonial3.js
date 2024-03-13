import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react';
import ReactOwlCarousel from 'react-owl-carousel';

const Testimonial3 = () => {
    const testimonials = [
        {
            image: require('../../assets/images/testimonial/01.jpg'),
            content:
                'Bootsland Amazing Landing Page All-in-one, clean code, Crative &amp; Modern design. We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.',
            author: 'Romi Jensen',
            role: 'Founder',
        },
        {
            image: require('../../assets/images/testimonial/02.jpg'),
            content:
                'Bootsland Amazing Landing Page All-in-one, clean code, Crative &amp; Modern design. We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.',
            author: 'Johny Stock',
            role: 'Supervisor',
        },
        {
            image: require('../../assets/images/testimonial/03.jpg'),
            content:
                'Bootsland Amazing Landing Page All-in-one, clean code, Crative &amp; Modern design. We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.',
            author: 'Leeny Biton',
            role: 'Manager',
        },
    ];

    return (
        <section>
            <div className="container ps-8 pe-8">
                <div className="row justify-content-center text-center">
                    <div className="col">
                        <ReactOwlCarousel
                            className="owl-carousel no-pb owl-2"
                            dotData={false}
                            nav={true}
                            items={1}
                            autoplay={true}
                            dots={false}
                            loop={true}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div className="item" key={index}>
                                    <div className="row justify-content-center text-center">
                                        <div className="col-12 col-md-10 col-lg-8">
                                            <div className="card bg-transparent border-0">
                                                <div>
                                                    <img
                                                        alt="testimage"
                                                        src={testimonial.image}
                                                        className="shadow-primary img-fluid rounded-circle d-inline"
                                                        style={{ width: '12%' }}
                                                    />
                                                </div>
                                                <div className="card-body p-0 mt-5">
                                                    <p className="lead font-w-5">{testimonial.content}</p>
                                                    <div>
                                                        <h5 className="text-primary d-inline mb-0">{testimonial.author}</h5>
                                                        <small className="text-dark font-w-5 font-italic">- {testimonial.role}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </ReactOwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial3;
