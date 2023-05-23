import React, { useState } from 'react'
import CommentedHeading from '../CommentedHeading/CommentedHeading';
import useTitle from '../../hooks/useTitle';
import ContactForm from './ContactForm/ContactForm';
import JSONBox from './JSONBox/JSONBox';
import { useSelector } from 'react-redux';



export default function Contact() {
    useTitle("Contact");

    return (
        <div className='bg-zinc-800 min-h-screen'>
            <section className='text-neutral-100 min-h-screen  w-full flex flex-col justify-start items-center'>
                <div className='font-roboto  max-w-[80%]'>

                    <div className='min-h-screen flex justify-center  flex-col'>
                        <CommentedHeading title="Get in touch (Contact me)" style="text-2xl" />
                        <div className='m-4'>
                            <p className='tracking-widest text-justify font-extralight space-x-4 leading-10'>
                                I would love to hear from you and discuss any opportunities, collaborations, or projects you have in mind. Whether you have a question, feedback, or simply want to connect, please don't hesitate to reach out.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className='text-neutral-100 min-h-screen  w-full flex flex-col justify-start items-center'>
                <div className='font-roboto w-full border-t border-stone-400'>
                    <div className='min-h-screen flex max-w-[80%] w-full  mx-8 sm:mx-16  flex-col'>
                        <div>
                            <div className='w-full grid place-items-center'>

                                <JSONBox />
                            </div>
                            <div className='w-full grid place-items-center my-8'>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
