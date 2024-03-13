import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { Col } from 'reactstrap';
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
                        When our power of choice Bootsland ?
                    </AccordionItemButton>
                    <AccordionItemPanel>
                        <div className="accordion-body text-muted">
                            Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
                            the cites of the word in classical literature, discovered Many desktop publishing packages and web page
                            editors now use Nor again is there anyone who loves or pursues or desires to obtain pain of itself.
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="bg-transparent border mb-4">
                    <AccordionItemButton>
                        Nam libero tempore, cum soluta nobis ?
                    </AccordionItemButton>
                    <AccordionItemPanel>
                        <div className="accordion-body text-muted">
                            Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
                            the cites of the word in classical literature, discovered Many desktop publishing packages and web page
                            editors now use Nor again is there anyone who loves or pursues or desires to obtain pain of itself.
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="bg-transparent border">
                    <AccordionItemButton>
                        which is the same as saying through ?
                    </AccordionItemButton>
                    <AccordionItemPanel>
                        <div className="accordion-body text-muted">
                            Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
                            the cites of the word in classical literature, discovered Many desktop publishing packages and web page
                            editors now use Nor again is there anyone who loves or pursues or desires to obtain pain of itself.
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </Col>
    )
}

export default AccordionDemoLight