import React from 'react';
import { default as image01, default as image02 } from '../../../assets/images/blog/blog-thumb/02.png';
import image03 from '../../../assets/images/blog/blog-thumb/03.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const recentStories = [
        {
            title: 'Bootsland Perfect Performance landing Page',
            date: '27 November 2019',
            image: image01
        },
        {
            title: 'The most powerfull template that make you.',
            date: '15 November 2019',
            image: image02
        },
        {
            title: 'A brand for a company is like a reputation person.',
            date: '05 November 2019',
            image: image03
        }
    ];

    const categories = [
        { name: 'All', count: 74 },
        { name: 'Arts and Entertainment', count: 23 },
        { name: 'Featured', count: 14 },
        { name: 'Daily news', count: 48 },
        { name: 'Blog Post', count: 32 }
    ];

    const tags = [
        'Bootsland',
        'Web Design',
        'Saas',
        'Corporate',
        'Sass',
        'Software',
        'Landing',
        'Startup'
    ];

    return (
        <div className="col-12 col-lg-4 ms-auto">
            <div>
                <h4 className="mb-5">Recent Stories</h4>
                {recentStories.map((story, index) => (
                    <article key={index}>
                        <div className="row align-items-center">
                            <div className="col-8">
                                <h5 className="h6">
                                    <Link className="link-title" to="/blog-single">
                                        {story.title}
                                    </Link>
                                </h5>
                                <Link className="d-inline-block text-muted small font-w-5" to="/">
                                    {story.date}
                                </Link>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src={story.image} alt="..." />
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            <div className="mt-11">
                <h4 className="mb-5">Categories</h4>
                <ul className="list-unstyled list-group list-group-flush mb-5">
                    {categories.map((category, index) => (
                        <li key={index} className="mb-4">
                            <Link className="list-group-item list-group-item-action border-0 p-0" to="/">
                                {category.name}
                                <span className="badge badge-primary-soft text-dark fw-normal p-2 rounded-pill ms-2">
                                    {category.count}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-11">
                <h4 className="mb-5">Tags</h4>
                <div>
                    {tags.map((tag, index) => (
                        <Link key={index} className="btn btn-link text-dark btn-sm bg-primary-soft m-1" to="/">
                            {tag}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
