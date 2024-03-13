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
                <AccordionItem className=" accordion__item mb-2">
                    <AccordionItemButton class="accordion-button border mb-0 bg-transparent card-header p-3">
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
                <AccordionItem className=" accordion__item mb-2">
                    <AccordionItemButton class="accordion-button border mb-0 bg-transparent card-header p-3">
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
        </>
    );
}