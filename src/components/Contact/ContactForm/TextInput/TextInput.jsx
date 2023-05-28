import React from 'react'
import { useSelector } from 'react-redux'

export default function TextInput({ label, id, type, placeholder, value, maxLength, onChange, name }) {
    const contact = useSelector(state => state.contact);

    return (
        <>
            <label htmlFor={id} className='text-xs py-2 text-neutral-300'>{label} :</label>
            <div className=' relative'>
                {type === "text" && <span className='absolute right-2 top-3 text-xs'>{contact.name.length}</span>}
                <input type={type}
                    id={id}
                    name={name}
                    maxLength={maxLength}
                    className='text-neutral-200 p-2 w-full bg-stone-800 border border-gray-400 text-sm placeholder:text-xs'
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </>
    )
}
