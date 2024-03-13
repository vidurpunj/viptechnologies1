import React, { useEffect } from 'react';
import Pageheading from '../../../widgets/PageHeading';
import Blog4 from '../../../widgets/blog/blog4';
import Bigblog from '../../../widgets/blog/BigBlog';


const BlogCard = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {/*hero section start*/}
            <section className="position-relative">
                <Pageheading foldername="Blog" title="Blog Card Style" />
            </section>
            {/*hero section end*/}
            {/*body content start*/}
            <div className="page-content">
                {/*blog start*/}

                <Blog4 />
                <Bigblog />

                {/*blog end*/}
            </div>
            {/*body content end*/}
        </div>
    );
};

export default BlogCard;
