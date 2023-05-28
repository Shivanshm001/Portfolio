import React, { useState } from 'react'

import DarkButton from '../../DarkButton/DarkButton';

import { useDispatch, useSelector } from 'react-redux';
import { updateEmail, updateMessage, updateName } from '../../../redux/contact/contactActions';
import TextInput from './TextInput/TextInput';
import TextArea from './TextArea/TextArea';
import InputWrapper from './InputWrapper/InputWrapper';


export default function ContactForm() {

    const dispatch = useDispatch()
    const contact = useSelector(state => state.contact);

    function handleSubmit(e) {
        e.preventDefault();
        alert(JSON.stringify(contact));
    };




    return (
        <form className='flex flex-col gap-4 w-full max-w-[80%]' onSubmit={handleSubmit}>
            <InputWrapper>
                <TextInput
                    id={"name"}
                    type={"text"}
                    label={"Name"}
                    name={"name"}
                    maxLength={50}
                    placeholder={"Enter your name"}
                    value={contact.name}
                    onChange={(e) => dispatch(updateName(e.target.value))}
                />
            </InputWrapper>

            <InputWrapper>
                <TextInput
                    id={"email"}
                    type={"email"}
                    label={"Email"}
                    name={"email"}
                    placeholder={"Enter your email"}
                    value={contact.email}
                    onChange={(e) => dispatch(updateEmail(e.target.value))}
                />
            </InputWrapper>

            <InputWrapper>
                <TextArea
                    id={"message"}
                    maxLength={250}
                    label={"Message"}
                    name={"message"}
                    placeholder={"Message..."}
                    value={contact.message}
                    onChange={(e) => dispatch(updateMessage(e.target.value))}
                />
            </InputWrapper>


            <div className='s p-2'>
                <DarkButton disabled={false}>
                    <span className='text-yellow-400'>Send</span>
                    <span>()</span>
                </DarkButton>
            </div>
        </form >
    )
}
