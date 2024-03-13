import React from 'react';
import icon01 from '../../assets/images/icon/01.svg';
import icon02 from '../../assets/images/icon/02.svg';
import icon03 from '../../assets/images/icon/03.svg';
import icon04 from '../../assets/images/icon/04.svg';
const SkillItem = ({ iconSrc, title, description }) => {
    return (
        <div className="col-lg-6 col-md-6 mt-6">
            <div className="d-flex align-items-start">
                <div className="me-3 p-3 border rounded border-light shadow-primary">
                    <img className="img-fluid" src={iconSrc} alt="PrimaryImage" />
                </div>
                <div>
                    <h5 className="mb-3 text-primary">{title}</h5>
                    <p className="mb-0">{description}</p>
                </div>
            </div>
        </div>
    );
};

const Skillbox = () => {
    const skills = [
        {
            iconSrc: icon01,
            title: 'App Development',
            description: 'Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.',
        },
        {
            iconSrc: icon03,
            title: 'Software Development',
            description: 'Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.',
        },
        {
            iconSrc: icon04,
            title: 'Easy to customize',
            description: 'Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.',
        },
        {
            iconSrc: icon02,
            title: 'Clean Code',
            description: 'Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.',
        },
    ];

    return (
        <section>
            <div className="container-fluid">
                <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-lg-5 col-xl-5 mb-8 mb-lg-0 order-lg-1">
                        <img src={require(`../../assets/images/about/06.png`)} alt="AboutImage" className="img-fluid" />
                    </div>
                    <div className="col-12 col-lg-7 col-xl-6">
                        <div className="mb-6">
                            <h2 className="font-w-6">One Platform, Deep Insight Why Choose Bootsland</h2>
                        </div>
                        <div className="row">
                            {skills.map((skill, index) => (
                                <SkillItem
                                    key={index}
                                    iconSrc={skill.iconSrc}
                                    title={skill.title}
                                    description={skill.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skillbox;
