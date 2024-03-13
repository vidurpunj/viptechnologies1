import {Route, Routes, useLocation} from 'react-router-dom';
import './App.css';
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';
import {Fragment} from 'react';
import Index from './pages/Index/index1';
import Index2 from './pages/Index/index2';
import Index3 from './pages/Index/index3';
import Index4 from './pages/Index/index4';
import Index5 from './pages/Index/index5';
import Index6 from './pages/Index/index6';
import Index7 from './pages/Index/index7';
import Index8 from './pages/Index/index8';
import Index9 from './pages/Index/index9';
import Index10 from './pages/Index/index10';
import Aboutus from './pages/company/aboutus';
import Aboutus2 from './pages/company/aboutus2';
import Career from './pages/company/career';
import CareerSingle from './pages/company/careersingle';
import BlogCard from './pages/blog/blogcard';
import Bloglisting1 from './pages/blog/bloglisting/bloglisting1';
import Bloglisting2 from './pages/blog/bloglisting/bloglisting2';
import BlogSingle from './pages/blog/blogsingle';
import Portfoliolist from './pages/portfolio/portfoliolist';
import PortfolioSingle from './pages/portfolio/portfoliosingle';
import Contact1 from './pages/contacts/contact1';
import Contact2 from './pages/contacts/contact2';
import SignIn1 from './pages/account/signin/signin1';
import SignIn2 from './pages/account/signin/signin2';
import SignUp from './pages/account/signup';
import ForgotPassword from './pages/account/forgotpassword';
import Pricing from './pages/utilities/pricing';
import Faq from './pages/utilities/faq';
import PrivacyPolicy from './pages/utilities/privacypolicy';
import TermCondition from './pages/utilities/t&c';
import ComingSoon from './pages/utilities/comingsoon';
import Maintenance from './pages/utilities/maintenance';
import PageNotFound from './pages/utilities/404';
import ProductGrid from './pages/shop/productgrid';
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ProductList from './pages/shop/productlist';
import ProductSingle from './pages/shop/productsingle';
import ProductCart from './pages/shop/ProductCart';
import CheckOut from './pages/shop/Chechout';
import OrderComplete from './pages/shop/OrderComplete';
import FeaturesAccordion from './pages/features/accordion';
import BlogDemo from './pages/features/blog';
import CounterDemo from './pages/features/counter';
import FeatureBox from './pages/features/featurebox';
import HeroBanner from './pages/features/herobanner';
import Gallery from './pages/features/gallery';
import PricingTable from './pages/features/pricingtable';
import Team from './pages/features/team';
import TestimonialDemo from './pages/features/testimonial';
import VideoLightbox from './pages/features/videolightbox';
import Scrolltop from './Layout/Header/BackToTop';

function App() {
    const location = useLocation();
    const getUrl = (pathname) => {
        let pathArray = pathname.split('/');
        return `/${pathArray[1]}` === '/coming-soon'
            ? true
            : `/${pathArray[1]}` === '/maintenance'
                ? true
                : `/${pathArray[1]}` === '/page-not-found'
                    ? true
                    : false;
    };
    const setHeader = (pathname) => {
        let pathArray = pathname.split('/');
        return `/${pathArray[1]}` === '/index2'
            ? true
            : `/${pathArray[1]}` === '/index3'
                ? true
                : `/${pathArray[1]}` === '/index4'
                    ? true
                    : `/${pathArray[1]}` === '/index5'
                        ? true
                        : `/${pathArray[1]}` === '/index9'
                            ? true
                            : `/${pathArray[1]}` === '/index10' ? true : false;
    };
    const setFooter = (pathname) => {
        let pathArray = pathname.split('/');
        return `/${pathArray[1]}` === '/index10' ? false : true;
    };
    const scrollbarStyle = `
  ::-webkit-scrollbar {
    display: none;
  }
`;
    return (
        <>

            <Fragment>

                <style>{scrollbarStyle}</style>

                {/* <Header /> */}
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                {getUrl(location.pathname) ?
                    <Routes>
                        <Route path="/coming-soon" element={<ComingSoon/>}/>
                        <Route path="/maintenance" element={<Maintenance/>}/>
                        <Route path="/page-not-found" element={<PageNotFound/>}/>
                    </Routes> :
                    <div className="page-wrapper">
                        {setHeader(location.pathname) ? null : <Header/>}

                        <Routes>
                            <Route exact path="/" element={<Index/>}/>
                            <Route exact path="/index2" element={<Index2/>}/>
                            <Route exact path="/index3" element={<Index3/>}/>
                            <Route exact path="/index4" element={<Index4/>}/>
                            <Route exact path="/index5" element={<Index5/>}/>
                            <Route exact path="/index6" element={<Index6/>}/>
                            <Route exact path="/index7" element={<Index7/>}/>
                            <Route exact path="/index8" element={<Index8/>}/>
                            <Route exact path="/index9" element={<Index9/>}/>
                            <Route exact path="/index10" element={<Index10/>}/>

                            {/* Company Pages */}
                            <Route path="/about-us" element={<Aboutus/>}/>
                            <Route path="/about-us2" element={<Aboutus2/>}/>
                            <Route path="/career" element={<Career/>}/>
                            <Route path="/career-single" element={<CareerSingle/>}/>

                            {/* Blog Pages */}
                            <Route path="/blog-card" element={<BlogCard/>}/>
                            <Route path="/blog-listing-1" element={<Bloglisting1/>}/>
                            <Route path="/blog-listing-2" element={<Bloglisting2/>}/>
                            <Route path="/blog-single" element={<BlogSingle/>}/>

                            {/* Portfolio Pages */}
                            <Route path="/portfolio" element={<Portfoliolist/>}/>
                            <Route path="/portfolio-single" element={<PortfolioSingle/>}/>

                            {/* Contact Pages */}
                            <Route path="/contact-us" element={<Contact1/>}/>
                            <Route path="/contact-us-1" element={<Contact2/>}/>

                            {/* Account Pages */}
                            <Route path="/sign-in" element={<SignIn1/>}/>
                            <Route path="/sign-in-1" element={<SignIn2/>}/>
                            <Route path="/sign-up" element={<SignUp/>}/>
                            <Route path="/forgot-password" element={<ForgotPassword/>}/>

                            {/* Utilitie Pages */}
                            <Route path="/pricing" element={<Pricing/>}/>
                            <Route path="/faq" element={<Faq/>}/>
                            <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
                            <Route path="/term-condition" element={<TermCondition/>}/>

                            {/* Shop Pages */}
                            <Route path="/product-grid" element={<ProductGrid/>}/>
                            <Route path="/product-list" element={<ProductList/>}/>
                            <Route path="/product-single" element={<ProductSingle/>}/>
                            <Route path="/cart" element={<ProductCart/>}/>
                            <Route path="/checkout" element={<CheckOut/>}/>
                            <Route path="/order-complate" element={<OrderComplete/>}/>

                            {/* Feature Pages */}
                            <Route path="/accordion" element={<FeaturesAccordion/>}/>
                            <Route path="/blog-list" element={<BlogDemo/>}/>
                            <Route path="/number-counter" element={<CounterDemo/>}/>
                            <Route path="/feature-box" element={<FeatureBox/>}/>
                            <Route path="/hero-banner" element={<HeroBanner/>}/>
                            <Route path="/gallery" element={<Gallery/>}/>
                            <Route path="/pricing-table" element={<PricingTable/>}/>
                            <Route path="/team" element={<Team/>}/>
                            <Route path="/testimonial" element={<TestimonialDemo/>}/>
                            <Route path="/video-lightbox" element={<VideoLightbox/>}/>
                            {/*

              */}


                        </Routes>

                        {setFooter(location.pathname) ? <Footer/> : null}
                        <Scrolltop/>


                    </div>
                }
            </Fragment>
        </>
    );
}

export default App;
