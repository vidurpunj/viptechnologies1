import { Link } from 'react-router-dom';

const TeamMember = ({ imageSrc, name, role }) => {
    return (
        <div className="col-12 col-lg-3 col-md-6 mb-8 mb-lg-0">
            <div className="text-center hover-translate p-5">
                <div className="mb-3">
                    <img className="img-fluid rounded-top" src={imageSrc} alt="testimage" />
                </div>
                <div>
                    <h6 className="mb-1">{name}</h6>
                    <small className="text-muted mb-3 d-block">{role}</small>
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
    );
};
export default TeamMember;