import React from 'react'

function Header1() {
    return (
        <div>
            <header class="site-header">
                <div id="header-wrap">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <nav class="navbar navbar-expand-lg navbar-light">
                                    <Link class="navbar-brand logo text-dark h2 mb-0" to="/index-2">
                                        Boots<span class="text-primary fw-bold">Land.</span>
                                    </Link>
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarNav">
                                        <ul class="navbar-nav ms-auto">
                                            <li class="nav-item dropdown"> <Link class="nav-link dropdown-toggle" to="/" data-bs-toggle="dropdown">Home</Link>
                                                <ul class="dropdown-menu">
                                                    <li><Link class="dropdown-item" to="/index-2">Landing 1</Link>
                                                    </li>
                                                    <li><Link class="dropdown-item" to="/index-3">Landing 2</Link>
                                                    </li>
                                                    <li><Link class="dropdown-item" to="/index-4">Landing 3</Link>
                                                    </li>
                                                    <li><Link class="dropdown-item" to="/index-5">Landing 4</Link>
                                                    </li>
                                                    <li><Link class="dropdown-item" to="/index-6">Landing 5</Link>
                                                    </li>
                                                    <li><Link class="dropdown-item" to="/index-7">Landing 6</Link>
                                                    </li>
                                                    <li><Link class="dropdown-item" to="/index-8">Landing 7</Link>
                                                    </li>
                                                    <li><Link class="dropdown-item" to="/index-9">Landing 8</Link>
                                                    </li>
                                                    <li><Link class="dropdown-item" to="/index-10">Landing 9</Link>
                                                    </li>
                                                    <li><Link class="dropdown-item" to="/index-11">Landing 10</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="nav-item dropdown"> <Link class="nav-link dropdown-toggle active" to="/" data-bs-toggle="dropdown">Pages</Link>
                                                <ul class="dropdown-menu">
                                                    <li class="dropdown-submenu"><Link class="dropdown-item dropdown-toggle" to="/">Company</Link>
                                                        <ul class="dropdown-menu">
                                                            <li><Link class="dropdown-item" to="/about-us-1">About Us</Link>
                                                            </li>
                                                            <li><Link class="dropdown-item" to="/about-us-2">About Us 2</Link>
                                                            </li>
                                                            <li><Link class="dropdown-item" to="/career">Career</Link>
                                                            </li>
                                                            <li><Link class="dropdown-item" to="/career-single">Career Single</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="dropdown-submenu"><Link class="dropdown-item dropdown-toggle" to="/">Blogs</Link>
                                                        <ul class="dropdown-menu">
                                                            <li><Link class="dropdown-item" to="/blog-card">Blog Card</Link>
                                                            </li>
                                                            <li><Link class="dropdown-item" to="/blog-listing">Blog Listing 1</Link>
                                                            </li>
                                                            <li><Link class="dropdown-item" to="/blog-listing-2">Blog Listing 2</Link>
                                                            </li>
                                                            <li><Link class="dropdown-item" to="/blog-single">Blog Single</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="dropdown-submenu"><Link class="dropdown-item dropdown-toggle" to="/">Portfolio</Link>
                                                        <ul class="dropdown-menu">
                                                            <li><Link class="dropdown-item" to="/portfolio">Portfolio Card</Link>
                                                            </li>
                                                            <li><Link class="dropdown-item" to="/portfolio-single">Portfolio Single</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="dropdown-submenu"><Link class="dropdown-item dropdown-toggle" to="/">Contacts</Link>
                                                        <ul class="dropdown-menu">
                                                            <li><Link class="dropdown-item" to="/contact-us">Contact 1</Link>
                                                            </li>
                                                            <li><Link class="dropdown-item" to="/contact-us-2">Contact 2</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="dropdown-submenu"><Link class="dropdown-item dropdown-toggle" to="/">Account</Link>
                                                        <ul class="dropdown-menu">
                                                            <li><Link class="dropdown-item" to="/login">Sign In</Link>
                                                            </li>
                                                            <li><Link class="dropdown-item" to="/login-2">Sign In 2</Link>
                                                            </li>
                                                            <li><Link class="dropdown-item" to="/signup">Sign Up</Link>
                                                            </li>
                                                            <li><Link class="dropdown-item" to="/forgot-password">Forgot Password</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="dropdown-submenu"><Link class="dropdown-item dropdown-toggle" to="/">Utilities</Link>
                                                        <ul class="dropdown-menu">
                                                            <li><Link class="dropdown-item" to="/pricing">Pricing</Link>
                                                            </li>
                                                            <li><Link class="dropdown-item" to="/faq">Faq</Link>
                                                            </li>
                                                            <li><Link class="dropdown-item" to="/maintenance">Maintenance</Link>
                                                            </li>
                                                            <li><Link class="dropdown-item" to="/coming-soon">Coming Soon</Link>
                                                            </li>
                                                            <li><Link class="dropdown-item" to="/error-404">Error 404</Link>
                                                            </li>
                                                            <li><Link class="dropdown-item" to="/privacy-policy">Privacy & Policy</Link>
                                                            </li>
                                                            <li><Link class="dropdown-item" to="/terms-and-conditions">Terms & Conditions</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="nav-item dropdown"> <Link class="nav-link dropdown-toggle" to="/" data-bs-toggle="dropdown">Shop</Link>
                                                <ul class="dropdown-menu">
                                                    <li><Link class="dropdown-item" to="/product-grid">Product Grid</Link>
                                                    </li>
                                                    <li><Link class="dropdown-item" to="/product-list">Product List</Link>
                                                    </li>
                                                    <li><Link class="dropdown-item" to="/product-single">Product Single</Link>
                                                    </li>
                                                    <li><Link class="dropdown-item" to="/product-cart">Cart</Link>
                                                    </li>
                                                    <li><Link class="dropdown-item" to="/product-checkout">Checkout</Link>
                                                    </li>
                                                    <li><Link class="dropdown-item" to="/order-complete">Order Completed</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="nav-item dropdown"> <Link class="nav-link dropdown-toggle" to="/" data-bs-toggle="dropdown">Features</Link>
                                                <ul class="dropdown-menu">
                                                    <li><Link class="dropdown-item" to="/feature-accordion">Accordion</Link>
                                                    </li>
                                                    <li><Link class="dropdown-item" to="/feature-blog">Blog</Link>
                                                    </li>
                                                    <li><Link class="dropdown-item" to="/feature-counter">Counter</Link>
                                                    </li>
                                                    <li><Link class="dropdown-item" to="/feature-icon-box">Feature Box</Link>
                                                    </li>
                                                    <li><Link class="dropdown-item" to="/feature-hero">Hero Banner</Link>
                                                    </li>
                                                    <li><Link class="dropdown-item" to="/feature-gallery">Lightbox Gallery</Link>
                                                    </li>
                                                    <li><Link class="dropdown-item" to="/feature-pricing">Price Table</Link>
                                                    </li>
                                                    <li><Link class="dropdown-item" to="/feature-video">Video Lightbox</Link>
                                                    </li>
                                                    <li><Link class="dropdown-item" to="/feature-team">Team</Link>
                                                    </li>
                                                    <li><Link class="dropdown-item" to="/feature-testimonial">Testimonial</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <Link class="btn btn-primary ms-8 d-none d-md-block" to="/">Buy Now</Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header1