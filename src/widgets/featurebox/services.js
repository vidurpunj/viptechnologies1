import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
function FeatureServices() {
    return (
        <div>
            <div className="row align-items-center">
                <div className="col-xl-4 col-lg-4 mb-8 mb-lg-0">
                    <Card className={`px-4 py-7 rounded hover-translate text-center border-0 bg-white shadow`}>
                        <CardImg top src={require('../../assets/images/svg/01.svg').default} alt="testimage" />
                        <CardBody>
                            <CardTitle tag="h5" className="mt-4 mb-3">Creative UI/UX 1</CardTitle>
                            <CardText>“Pixels whisper stories, buttons hum melodies.”
                                </CardText>
                            <Link to="#" className="btn-link" style={{ textDecoration: 'none' }}>Read Details</Link>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-6">
                    <Card className={`px-4 py-7 rounded hover-translate text-center bg-white shadow border-0`}>
                        <CardImg top src={require('../../assets/images/svg/02.svg').default} alt="testimage" />
                        <CardBody>
                            <CardTitle tag="h5" className="mt-4 mb-3">Flexibility</CardTitle>
                            <CardText>Flexible design bends, but never breaks.</CardText>
                            <Link to="#" className="btn-link" style={{ textDecoration: 'none' }}>Read Details</Link>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-6 mt-6 mt-sm-0">
                    <Card className={`px-4 py-7 rounded hover-translate text-center border-0 bg-white shadow`}>
                        <CardImg top src={require('../../assets/images/svg/03.svg').default} alt="testimage" />
                        <CardBody>
                            <CardTitle tag="h5" className="mt-4 mb-3">Easy Code</CardTitle>
                            <p>Clean code whispers simplicity; easy to read, easier to maintain.</p>
                            <Link to="#" className="btn-link" >Read Details</Link>

                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default FeatureServices;