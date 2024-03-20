import React, {useEffect} from 'react';
import {Badge, Col, Container, Row} from 'reactstrap';
import PageHeading from '../../../widgets/PageHeading';

const TermCondition = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {/*hero section start*/}
            <section className="position-relative">
                <PageHeading foldername="Utilities" title="Terms and Conditions"/>
            </section>
            {/*hero section end*/}
            {/*body content start*/}
            <div className="page-content">
                {/*terms start*/}
                <section>
                    <Container>
                        <Row>
                            <Col lg="12" md="12">
                                <h4 className="text-primary">1. Description of Service</h4>
                                <p className="mb-3">

                                    Here's what a Description of Service for website development:
                                    <br/>
                                    1.<b>Introduction:</b> An overview of the service being offered, including the
                                    purpose and objectives of the website development project.
                                    <br/>
                                    2. <b>Scope of Work:</b> A detailed description of the tasks, activities, and
                                    deliverables involved in the project. This section defines the boundaries of the
                                    project and clarifies what is included and excluded from the service.
                                    <br/>
                                    3. <b>Features and Functionalities:</b> A list of the features and functionalities
                                    that
                                    will be implemented in the website. This may include user authentication,
                                    content management, e-commerce capabilities, search functionality, and more.
                                    <br/>
                                    4. <b>Technology Stack:</b> Information about the technologies, frameworks,
                                    programming(React, Ruby on Rails, Python, SQL)
                                    languages, and platforms that will be used to develop the website. This helps
                                    the client understand the technical aspects of the project.
                                    <br/>
                                    5. <b>Timeline and Milestones:</b> A proposed timeline for the project, including
                                    key
                                    milestones and deliverable dates. This helps both parties track progress and
                                    ensure that the project stays on schedule.
                                    <br/>
                                    6. <b>Cost and Payment Terms:</b> Details about the cost of the service, including
                                    any
                                    upfront fees, payment schedule, and payment methods accepted. This section may
                                    also include information about additional charges for extra features or
                                    revisions.
                                    <br/>
                                    7. <b>Terms and Conditions:</b> Legal terms and conditions governing the
                                    relationship
                                    between the service provider and the client. This may include clauses related to
                                    confidentiality, intellectual property rights, warranties, and liabilities.
                                    <br/>
                                    8. <b>Acceptance Criteria:</b> Criteria for determining when the project is
                                    considered
                                    complete and ready for delivery. This may include testing requirements,
                                    performance benchmarks, and client approval processes.
                                    <br/>
                                    9.<b> Support and Maintenance:</b> Information about ongoing support and maintenance
                                    services available after the website is launched. This may include options for
                                    technical support, bug fixes, updates, and upgrades.
                                    <br/>
                                    10. <b>Cancellation and Refund Policy:</b> Policies and procedures for canceling the
                                    service or requesting a refund. This protects both parties in case the project
                                    needs to be terminated prematurely.
                                    <br/>
                                    Overall, a Description of Service in website development serves as a roadmap for
                                    the project, guiding both the service provider and the client through the entire
                                    development process and ensuring a successful outcome. It helps establish clear
                                    expectations, minimize misunderstandings, and promote effective communication
                                    between all stakeholders involved.
                                </p>
                                <h4 className="text-primary mt-5">2. Your Registration Obligations</h4>
                                <p className="mb-3">
                                    "Your Registration Obligations" typically refers to the terms and conditions that
                                    users must agree to when registering for a service or platform. These obligations
                                    outline the responsibilities and requirements that users must adhere to in order to
                                    use the service. Here's a description of what this section might entail:
                                    <br/>
                                    1. <b>User Information:</b> Users are typically required to provide accurate and
                                    complete
                                    information during the registration process. This may include personal details such
                                    as name, email address, date of birth, and contact information. Users may also be
                                    required to create a username and password for their account.
                                    <br/>
                                    2. <b>Legal Compliance:</b> Users must agree to comply with all applicable laws,
                                    regulations,
                                    and policies when using the service. This includes laws related to privacy, data
                                    protection, intellectual property, and online conduct. Users may be required to
                                    confirm that they are of legal age to use the service and that they are not
                                    prohibited from using it by any applicable laws or regulations.
                                    <br/>
                                    3. <b>Accuracy of Information:</b> Users are responsible for ensuring that the
                                    information
                                    they provide during registration is accurate and up-to-date. They may be required to
                                    update their information if it changes over time and to notify the service provider
                                    if there are any inaccuracies or discrepancies.
                                    <br/>
                                    4. <b>Account Security:</b> Users are responsible for maintaining the security of
                                    their
                                    account credentials and for preventing unauthorized access to their account. This
                                    includes keeping their password secure and not sharing it with others. Users may be
                                    required to take steps to protect their account, such as enabling two-factor
                                    authentication or using strong passwords.
                                    <br/>
                                    5. <b>Prohibited Activities:</b> Users may be prohibited from engaging in certain
                                    activities
                                    when using the service. This may include activities such as spamming, hacking,
                                    phishing, distributing malware, or engaging in illegal or fraudulent behavior. Users
                                    may be required to agree to use the service for lawful purposes only and to respect
                                    the rights of others.
                                    <br/>
                                    6. <b>Consequences of Violations:</b> Users may be informed of the consequences of
                                    violating
                                    the registration obligations, including the possibility of account suspension or
                                    termination. They may be required to agree that the service provider reserves the
                                    right to take action against users who violate the terms of service.
                                    <br/>
                                    7. <b>Data Collection and Privacy:</b> Users may be informed about how their
                                    personal
                                    information will be collected, used, and shared by the service provider. This may
                                    include information about data collection practices, privacy policies, and the use
                                    of cookies or tracking technologies.
                                    <br/>
                                    Overall, "Your Registration Obligations" is a section of the terms of service or
                                    user agreement that outlines the responsibilities and requirements that users must
                                    agree to when registering for a service or platform. It helps ensure that users
                                    understand their rights and obligations when using the service and helps protect the
                                    service provider from misuse or abuse of the platform.
                                </p>
                                <h4 className="text-primary mt-5">3. User Account, Password, and Security</h4>
                                <p className="mb-3">
                                    The "User Account, Password, and Security" section of a website or service's terms
                                    of service outlines the responsibilities, requirements, and best practices related
                                    to user accounts and security. Here's a detailed description of what this section
                                    typically includes:
                                    <br/>
                                    1.<b> Account Creation:</b> Users are required to create an account to access
                                    certain features
                                    or services of the website. This usually involves providing personal information
                                    such as name, email address, and sometimes additional details for verification
                                    purposes.
                                    <br/>
                                    2. <b>Password Creation:</b> Users are responsible for creating a secure password
                                    for their
                                    account. They should choose a password that is difficult to guess and includes a
                                    combination of letters, numbers, and special characters. The service provider may
                                    provide guidelines for creating strong passwords.
                                    <br/>
                                    3. <b>Password Security:</b> Users are responsible for keeping their password secure
                                    and
                                    confidential. They should not share their password with others or use the same
                                    password for multiple accounts. Users may be encouraged to regularly update their
                                    password for added security.
                                    <br/>
                                    4. <b>Account Access:</b> Users are responsible for maintaining the security of
                                    their account
                                    and preventing unauthorized access. This includes logging out of their account after
                                    each session, especially when using shared or public devices. Users may also be
                                    encouraged to enable additional security features such as two-factor authentication.
                                    <br/>
                                    5. <b>Account Information:</b> Users are responsible for providing accurate and
                                    up-to-date
                                    information when creating their account. They should update their account
                                    information if it changes over time and notify the service provider of any
                                    inaccuracies.
                                    <br/>
                                    6. <b>Unauthorized Access:</b> Users should notify the service provider immediately
                                    if they
                                    suspect unauthorized access to their account. This helps prevent unauthorized use of
                                    the account and allows the service provider to take appropriate action to secure the
                                    account.
                                    <br/>
                                    7. <b>Phishing and Scams:</b> Users should be cautious of phishing attempts and
                                    scams that may
                                    attempt to steal their account credentials. They should not respond to unsolicited
                                    requests for account information or click on suspicious links or attachments.
                                    <br/>
                                    8. <b>Account Termination:</b> The service provider reserves the right to terminate
                                    or suspend
                                    user accounts that violate the terms of service or pose a security risk. Users may
                                    be informed of the consequences of violating account security policies, including
                                    the possibility of account termination.
                                    <br/>
                                    9. <b>Liability:</b> Users may be informed that they are responsible for any
                                    activity that
                                    occurs on their account, whether authorized or unauthorized. They may be advised to
                                    take precautions to protect their account and to report any suspicious activity to
                                    the service provider.
                                    <br/>
                                    Overall, the "User Account, Password, and Security" section of a website's terms of
                                    service emphasizes the importance of account security and outlines the steps users
                                    can take to protect their accounts from unauthorized access and misuse. It helps
                                    users understand their responsibilities and liabilities related to account security
                                    and helps protect the service provider from security risks and legal liabilities.
                                </p>
                                <h4 className="text-primary mt-5">4. User Conduct</h4>
                                <p className="mb-3">
                                    The "User Conduct" section of a website's terms of service outlines the expectations
                                    and guidelines for user behavior while using the service. This section sets forth
                                    rules and standards intended to maintain a safe, respectful, and lawful environment
                                    for all users. Here's a detailed description of what this section typically
                                    includes:
                                </p>
                                <div className="d-flex align-items-center mb-3">
                                    <Badge color="primary" className="rounded p-1">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-check"
                                        >
                                            <polyline points="20 6 9 17 4 12"/>
                                        </svg>
                                    </Badge>
                                    <p className="mb-0 ms-3"><b>Lawful Use:</b> Users are expected to use the service in
                                        compliance with all applicable laws, regulations, and policies. This includes
                                        laws related to privacy, data protection, intellectual property, and online
                                        conduct. Users must refrain from engaging in any activity that violates these
                                        laws or infringes upon the rights of others.</p>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <Badge color="primary" className="rounded p-1">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-check"
                                        >
                                            <polyline points="20 6 9 17 4 12"/>
                                        </svg>
                                    </Badge>
                                    <p className="mb-0 ms-3"><b>Prohibited Content:</b> Users are prohibited from
                                        posting or sharing any content that is unlawful, defamatory, obscene, offensive,
                                        or otherwise inappropriate. This includes content that promotes violence,
                                        discrimination, hate speech, or illegal activities. Users must adhere to the
                                        service provider's content guidelines and community standards.</p>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <Badge color="primary" className="rounded p-1">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-check"
                                        >
                                            <polyline points="20 6 9 17 4 12"/>
                                        </svg>
                                    </Badge>
                                    <p className="mb-0 ms-3"><b>Respectful Behavior:</b> Users are expected to treat
                                        others with respect, courtesy, and professionalism. This includes refraining
                                        from harassment, bullying, or discrimination based on race, ethnicity, gender,
                                        religion, sexual orientation, or other personal characteristics. Users must
                                        maintain a civil and constructive dialogue when interacting with others on the
                                        platform.</p>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <Badge color="primary" className="rounded p-1">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-check"
                                        >
                                            <polyline points="20 6 9 17 4 12"/>
                                        </svg>
                                    </Badge>
                                    <p className="mb-0 ms-3"><b>Privacy and Confidentiality:</b> Users are responsible
                                        for respecting the privacy and confidentiality of others. They must not share
                                        personal or sensitive information about others without their consent. Users
                                        should be mindful of privacy settings and exercise caution when sharing
                                        information online.</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Badge color="primary" className="rounded p-1">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-check"
                                        >
                                            <polyline points="20 6 9 17 4 12"/>
                                        </svg>
                                    </Badge>
                                    <p className="mb-0 ms-3"><b>Intellectual Property:</b> Users must respect the
                                        intellectual property rights of others, including copyrights, trademarks, and
                                        patents. They must not infringe upon the intellectual property rights of others
                                        by posting or sharing copyrighted material without permission. Users should only
                                        use content that they have the legal right to use and should attribute sources
                                        appropriately.</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Badge color="primary" className="rounded p-1">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-check"
                                        >
                                            <polyline points="20 6 9 17 4 12"/>
                                        </svg>
                                    </Badge>
                                    <p className="mb-0 ms-3"><b>Security:</b> Users are responsible for maintaining the
                                        security of their accounts and preventing unauthorized access. They must not
                                        engage in any activity that compromises the security of the service or other
                                        users' accounts. This includes refraining from hacking, phishing, or
                                        distributing malware.</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Badge color="primary" className="rounded p-1">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-check"
                                        >
                                            <polyline points="20 6 9 17 4 12"/>
                                        </svg>
                                    </Badge>
                                    <p className="mb-0 ms-3"><b>Compliance with Policies:</b> Users are required to
                                        comply with all terms of service, community guidelines, and other policies
                                        established by the service provider. This includes following instructions from
                                        moderators or administrators and adhering to any specific rules or restrictions
                                        applicable to the service.</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Badge color="primary" className="rounded p-1">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-check"
                                        >
                                            <polyline points="20 6 9 17 4 12"/>
                                        </svg>
                                    </Badge>
                                    <p className="mb-0 ms-3"><b>Consequences of Violations:</b> Users may be informed of
                                        the consequences of violating the user conduct policies, including account
                                        suspension or termination. The service provider reserves the right to take
                                        action against users who violate the terms of service, and users may be held
                                        accountable for any damages or liabilities resulting from their actions.</p>
                                </div>
                                <h4 className="text-primary mt-5">5. International Use</h4>
                                <p className="mb-5">
                                    Certainly, the "International Use of Website" section in a website's terms of
                                    service typically addresses the usage of the website by individuals or entities
                                    located outside the country where the website is operated. Here's a description of
                                    what this section might include:
<br/>
                                    1.<b> Scope:</b> This section clarifies that the website is accessible from various locations
                                    around the world and is intended for use by individuals or entities located outside
                                    the country where the website is operated.
                                    <br/>
                                    2.<b> Acceptance of Laws and Regulations:</b> Users accessing the website from outside the
                                    country where it is operated are required to comply with all applicable laws,
                                    regulations, and policies governing their use of the website. This may include laws
                                    related to data protection, privacy, content distribution, intellectual property,
                                    and online conduct.
                                    <br/>
                                    3.<b> Cross-Border Data Transfers:</b> Users acknowledge and agree that their personal
                                    information may be transferred to and processed in countries other than their own,
                                    where data protection laws may differ from those in their home country. The website
                                    may provide information about its data transfer practices and the measures taken to
                                    protect user data.
                                    <br/>
                                    4.<b> Compliance with Export Laws: </b>Users are prohibited from using the website in a manner
                                    that violates any export control laws or regulations, including those of their own
                                    country or the country where the website is operated. This may include restrictions
                                    on the export of certain technologies or information to specific countries or
                                    individuals.
                                    <br/>
                                    5.<b> Disclaimers: </b>The website may include disclaimers regarding the availability,
                                    accuracy, and legality of its content or services in other countries. Users are
                                    advised to check local laws and regulations before accessing or using the website
                                    from outside the country where it is operated.
                                    <br/>
                                    6.<b> Jurisdiction and Governing Law:</b> The terms of service may specify the jurisdiction
                                    and governing law that apply to disputes arising from the international use of the
                                    website. This helps determine which laws and courts have authority over legal
                                    matters related to the website's operation and use.
                                    <br/>
                                    7. <b>Limited Availability: </b>The website may restrict access to certain features or
                                    services based on the user's location or jurisdiction. Users may be notified of any
                                    limitations or restrictions that apply to their use of the website from outside the
                                    country where it is operated.
                                    <br/>
                                    Overall, the "International Use of Website" section ensures that users understand
                                    their rights and obligations when accessing and using the website from locations
                                    outside the country where it is operated. It helps the website operator manage legal
                                    and regulatory compliance across different jurisdictions and provides transparency
                                    to users about the terms and conditions that apply to their international use of the
                                    website.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/*terms end*/}
            </div>
            {/*body content end*/}
        </div>
    );
};

export default TermCondition;
