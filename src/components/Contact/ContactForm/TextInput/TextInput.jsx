import React from 'react'

export default function TextInput({ label, id, placeholder, value, onChange, name }) {
    return (
        <>
            <label htmlFor={id} className='text-xs py-2 text-neutral-300'>{label} :</label>
            <input type="text" id={id}
                className='text-neutral-200 p-2 w-full bg-stone-800 border border-gray-400 text-sm placeholder:text-xs'
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </>
    )
}
