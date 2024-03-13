import React from 'react';
import Videobox1 from '../videolightbox/videobox';

const Herosection1 = () => {
    return (
        <section className="position-relative overflow-hidden pb-0">
            <div className="container">
                <div className="row">
                    <Videobox1 />
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="heroparallax">
                            <img className="img-fluid thumbnail" src={require(`../../assets/images/hero/08.png`)} alt="testimage" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Herosection1;
