import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemPanel
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

export default function AccordionDemo() {
    return (
        <>
            <Accordion allowZeroExpanded className='border-0'>
                <AccordionItem className=" accordion__item mb-2">
                    <AccordionItemButton class="accordion-button border mb-0 bg-transparent card-header p-3">
                        What is website development?
                    </AccordionItemButton>
                    <AccordionItemPanel>
                        <div className="accordion-body text-muted">
                            Website development refers to the work involved in creating a website. This could range from
                            developing a single static page of plain text to complex web applications, electronic
                            businesses, and social network services.
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className=" accordion__item mb-2">
                    <AccordionItemButton class="accordion-button border mb-0 bg-transparent card-header p-3">
                        What technologies are used in website development?
                    </AccordionItemButton>
                    <AccordionItemPanel>
                        <div className="accordion-body text-muted">
                            Website development can involve numerous technologies, but some of the most common include
                            HTML, CSS, JavaScript, PHP, Python, Ruby, and SQL. The specific technologies used can depend
                            on whether the development is front-end (client-side), back-end (server-side), or full-stack
                            (both).
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className=" accordion__item mb-2">
                    <AccordionItemButton class="accordion-button border mb-0 bg-transparent card-header p-3">
                        What is the difference between a static and dynamic website?
                    </AccordionItemButton>
                    <AccordionItemPanel>
                        <div className="accordion-body text-muted">
                            Responsive web design is an approach to web design that makes web pages render well on a
                            variety of devices and window or screen sizes. It provides an optimal viewing experience
                            across a wide range of devices, from desktop computer monitors to mobile phones.
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className=" accordion__item mb-2">
                    <AccordionItemButton class="accordion-button border mb-0 bg-transparent card-header p-3">
                        What is responsive web design?
                    </AccordionItemButton>
                    <AccordionItemPanel>
                        <div className="accordion-body text-muted">
                            A static website is one that is primarily coded in HTML and displays the same information to
                            every visitor. On the other hand, a dynamic website can display different content and
                            provide user interaction, as it includes scripting in addition to HTML.
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className=" accordion__item mb-2">
                    <AccordionItemButton class="accordion-button border mb-0 bg-transparent card-header p-3">
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
                <AccordionItem className=" accordion__item mb-2">
                    <AccordionItemButton class="accordion-button border mb-0 bg-transparent card-header p-3">
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
                <AccordionItem className=" accordion__item mb-2">
                    <AccordionItemButton class="accordion-button border mb-0 bg-transparent card-header p-3">
                        What is Search Engine Optimization (SEO)?
                    </AccordionItemButton>
                    <AccordionItemPanel>
                        <div className="accordion-body text-muted">
                            SEO is the practice of increasing the quantity and quality of traffic to your website
                            through organic search engine results. It involves various strategies and techniques to
                            improve a website’s ranking on search engines like Google.
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className=" accordion__item mb-2">
                    <AccordionItemButton class="accordion-button border mb-0 bg-transparent card-header p-3">
                        What is web hosting?
                    </AccordionItemButton>
                    <AccordionItemPanel>
                        <div className="accordion-body text-muted">
                            Web hosting is a service that allows organizations and individuals to post a website or web
                            page onto the Internet. A web host, or web hosting service provider, is a business that
                            provides the technologies and services needed for the website or webpage to be viewed on the
                            Internet.
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </>
    );
}