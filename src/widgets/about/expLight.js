import React from 'react';
import img from '../../assets/images/about/10.jpg';
import img1 from '../../assets/images/about/11.jpg';
import img2 from '../../assets/images/about/12.jpg';

const ExperienceSection = () => {
    return (
        <section>
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-lg-6 mb-6 mb-lg-0 order-lg-1">
                        <div className="row align-items-center">
                            <div className="col-7">
                                <img src={img} className="img-fluid rounded shadow-lg" alt="..." />
                            </div>
                            <div className="col-5">
                                <img src={img1} className="img-fluid rounded shadow-lg mb-4" alt="..." />
                                <img src={img2} className="img-fluid rounded shadow-lg mt-1" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                        <div>
                            <span className="badge badge-light-soft p-2">
                                <i className="la la-exclamation ic-3x rotation"></i>
                            </span>
                            <h2 className="mt-3 text-white">Bootsland Crafting Beautiful Experience</h2>
                            <p className="lead text-white">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                            <p className="mb-0">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExperienceSection;
