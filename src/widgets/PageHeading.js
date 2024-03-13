import React, { useCallback } from 'react';
import Particles from "react-particles";
import { Link } from 'react-router-dom';
import { loadFull } from 'tsparticles';

const PageHeading = (props) => {

    const particlesInit = useCallback(async engine => {

        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log();
    }, []);

    return (
        <div className="container">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                options={{
                    "fps_limit": '60',
                    "fullScreen":
                    {
                        "enable": false,

                    },
                    "particles": {
                        "number": {
                            "value": 160,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#1360ef"
                        },

                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#f94f15"
                            },
                            "polygon": {
                                "nb_sides": 5
                            },

                        },

                        "opacity": {
                            "value": 1,
                            "random": true,
                            "anim": {
                                "enable": true,
                                "speed": 1,
                                "opacity_min": 0,
                                "sync": false
                            }
                        },

                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 4,
                                "size_min": 0.3,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": false,
                            "distance": 150,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 1,
                            "direction": "none",
                            "random": true,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 600
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 250,
                                "size": 0,
                                "duration": 2,
                                "opacity": 0,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200,
                                "duration": 0.4
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true
                }}
            />
            <div className="row  text-center">
                <div className="col">
                    <h1>{props.title}</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center bg-transparent p-0 m-0">
                            <li className="breadcrumb-item">
                                <Link className="text-dark" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="breadcrumb-item">Pages</li>
                            <li className="breadcrumb-item">{props.foldername}</li>
                            <li className="breadcrumb-item active text-primary" aria-current="page">
                                {props.title}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default PageHeading;
