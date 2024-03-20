import React from 'react';
import About from '../../widgets/about/about';
import Services from '../../widgets/about/services';
import Work from '../../widgets/about/work';
import Feature from '../../widgets/featurebox/feature';
import Herosection from '../../widgets/herosection/herosection';

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
                {/*<Testimonial1 />*/}
                {/*<Blog1 />*/}
            </div>
        </div>
    )
}

export default Index;