import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import {Col} from 'reactstrap';

function AccordionDemoLight() {
    return (
        <Col xs="12" lg="6" xl="5">
            <div className="mb-5">
                <span className="badge badge-light-soft p-2">
                    <i className="la la-question-circle ic-3x rotation"></i>
                </span>
                <h2 className="mt-3 text-white">Frequently Asked Questions</h2>
                <p className="lead">
                    We use the latest technologies it voluptatem accusantium doloremque laudantium.
                </p>
            </div>
            <Accordion allowZeroExpanded>
                <AccordionItem className="bg-transparent border mb-4">
                    <AccordionItemButton>
                        What is responsive web design?
                    </AccordionItemButton>
                    <AccordionItemPanel>
                        <div className="accordion-body text-muted">
                            Responsive web design is an approach to web design that makes web pages render well on a
                            variety of devices and window or screen sizes. It provides an optimal viewing experience
                            across a wide range of devices, from desktop computer monitors to mobile phones.

                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="bg-transparent border mb-4">
                    <AccordionItemButton>
                        How long does it take to build a website?
                    </AccordionItemButton>
                    <AccordionItemPanel>
                        <div className="accordion-body text-muted">
                            The time it takes to build a website can vary widely, depending on the complexity of the
                            site and the skills of the web developer(s). A simple website might take a few weeks, while
                            a complex e-commerce website might take several months to a year.
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="bg-transparent border">
                    <AccordionItemButton>
                        What is a Content Management System (CMS)?
                    </AccordionItemButton>
                    <AccordionItemPanel>
                        <div className="accordion-body text-muted">
                            A CMS is a software application that allows users to build and manage a website without
                            having to code it from scratch, or even know how to code at all. The most popular CMS is
                            WordPress, but there are many others like Joomla and Drupal.
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </Col>
    )
}

export default AccordionDemoLight