import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const PortfolioInfo = () => {
    const [activeTab, setActiveTab] = useState('tab1-1');

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <section>
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-8 col-md-12">
                        <div className="mb-6">
                            <span className="badge badge-primary-soft p-2">
                                <i className="la la-exclamation ic-3x rotation"/>
                            </span>
                            <h2 className="mt-3">Open Positions</h2>
                            <p className="lead">

                                When creating a job description for an open position in development, whether it's for
                                web development, software development, or any other type of development role, it's
                                essential to provide clear and detailed information about the responsibilities,
                                qualifications, and expectations for the position.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="tab">
                            {/* Nav tabs */}
                            <nav>
                                <div className="nav nav-tabs w-100 border-0" id="nav-tab" role="tablist">
                                    <Link
                                        className={`nav-item nav-link ${activeTab === 'tab1-1' ? 'active' : ''}`}
                                        id="nav-tab1"
                                        onClick={() => handleTabChange('tab1-1')}
                                    >
                                        Designer
                                    </Link>
                                    <Link
                                        className={`nav-item nav-link ${activeTab === 'tab1-2' ? 'active' : ''}`}
                                        id="nav-tab2"
                                        onClick={() => handleTabChange('tab1-2')}
                                    >
                                        Ruby on Rails
                                    </Link>
                                    <Link
                                        className={`nav-item nav-link ${activeTab === 'tab1-3' ? 'active' : ''}`}
                                        id="nav-tab3"
                                        onClick={() => handleTabChange('tab1-3')}
                                    >
                                        Marketing Manager
                                    </Link>
                                    <Link
                                        className={`nav-item nav-link ${activeTab === 'tab1-4' ? 'active' : ''}`}
                                        id="nav-tab4"
                                        onClick={() => handleTabChange('tab1-4')}
                                    >
                                        Front-End Web Developer
                                    </Link>
                                </div>
                            </nav>
                            <div className="tab-content px-5 pt-5" id="nav-tabContent">
                                <div role="tabpanel"
                                     className={`tab-pane fade ${activeTab === 'tab1-1' ? 'show active' : ''}`}
                                     id="tab1-1">
                                    {/* Tab 1 content */}
                                    <h5>Job Descriptions:</h5>
                                    <p>Create visually appealing designs for various digital and print media, including
                                        websites, mobile apps, social media graphics, marketing materials, and branding
                                        assets..</p>
                                    <h5 className="mt-5 mb-4">Desired Skills: </h5>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none"
                                                 stroke="currentColor" strokeWidth={2} strokeLinecap="round"
                                                 strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12"/>
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">Create visually appealing designs for various digital and print media, including websites, mobile apps, social media graphics, marketing materials, and branding assets.</p>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none"
                                                 stroke="currentColor" strokeWidth={2} strokeLinecap="round"
                                                 strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12"/>
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">Collaborate with cross-functional teams to understand project requirements, objectives, and target audience, and translate them into effective design solutions.</p>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none"
                                                 stroke="currentColor" strokeWidth={2} strokeLinecap="round"
                                                 strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12"/>
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">Develop concepts, wireframes, mockups, and prototypes to communicate design ideas and concepts to stakeholders and clients.</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none"
                                                 stroke="currentColor" strokeWidth={2} strokeLinecap="round"
                                                 strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12"/>
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">Use design tools and software such as Adobe Creative Suite (Photoshop, Illustrator, InDesign), Sketch, or Figma to create high-quality designs.</p>
                                    </div>
                                    <Link className="btn btn-primary mt-5" to="career-single">Apply Now</Link>
                                </div>
                                <div role="tabpanel"
                                     className={`tab-pane fade ${activeTab === 'tab1-2' ? 'show active' : ''}`}
                                     id="tab1-2">
                                    {/* Tab 2 content */}
                                    <h5>Job Descriptions:</h5>
                                    <p>When listing desired skills for a Ruby on Rails Developer position, consider
                                        including both technical and soft skills that are relevant to the role. Here's a
                                        list of desired skills for a Ruby on Rails Developer:</p>
                                    <h5 className="mt-5 mb-4">Desired Skills: </h5>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none"
                                                 stroke="currentColor" strokeWidth={2} strokeLinecap="round"
                                                 strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12"/>
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">Proficiency in Ruby: Strong understanding of the Ruby
                                            programming language, including its syntax, data structures, and
                                            object-oriented principles.</p>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none"
                                                 stroke="currentColor" strokeWidth={2} strokeLinecap="round"
                                                 strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12"/>
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">Ruby on Rails Framework: Extensive experience with Ruby
                                            on Rails framework, including building and maintaining web applications
                                            using Rails conventions and best practices.</p>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none"
                                                 stroke="currentColor" strokeWidth={2} strokeLinecap="round"
                                                 strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12"/>
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">Front-End Development: Knowledge of front-end
                                            technologies such as HTML, CSS, and JavaScript, and the ability to integrate
                                            front-end components with Ruby on Rails applications.</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none"
                                                 stroke="currentColor" strokeWidth={2} strokeLinecap="round"
                                                 strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12"/>
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">Database Management: Experience with relational
                                            databases such as PostgreSQL or MySQL, including database design, querying,
                                            and optimization.</p>

                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none"
                                                 stroke="currentColor" strokeWidth={2} strokeLinecap="round"
                                                 strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12"/>
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">Version Control: Familiarity with version control
                                            systems such as Git, including branching, merging, and resolving
                                            conflicts.</p>

                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none"
                                                 stroke="currentColor" strokeWidth={2} strokeLinecap="round"
                                                 strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12"/>
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">Problem-Solving Skills: Strong problem-solving and
                                            analytical skills, with the ability to debug and troubleshoot issues in Ruby
                                            on Rails applications.</p>

                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none"
                                                 stroke="currentColor" strokeWidth={2} strokeLinecap="round"
                                                 strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12"/>
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">Testing and Debugging: Experience with testing
                                            frameworks such as RSpec or Cucumber, and the ability to write effective
                                            unit tests and integration tests for Rails applications.</p>

                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none"
                                                 stroke="currentColor" strokeWidth={2} strokeLinecap="round"
                                                 strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12"/>
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">Agile Methodologies: Knowledge of agile development
                                            methodologies such as Scrum or Kanban, and the ability to work in an agile
                                            environment with cross-functional teams.</p>

                                    </div>
                                    <Link className="btn btn-primary mt-5" to="career-single">Apply Now</Link>
                                </div>
                                <div role="tabpanel"
                                     className={`tab-pane fade ${activeTab === 'tab1-3' ? 'show active' : ''}`}
                                     id="tab1-3">
                                    {/* Tab 3 content */}
                                    <h5>Job Descriptions:</h5>
                                    <p>Strong understanding of digital marketing channels and tactics, including SEO, SEM, social media, email marketing, and content marketing.</p>
                                    <h5 className="mt-5 mb-4">Desired Skills: </h5>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none"
                                                 stroke="currentColor" strokeWidth={2} strokeLinecap="round"
                                                 strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12"/>
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">Excellent project management skills, with the ability to manage multiple projects simultaneously and meet deadlines in a fast-paced environment.</p>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none"
                                                 stroke="currentColor" strokeWidth={2} strokeLinecap="round"
                                                 strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12"/>
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">Strong analytical and problem-solving skills, with the ability to interpret data and make data-driven decisions.</p>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none"
                                                 stroke="currentColor" strokeWidth={2} strokeLinecap="round"
                                                 strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12"/>
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">Excellent communication and interpersonal skills, with the ability to effectively collaborate with cross-functional teams and communicate with stakeholders at all levels.</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none"
                                                 stroke="currentColor" strokeWidth={2} strokeLinecap="round"
                                                 strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12"/>
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">Experience with marketing automation platforms, CRM systems, and analytics tools is a plus.</p>
                                    </div>
                                    <Link className="btn btn-primary mt-5" to="career-single">Apply Now</Link>
                                </div>
                                <div role="tabpanel"
                                     className={`tab-pane fade ${activeTab === 'tab1-4' ? 'show active' : ''}`}
                                     id="tab1-4">
                                    {/* Tab 4 content */}
                                    <h5>Job Descriptions:</h5>
                                    <p>Develop responsive and user-friendly web applications using HTML, CSS, and JavaScript.</p>
                                    <h5 className="mt-5 mb-4">Desired Skills: </h5>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none"
                                                 stroke="currentColor" strokeWidth={2} strokeLinecap="round"
                                                 strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12"/>
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">Collaborate with designers and back-end developers to implement user interface and application features.</p>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none"
                                                 stroke="currentColor" strokeWidth={2} strokeLinecap="round"
                                                 strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12"/>
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">Ensure cross-browser compatibility and adherence to web standards.</p>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none"
                                                 stroke="currentColor" strokeWidth={2} strokeLinecap="round"
                                                 strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12"/>
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">Optimize web applications for maximum speed and scalability.</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="badge-primary-soft rounded p-1">
                                            <svg width={20} height={20} viewBox="0 0 24 24" fill="none"
                                                 stroke="currentColor" strokeWidth={2} strokeLinecap="round"
                                                 strokeLinejoin="round" className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12"/>
                                            </svg>
                                        </div>
                                        <p className="mb-0 ms-3">Perform code reviews and provide constructive feedback to team members.</p>
                                    </div>
                                    <Link className="btn btn-primary mt-5" to="career-single">Apply Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PortfolioInfo;