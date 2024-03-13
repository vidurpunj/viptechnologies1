import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSelectedBlog } from '../../store/reducer/blogReducer';

const Blog3 = () => {

    const blogData = useSelector((state) => state.blog.blogItems);

    const dispatch = useDispatch();
    return (
        <div className="row">
            <div className="col-12">
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
                    {blogData.map((item, index) => (
                        <div className="item" key={index}>
                            {/* Blog Card */}
                            <div className="card bg-light">
                                <div className="position-absolute bg-white shadow-primary text-center p-2 rounded ms-3 mt-3">
                                    {item.date}
                                    <br />
                                    {item.month}
                                </div>
                                {/* <img className="card-img-top shadow rounded" src={item.image} alt="testimage" /> */}
                                <img className="card-img-top shadow rounded"
                                    src={require(`../../assets/images/blog/${item.image.split('/')[3]}`)}
                                    alt="testimage" />

                                <div className="card-body pt-5 bg-white">
                                    <Link className="d-inline-block text-muted mb-2" to="#">
                                        {item.category}
                                    </Link>
                                    <h2 className="h5 font-weight-medium">
                                        <Link className="link-title" to="/blog-single"
                                            onClick={() => {
                                                dispatch(setSelectedBlog(item.id))
                                            }}>
                                            {item.title}
                                        </Link>
                                    </h2>
                                    <p className="mb-0">Businesses need access to development resources serspiciatis unde omnis iste natus error.</p>
                                </div>
                                <div className="card-footer bg-transparent border-0 text-center">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item pe-4">
                                            <Link to="3" className="text-muted">
                                                <i className="ti-comments me-1 text-primary" /> {item.comments}
                                            </Link>
                                        </li>
                                        <li className="list-inline-item pe-4">
                                            <Link to="#" className="text-muted">
                                                <i className="ti-eye me-1 text-primary" /> {item.views}
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="text-muted">
                                                <i className="ti-comments me-1 text-primary" /> 14
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div />
                            </div>
                            {/* End Blog Card */}
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </div>
    );
};

export default Blog3;
