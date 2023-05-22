import React from 'react'

export default function Project({ title, startYear, endYear, image, link, details }) {
    
    return (
        <div className='border-b border-neutral-400'>

            <div className='grid grid-cols-3'>
                <div className='col-span-1'>
                    <h2 className='text-stone-100 text-lg font-light tracking-widest '>
                        <span className='text-blue-600 text-sm'>Year </span>
                        <span>{startYear} </span>
                        {endYear && <span>- {endYear}</span>}
                        <span>:</span>
                    </h2>
                </div>
                <div className='col-span-2 flex flex-col gap-4'>
                    <a href={link} target='_blank' referrerPolicy='no-referrer' title={title} className=''>
                        <h2 className='font-light text-yellow-400 w-max tracking-wider text-lg border-b border-dashed hover:border-solid border-yellow-400 transition-all delay-150 duration-300 ease-in-out'>&lt; {title} /&gt;</h2>
                    </a>
                    <ul className='list-disc pl-8 text-sm my-4 flex flex-col gap-4 tracking-widest'>
                        {
                            details.map((detail, index) => (<li key={index} className='text-neutral-400'>{detail}</li>))
                        }
                    </ul>
                </div>
            </div>
            <div className='w-full my-12 flex justify-end '>
                <a href={link} target='_blank' referrerPolicy='no-referrer' title={title} className='rounded overflow-hiddens hover:ring ring-stone-400'>
                    <img src={image} alt="" className='min-w-[500px]  max-w-lg h-auto rounded' />
                </a>
            </div>
        </div>
    )
}
