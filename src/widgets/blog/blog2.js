import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { setSelectedBlog } from '../../store/reducer/blogReducer';

function Blog2() {
    const blogData = useSelector((state) => state.blog.blogItems);
    const dispatch = useDispatch()
    return (
        <div>
            <Row className="">
                {blogData.slice(0, 2).map((blog, index) => (
                    <Col key={index} lg="6" className="col-12 mb-8 mb-lg-0">
                        <div className="card border-0 shadow">
                            <div className="position-absolute bg-white shadow-primary text-center p-2 rounded ms-3 mt-3">
                                {blog.date}
                                <br />
                                {blog.month}
                            </div>
                            <div className="row no-gutters align-items-center">
                                <div className="col-md-5">
                                    <img
                                        src={require(`../../assets/images/blog/${blog.image.split('/')[3]}`)}
                                        className="img-fluid" alt="..." />
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body"> <Link className="d-inline-block text-muted mb-2" to="/">{blog.category}</Link>
                                        <h2 className="h5 font-weight-medium">
                                            {blog.title}
                                        </h2>
                                        <p>Businesses need access to development resources serspiciatis.</p>
                                        <Link className="btn-link text-muted" to="/blog-single"
                                            onClick={() => {
                                                dispatch(setSelectedBlog(blog.id))
                                            }}>
                                            Read More
                                        </Link>                                            </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>

        </div>
    )
}

export default Blog2