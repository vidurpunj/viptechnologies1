import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    NavItem,
    NavLink,
    Navbar,
    NavbarToggler,
    UncontrolledDropdown
} from 'reactstrap';
import navLinks from '../../api/NavLinks';

const Header3 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const [loader, setLoader] = useState(true);
    const headername = window.location.pathname;

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClick = (event) => {
        var elems = document.querySelectorAll(".childsubmenu");
        [].forEach.call(elems, function (el) {
            el.classList.remove("show");
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            var scrollTop = (document.documentElement && document.documentElement.scrollTop) ||
                document.body.scrollTop;
            if (scrollTop > 100) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (loader === true) {
            setTimeout(function () {
                setLoader(false);
            }, 2000);
        }
    }, [loader]);

    return (
        <header className={` ${(headername === "/index2") ? "site-header  bg-dark navbar-dark" : "site-header  navbar-dark"}`}>
            {(loader === false) ?
                <div id="header-wrap" className={` ${(headername === "/index2") ? "" : "position-absolute w-100 z-index-1"} ${(visible) ? "fixed-header " : ""}`}>
                    <div className="container">
                        <div className="row">
                            {/*menu start*/}
                            <div className="col d-flex align-items-center justify-content-between">
                                <Link className="navbar-brand logo text-white  h2 mb-0" to="/">
                                    Boots<span className="font-weight-bold">Land.</span>
                                </Link>
                                <Navbar className={` ${(headername === "/index2") ? "navbar-expand-lg navbar-light ms-auto me-auto" : "navbar-expand-lg navbar-light ms-auto"}`}>
                                    <NavbarToggler onClick={toggle} className='ms-auto' />
                                    <Collapse isOpen={isOpen} className=" navbar-collapse" navbar>
                                        <Nav className="ms-auto" navbar>
                                            {navLinks.map((navLink, index) => (
                                                (navLink.type && navLink.type === 'subMenu') ?
                                                    <UncontrolledDropdown nav inNavbar key={index}>
                                                        <DropdownToggle nav caret>
                                                            {navLink.menu_title}
                                                        </DropdownToggle>
                                                        <DropdownMenu id={`submenu_${index}`} className="childsubmenu">
                                                            {navLink.child_routes && navLink.child_routes.map((subNavLink, index) => (
                                                                (subNavLink.type && subNavLink.type === 'childsubMenu') ?
                                                                    <UncontrolledDropdown nav inNavbar className="dropdown-submenu" key={index}>
                                                                        <DropdownToggle nav caret className="dropdown-item" style={{ fontSize: '0.9rem', color: '#8090b5', fontWeight: '400', padding: '0.5rem' }}>
                                                                            {subNavLink.menu_title}
                                                                        </DropdownToggle>
                                                                        <DropdownMenu id={`childsubmenu_${index}`}>
                                                                            {subNavLink.child_routes && subNavLink.child_routes.map((ChildsubNavLink, i) =>
                                                                                <DropdownItem key={i} tag={Link} to={ChildsubNavLink.path} onClick={handleClick}>{ChildsubNavLink.menu_title}
                                                                                </DropdownItem>
                                                                            )}
                                                                        </DropdownMenu>
                                                                    </UncontrolledDropdown>
                                                                    :
                                                                    <DropdownItem key={index} tag={Link} to={subNavLink.path}>{subNavLink.menu_title}
                                                                    </DropdownItem>
                                                            ))}
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                    :
                                                    <NavItem>
                                                        <NavLink href={navLink.path}> {navLink.menu_title}</NavLink>
                                                    </NavItem>
                                            ))}
                                        </Nav>
                                    </Collapse>
                                </Navbar>
                                <Link className="btn btn-light ms-8 d-none d-lg-block" to="/">Buy Now</Link>
                            </div>
                            {/*menu end*/}
                        </div>
                    </div>
                </div>
                :
                <div id="ht-preloader">
                    <div className="loader clear-loader">
                        <span />
                        <p>BootsLand</p>
                    </div>
                </div>
            }
        </header>
    );
};

export default Header3;
