import React from 'react'
import { useSelector } from 'react-redux'

export default function TextArea({ id, name, value, placeholder, maxLength, onChange, label }) {
    const contact = useSelector(state => state.contact);

    return (
        <>
            <label htmlFor={id} className='text-xs py-2 text-neutral-300'>{label} :</label>
            <div className='relative'>
                <span className='absolute top-2 right-2 text-xs'>{maxLength - contact.message.length}</span>
                <textarea
                    name={name}
                    id={id}
                    cols="30"
                    rows="5"
                    maxLength={maxLength}
                    className='p-2 text-neutral-300 w-full bg-stone-800 border text-sm border-gray-400 placeholder:text-xs'
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder}>
                </textarea>
            </div>
        </>
    )
}
