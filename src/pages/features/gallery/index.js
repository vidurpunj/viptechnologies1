import React, { useEffect } from 'react';
import Gallerylist from '../../../widgets/gallery/gallerylist';
import Pageheading from '../../../widgets/PageHeading';

const Gallery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {/* hero section start */}
            <section className="position-relative">
                <Pageheading foldername={"Features"} title={"Gallery"} />
            </section>
            {/* hero section end */}
            {/* body content start */}
            <div className="page-content">
                {/* portfolio start */}
                <section>
                    <Gallerylist />
                </section>
                {/* portfolio end */}
            </div>
            {/* body content end */}
        </div>
    );
};

export default Gallery;
