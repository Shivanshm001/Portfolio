import React from 'react'

export default function DarkButton({ handleClick, title, disabled, children }) {
    return (
        <button className='bg-zinc-800 p-2 rounded ring ring-stone-700 hover:bg-stone-700 active:scale-95 text-sm  font-roboto tracking-wide ' onClick={handleClick} disabled={disabled}>
            {children ? children : title}
        </button>
    )
}
