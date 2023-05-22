import React, { useState } from 'react'
import CommentedHeading from '../CommentedHeading/CommentedHeading';
import DarkButton from '../DarkButton/DarkButton';
import useTitle from '../../hooks/useTitle';
export default function Contact() {
    useTitle("Contact");
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [messageInput, setMessageInput] = useState('');
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
                <div className='font-roboto  max-w-[80%]'>
                    <div className='min-h-screen flex w-[400px] max-w-[400px] sm:w-[700px] sm:max-w-[700px] justify-center  flex-col'>
                        <CommentedHeading title="" style="text-2xl" />
                        <div className='p-2 border bg-stone-900 max-h-min w-[100%] mt-8'>
                            <span>&#123;</span>
                            <div className='px-4 flex flex-col gap-1'>
                                <p>
                                    "<span className='text-orange-500'>name</span>" : "{nameInput}"
                                </p>
                                <p>
                                    "<span className='text-orange-500'>email</span>" : "{emailInput}"
                                </p>
                                <p>
                                    "<span className='text-orange-500'>message</span>" : "{messageInput}"
                                </p>
                            </div>
                            <span>&#125;</span>
                        </div>


                        <div className='m-4'>
                            <form className='flex flex-col gap-4'>
                                <div className='flex flex-col gap-0.5'>
                                    <label htmlFor="name" className='text-xs py-2 text-neutral-300'>Name :</label>
                                    <input type="text" id='name'
                                        className='text-neutral-200 p-2 w-full bg-stone-800 border border-gray-400 text-sm placeholder:text-xs'
                                        placeholder='Enter your name'
                                        value={nameInput}
                                        onChange={(e) => setNameInput(e.target.value)}
                                    />
                                </div>

                                <div className='flex flex-col gap-0.5'>
                                    <label htmlFor="email" className='text-xs py-2 text-neutral-300'>Name :</label>
                                    <input type="email" id='email'
                                        className='text-neutral-200 p-2 w-full bg-stone-800 border text-sm border-gray-400 placeholder:text-xs'
                                        onChange={(e) => setEmailInput(e.target.value)}
                                        value={emailInput}
                                        placeholder='Enter your e-mail' />
                                </div>

                                <div className='flex flex-col gap-0.5'>
                                    <label htmlFor="message" className='text-xs py-2 text-neutral-300'>Message :</label>
                                    <textarea name="" id="" cols="30" rows="5"
                                        className='p-2 text-neutral-300 w-full bg-stone-800 border text-sm border-gray-400 placeholder:text-xs'
                                        onChange={(e) => setMessageInput(e.target.value)}
                                        value={messageInput}
                                        placeholder='Message...'></textarea>
                                </div>

                                <div>

                                    <DarkButton disabled={false}>
                                        <span className='text-yellow-400'>Send</span>
                                        <span>()</span>
                                    </DarkButton>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
