import React from 'react';
import OwlCarousel from 'react-owl-carousel';

const Clientlogo = ({ logoitems, margintop }) => {
    return (
        <OwlCarousel
            className={`owl-carousel mt-${margintop} no-pb`}
            dotData={false}
            items={logoitems}
            autoplay={true}
            margin={30}
            dots={false}
            loop={true}
        >
            <div className="item">
                <div className="clients-logo">
                    <img className="img-fluid" src={require(`../../assets/images/client/07.png`)} alt="testimage" />
                </div>
            </div>
            <div className="item">
                <div className="clients-logo">
                    <img className="img-fluid" src={require(`../../assets/images/client/08.png`)} alt="testimage" />
                </div>
            </div>
            <div className="item">
                <div className="clients-logo">
                    <img className="img-fluid" src={require(`../../assets/images/client/09.png`)} alt="testimage" />
                </div>
            </div>
            <div className="item">
                <div className="clients-logo">
                    <img className="img-fluid" src={require(`../../assets/images/client/10.png`)} alt="testimage" />
                </div>
            </div>
            <div className="item">
                <div className="clients-logo">
                    <img className="img-fluid" src={require(`../../assets/images/client/11.png`)} alt="testimage" />
                </div>
            </div>
            <div className="item">
                <div className="clients-logo">
                    <img className="img-fluid" src={require(`../../assets/images/client/12.png`)} alt="testimage" />
                </div>
            </div>
        </OwlCarousel>
    );
};

export default Clientlogo;
