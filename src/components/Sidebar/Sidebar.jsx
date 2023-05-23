import React from 'react'
import AccordionItem from './Accordion/AccordionItem';
import AccordionContainer from './Accordion/AccordionContainer';

//Icons
import { JSXIcon } from '../ReactIcons/ReactIcons';

export default function Sidebar() {
    return (
        <nav className='font-poppins sticky top-0  bg-stone-900  sm:min-h-screen min-w-full sm:min-w-1/4 sm:max-w-[25%]'>
            <AccordionContainer title={"Navigation"}>

                <AccordionItem destination={"/"} text={"Home.jsx"} icon={<JSXIcon />} distType={"internal"} />
                <AccordionItem destination={"/about"} text={"About.jsx"} icon={<JSXIcon />} distType={"internal"} />
                <AccordionItem destination={"/resume"} text={"Resume.jsx"} icon={<JSXIcon />} distType={"internal"} />
                <AccordionItem destination={"/contact"} text={"Contact.jsx"} icon={<JSXIcon />} distType={"internal"} />

            </AccordionContainer>
            <AccordionContainer title={"Projects"}>
                <AccordionContainer title={"Web_apps"}>

                    <AccordionItem destination={"https://urlshortener-gr27.onrender.com/"} text={"URL Shortener"} icon={<JSXIcon />} />

                </AccordionContainer>
            </AccordionContainer>
        </nav>
    )
}
