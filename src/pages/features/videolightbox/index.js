import React, { useEffect } from 'react';
import Videobox1 from '../../../widgets/videolightbox/videobox';
import Pageheading from '../../../widgets/PageHeading';
import Videobox2 from '../../../widgets/videolightbox/videobox2';
import Videobox3 from '../../../widgets/videolightbox/videobox3';
import Videobox4 from '../../../widgets/videolightbox/videobox4';


const VideoLightbox = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {/*hero section start*/}
            <section className="position-relative">
                <Pageheading foldername={"Features"} title={"Video Lightbox"} />
            </section>
            {/*hero section end*/}
            {/*body content start*/}
            <div className="page-content">
                {/*hero section start*/}
                <section className="position-relative overflow-hidden">
                    <div className="container">
                        <Videobox1 />
                    </div>
                </section>
                {/*hero section end*/}
                {/*hero section start*/}
                <section>
                    <div className="container">
                        <Videobox2 />
                    </div>
                </section>
                {/*hero section end*/}
                {/*hero section start*/}
                <section>
                    <div className="container">
                        <Videobox3 />
                    </div>
                </section>
                {/*hero section end*/}
                {/*counter start*/}
                <section>
                    <div className="container-fluid">
                        <Videobox4 />
                    </div>
                </section>
                {/*counter end*/}
            </div>
            {/*body content end*/}
        </div>
    );
}

export default VideoLightbox;
