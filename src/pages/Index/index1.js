import React from 'react';
import About from '../../widgets/about/about';
import Services from '../../widgets/about/services';
import Work from '../../widgets/about/work';
import Blog1 from '../../widgets/blog/blog1';
import Feature from '../../widgets/featurebox/feature';
import Herosection from '../../widgets/herosection/herosection';
import Testimonial1 from '../../widgets/testimonial/testimonial1';

function Index() {
    return (
        <div>
            <div className="container">
                <Herosection />
            </div>
            <div className='page-wrapper'>
                <Feature />
                <About />
                <Services />
                <Work />
                <Testimonial1 />
                <Blog1 />
            </div>
        </div>
    )
}

export default Index;