import React from 'react'

export default function Project({title,year,image,link, details}) {
    return (
        <div className='border-b border-neutral-400'>

            <div className='grid grid-cols-3'>
                <div className='col-span-1'>
                    <h2 className='text-stone-100 text-lg font-light tracking-widest '>
                        <span className='text-blue-600 text-sm'>Year </span>
                        <span>{year} </span>
                        <span>:</span>
                    </h2>
                </div>
                <div className='col-span-2'>
                    <h2 className='font-light text-yellow-300 tracking-wider text-lg'>&lt; {title} /&gt;</h2>
                    <ul className='list-disc pl-8 text-sm my-4 flex flex-col gap-2 tracking-widest'>
                    {
                        details.map(detail => (<li className='text-neutral-400'>{detail}</li>))
                    }
                    </ul>
                </div>
            </div>
            <div className='w-full my-12'>
                <img src={image} alt="" className='min-w-full' />
            </div>
        </div>
    )
}
