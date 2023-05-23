import React from 'react'

export default function TextArea({ id, name, value, placeholder, onChange, label }) {
    return (
        <>
            <label htmlFor={id} className='text-xs py-2 text-neutral-300'>{label} :</label>
            <textarea name={name} id={id} cols="30" rows="5"
                className='p-2 text-neutral-300 w-full bg-stone-800 border text-sm border-gray-400 placeholder:text-xs'
                onChange={onChange}
                value={value}
                placeholder={placeholder}>
            </textarea>
        </>
    )
}
