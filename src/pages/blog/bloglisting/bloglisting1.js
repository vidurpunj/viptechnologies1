import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { setSelectedBlog } from '../../../store/reducer/blogReducer';
import Pageheading from '../../../widgets/PageHeading';
import CustomPagination from '../../../widgets/pagination';
import Sidebar from './Sidebar';

function Bloglisting1() {
    const dispatch = useDispatch()
    const blogData = useSelector((state) => state.blog.blogItems);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;
    const totalPages = Math.ceil(blogData.length / itemsPerPage);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleItems = blogData.slice(startIndex, endIndex);

    return (
        <div>
            <section className="position-relative">
                <Pageheading foldername={"Blog"} title={"Blog Listing One"} />
            </section>
            <div className='page-content'>
                <section>
                    <div className='container pe-8 ps-8'>
                        <div class="row justify-content-center mb-11">
                            <div class="col-12 col-lg-8">
                                <form class="form-inline my-2 my-lg-0 row">
                                    <input class="form-control  col" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-primary ms-sm-2 col-auto" type="submit">Search Blog</button>
                                </form>
                            </div>
                        </div>
                        <Row>
                            <Col lg={8} className='col-12 mb-6 mb-lg-0'>
                                {visibleItems.map((blog, index) => (
                                    <>
                                        <div className="card border-0 bg-transparent">
                                            <div className="position-absolute bg-white shadow-primary text-center p-2 rounded ms-3 mt-3">
                                                {blog.date}
                                                <br />
                                                {blog.month}
                                            </div>
                                            <img
                                                className="card-img-top shadow rounded"
                                                src={require(`../../../assets/images/blog/${blog.image.split('/')[3]}`)}
                                                alt=""
                                            />

                                            <div className="card-body pt-5"> <Link className="d-inline-block text-muted mb-2" to="#">{blog.category}</Link>
                                                <h2 className="h5 font-weight-medium">
                                                    <Link className="link-title" to="/blog-single" onClick={() => {
                                                        dispatch(setSelectedBlog(blog.id))
                                                    }}>{blog.title}</Link>
                                                </h2>
                                                <p>Businesses need access to development resources serspiciatis unde omnis iste natus error.</p>
                                            </div>
                                            <div className="card-footer bg-transparent border-0 pt-0">
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
                                        </div>
                                        <hr className="my-8" />
                                    </>
                                ))}
                                <div className=''>
                                    {blogData.length > 2 &&
                                        <CustomPagination
                                            activePage={currentPage}
                                            totalPages={totalPages}
                                            onPageChange={handlePageChange}
                                        />}</div>
                            </Col>
                            <Sidebar />

                        </Row>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Bloglisting1;