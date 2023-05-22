import React from 'react'



export default function ToolIcon({name,icon}) {
  return (
    <div className='flex gap-2 justify-center min-w-[200px] min-h-[50px] max-w-[200px] items-center bg-stone-800 p-4 rounded shadow shadow-stone-600'>
        <span>{icon}</span>
        <p className='font-roboto text-sm'>{name}</p>
    </div>
  )
}
