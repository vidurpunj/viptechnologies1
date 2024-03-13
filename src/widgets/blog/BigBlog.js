import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { setSelectedBlog } from '../../store/reducer/blogReducer';
import CustomPagination from '../pagination';

const BlogCard = ({ id, imageSrc, category, title, description, commentCount, viewCount }) => {
    const dispatch = useDispatch()
    return (
        <div className="col-12 col-lg-6 mb-6 mb-lg-0">
            {/* Blog Card */}
            <div className="card border-0 bg-transparent">
                <div className="position-absolute bg-white shadow-primary text-center p-2 rounded ms-3 mt-3">15<br />July</div>
                <img className="card-img-top shadow rounded" src={imageSrc} alt="testimage" />
                <div className="card-body pt-5">
                    <Link className="d-inline-block text-muted mb-2" to="/">{category}</Link>
                    <h2 className="h5 font-weight-medium">
                        <Link className="link-title" to="/blog-single" onClick={() => {
                            dispatch(setSelectedBlog(id))
                        }}>{title}</Link>
                    </h2>
                    <p>
                        Businesses need access to development resources serspiciatis unde omnis iste natus error.
                    </p>
                </div>
                <div className="card-footer bg-transparent border-0 pt-0">
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item pe-4">
                            <Link to="#" className="text-muted">
                                <i className="ti-comments me-1 text-primary" /> {commentCount}
                            </Link>
                        </li>
                        <li className="list-inline-item pe-4">
                            <Link to="#" className="text-muted">
                                <i className="ti-eye me-1 text-primary" /> {viewCount}
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
    );
};

const Bigblog = () => {
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
        <section>
            <Container className="">
                <div className="row mt-8">
                    {visibleItems.map((blog, index) => (
                        <BlogCard
                            id={blog.id}
                            key={index}
                            imageSrc={require(`../../assets/images/blog/${blog.image.split('/')[3]}`)}

                            // imageSrc={blog.imageSrc}
                            category={blog.category}
                            title={blog.title}
                            description={blog.description}
                            commentCount={blog.comments}
                            viewCount={blog.views}
                        />
                    ))}
                </div>

                {blogData.length > 2 &&
                    <CustomPagination
                        activePage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />}
            </Container>
        </section>
    );
};

export default Bigblog;
