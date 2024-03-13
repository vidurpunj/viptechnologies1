import classnames from 'classnames';
import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
const Worktab = () => {
    const [selectedTab, setSelectedTab] = useState('1');

    const toggle = (tab) => {
        if (selectedTab !== tab) {
            setSelectedTab(tab);
        }
    };

    return (
        <div className="row">
            <div className="col-12">
                <Nav tabs className=" d-flex justify-content-center border-0">
                    <NavItem className='me-1' >
                        <NavLink
                            className={`nav-item nav-link border-0 ${classnames({ active: selectedTab === '1' })}`}
                            onClick={() => toggle('1')}
                        >
                            Login Account
                        </NavLink>
                    </NavItem>
                    <NavItem className='me-1' >
                        <NavLink
                            className={`nav-item nav-link border-0 ${classnames({ active: selectedTab === '2' })}`}
                            onClick={() => toggle('2')}
                        >
                            Open Application
                        </NavLink>
                    </NavItem>
                    <NavItem disabled className='me-1' >
                        <NavLink
                            className={`nav-item nav-link border-0 ${classnames({ active: selectedTab === '3' })}`}
                            onClick={() => toggle('3')}
                        >
                            Start Chatting
                        </NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={selectedTab} className="tab-content mt-8">
                    <TabPane tabId="1" className="tab-pane fade show">
                        <div className="row align-items-center justify-content-between mb-10">
                            <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                                <Image src={require('../../assets/images/svg/09.svg').default} alt="testimage" fluid />
                            </div>
                            <div className="col-12 col-lg-6 col-xl-5">
                                <div>
                                    <h4 className="mt-3">Login Account</h4>
                                    <p className="lead">Bootsland latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                    <p className="mb-0">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                </div>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tabId="2" className="fade show">
                        <div className="row align-items-center justify-content-between mb-10">
                            <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                                <Image src={require('../../assets/images/svg/10.svg').default} alt="testimage" fluid />
                            </div>
                            <div className="col-12 col-lg-6 col-xl-5">
                                <div>
                                    <h4 className="mt-3">Open Application</h4>
                                    <p className="lead">Bootsland latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                    <p className="mb-0">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                </div>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tabId="3" className="fade show">
                        <div className="row align-items-center justify-content-between mb-10">
                            <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                                <Image src={require('../../assets/images/svg/11.svg').default} alt="testimage" fluid />
                            </div>
                            <div className="col-12 col-lg-6 col-xl-5">
                                <div>
                                    <h4 className="mt-3">Start Chatting</h4>
                                    <p className="lead">Bootsland latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                    <p className="mb-0">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                </div>
                            </div>
                        </div>
                    </TabPane>
                </TabContent>
            </div>
        </div>
    );
};

export default Worktab;
