import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { setSelectedBlog } from '../../store/reducer/blogReducer';

const Blog4 = () => {
    const blogData = useSelector((state) => state.blog.blogItems);

    const dispatch = useDispatch();

    return (
        <section>
            <Container className="ps-8 pe-8">
                <Row className="row align-items-end mb-5">
                    <Col className="col-12 col-md-12 col-lg-4">
                        <div> <span className="badge badge-primary-soft p-2">
                            <i className="la la-bold ic-3x rotation"></i>
                        </span>
                            <h2 className="mt-4 mb-0">From Our Blog List Latest Feed</h2>
                        </div>
                    </Col>
                    <Col className="col-12 col-md-12 col-lg-6 ms-auto">
                        <div>
                            <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="">
                    {blogData.slice(0, 3).map((blog, index) => (
                        <Col key={index} lg="4" className="mb-6 mb-lg-0 mt-6" >
                            <div className="card border-0 bg-transparent">
                                <div className="position-absolute bg-white shadow-primary text-center p-2 rounded ms-3 mt-3">
                                    {blog.date}
                                    <br />
                                    {blog.month}
                                </div>
                                <img
                                    className="card-img-top shadow rounded"
                                    src={require(`../../assets/images/blog/${blog.image.split('/')[3]}`)}
                                    alt="testimage"
                                />
                                <div className="card-footer bg-transparent border-0 pt-5">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item pe-4">
                                            <Link to="#" className="text-dark">
                                                <i className="ti-comments me-1 text-muted" /> {blog.comments}
                                            </Link>
                                        </li>
                                        <li className="list-inline-item pe-4">
                                            <Link to="#" className="text-dark">
                                                <i className="ti-eye me-1 text-muted" /> {blog.views}
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="text-dark">
                                                <i className="ti-comments me-1 text-muted" /> 14
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body pt-0">
                                    <h2 className="h5 font-weight-medium">{blog.title}</h2>
                                    <p className="mb-5">
                                        Businesses need access to development resources serspiciatis unde omnis iste natus error.
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <Link className="text-dark bg-light px-3 py-1 rounded" to="#">
                                                {blog.category}
                                            </Link>
                                        </div>
                                        <Link className="btn-link text-muted" to="/blog-single"
                                            onClick={() => {
                                                dispatch(setSelectedBlog(blog.id))
                                            }}>
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section >

    );
};

export default Blog4;
