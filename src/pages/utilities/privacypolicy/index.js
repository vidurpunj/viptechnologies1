import React, {Component} from 'react';
import Pageheading from '../../../widgets/PageHeading';

class PrivacyPolicy extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                {/*hero section start*/}
                <section className="position-relative">
                    <Pageheading foldername={"Utilities"} title={"Privacy Policy"}/>
                </section>
                {/*hero section end*/}
                {/*body content start*/}
                <div className="page-content">
                    {/*privacy start*/}
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <p>Privacy Policy </p>
                                    <p>Last updated: April 5, 2024</p>

                                    <p>Introduction</p>
                                    <p>
                                        Welcome to Vip Technologies! This Privacy Policy outlines how we collect, use,
                                        share, and protect your personal information when you visit our website 1.
                                        Please
                                        read this policy carefully to understand our practices and how we handle your
                                        data.
                                    </p>
                                    <p>
                                        Information We Collect
                                        We may collect the following types of information:
                                    </p>

                                    <p>
                                        Personal Information: When you interact with our website, we may collect
                                        personal
                                        details such as your name, email address, and phone number.
                                        Usage Data: We automatically collect information about your interactions with
                                        our
                                        website, including your IP address, browser type, and pages visited.
                                        Cookies: We use cookies and similar tracking technologies to enhance your
                                        browsing
                                        experience and analyze website traffic.
                                    </p>
                                    <p>
                                        How We Use Your Information
                                        We use your information for the following purposes:
                                    </p>


                                    <p>
                                        Provide Services: To deliver the services you request, such as responding to
                                        inquiries or processing orders.
                                    </p>
                                    <p>
                                        Improve User Experience: To enhance our website’s functionality and tailor
                                        content
                                        to your preferences.
                                    </p>
                                    <p>
                                        Analytics: We analyze user behavior to improve our website’s performance and
                                        optimize content.
                                    </p>
                                    <p>
                                        Data Sharing and Disclosure
                                        We do not sell, trade, or rent your personal information to third parties.
                                        However,
                                        we may share your data with:
                                    </p>


                                    <p>
                                        Service Providers: We work with trusted service providers who assist us in
                                        operating
                                        our website and delivering services.
                                        Legal Compliance: We may disclose information if required by law or to protect
                                        our
                                        rights and safety.
                                        Your Rights
                                        You have the right to:
                                    </p>

                                    <p>
                                        Access: Request access to the personal information we hold about you.
                                        Correction: Correct any inaccuracies in your data.
                                        Deletion: Request deletion of your personal information.
                                        Security
                                        We take reasonable measures to protect your data from unauthorized access,
                                        alteration, or disclosure.
                                    </p>

                                    <p>
                                        Changes to This Policy
                                        We may update this Privacy Policy periodically. Any changes will be posted on
                                        this
                                        page.
                                    </p>
                                    <p>
                                        Contact Us
                                        If you have any questions or concerns about our Privacy Policy, please contact
                                        us at
                                        <a href="mailto:admin@viptechnologies.in"> admin@viptechnologies.in</a>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </section>
                    {/*privacy end*/}
                </div>
                {/*body content end*/}
            </div>

        );
    }
}

export default PrivacyPolicy;