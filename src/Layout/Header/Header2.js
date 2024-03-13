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

const Header2 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const [loader, setLoader] = useState(true);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClick = () => {
        var elems = document.querySelectorAll('.childsubmenu');
        [].forEach.call(elems, function (el) {
            el.classList.remove('show');
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (loader) {
            setTimeout(() => {
                setLoader(false);
            }, 2000);
        }
    }, [loader]);

    const handleScroll = () => {
        var scrollTop =
            (document.documentElement && document.documentElement.scrollTop) ||
            document.body.scrollTop;
        if (scrollTop > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    return (
        <header className="site-header">
            {loader === false ? (
                <div id="header-wrap" className={`${visible ? 'fixed-header ' : ''}`}>
                    <div className="container">
                        <div className="row">
                            {/*menu start*/}
                            <div className="col d-flex align-items-center justify-content-between">
                                <Link className="navbar-brand logo text-dark h2 mb-0" to="/">
                                    Boots<span className="text-primary font-weight-bold">Land.</span>
                                </Link>
                                <Navbar className="navbar-expand-lg navbar-light ms-auto me-auto">
                                    <NavbarToggler onClick={toggle} className='ms-auto' />
                                    <Collapse isOpen={isOpen} className=" navbar-collapse" navbar>
                                        <Nav className="ms-auto" navbar>
                                            {navLinks.map((navLink, index) =>
                                                navLink.type && navLink.type === 'subMenu' ? (
                                                    <UncontrolledDropdown nav inNavbar key={index}>
                                                        <DropdownToggle nav caret>
                                                            {navLink.menu_title}
                                                        </DropdownToggle>
                                                        <DropdownMenu id={`submenu_${index}`} className="childsubmenu">
                                                            {navLink.child_routes &&
                                                                navLink.child_routes.map((subNavLink, k) =>
                                                                    subNavLink.type && subNavLink.type === 'childsubMenu' ? (
                                                                        <UncontrolledDropdown nav inNavbar className="dropdown-submenu" key={k}>
                                                                            <DropdownToggle nav caret className="dropdown-item">
                                                                                {subNavLink.menu_title}
                                                                            </DropdownToggle>
                                                                            <DropdownMenu id={`childsubmenu_${k}`}>
                                                                                {subNavLink.child_routes &&
                                                                                    subNavLink.child_routes.map((ChildsubNavLink, i) => (
                                                                                        <DropdownItem
                                                                                            key={i}
                                                                                            tag={Link}
                                                                                            to={ChildsubNavLink.path}
                                                                                            onClick={handleClick}
                                                                                        >
                                                                                            {ChildsubNavLink.menu_title}
                                                                                        </DropdownItem>
                                                                                    ))}
                                                                            </DropdownMenu>
                                                                        </UncontrolledDropdown>
                                                                    ) : (
                                                                        <DropdownItem key={index} tag={Link} to={subNavLink.path}>
                                                                            {subNavLink.menu_title}
                                                                        </DropdownItem>
                                                                    )
                                                                )}
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                ) : (
                                                    <NavItem key={index}>
                                                        <NavLink href={navLink.path}>{navLink.menu_title}</NavLink>
                                                    </NavItem>
                                                )
                                            )}
                                        </Nav>
                                    </Collapse>
                                </Navbar>
                                <Link className="btn btn-primary ms-8 d-none d-lg-block" to="/">
                                    Buy Now
                                </Link>
                            </div>
                            {/*menu end*/}
                        </div>
                    </div>
                </div>
            ) : (
                <div id="ht-preloader">
                    <div className="loader clear-loader">
                        <span />
                        <p>BootsLand</p>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header2;
