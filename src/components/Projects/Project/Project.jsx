import React from 'react'

export default function Project({ title, startYear, endYear, image, websiteLink, details }) {
    
    return (
        <div className='border-b border-neutral-400'>

            <div className='grid gap-4 sm:gap-2 sm:grid-cols-3'>
                <div className='col-span-1'>
                    <h2 className='text-stone-100 text-lg font-light tracking-widest '>
                        <span className='text-blue-600 text-sm'>Year </span>
                        <span>{startYear} </span>
                        {endYear && <span>- {endYear}</span>}
                        <span>:</span>
                    </h2>
                </div>
                <div className='col-span-2 mt-4 sm:mt-0 flex flex-col gap-4'>
                    <a href={websiteLink} target='_blank' referrerPolicy='no-referrer' title={title} className=''>
                        <h2 className='font-light text-yellow-400 w-max tracking-wider text-lg border-b border-dashed hover:border-solid border-yellow-400 transition-all delay-150 duration-300 ease-in-out'>&lt; {title} /&gt;</h2>
                    </a>
                    <ul className='list-disc pl-8 text-sm my-4 flex flex-col gap-4 tracking-widest'>
                        {
                            details.map((detail, index) => (<li key={index} className='text-neutral-400 whitespace-normal'>
                                <span className='whitespace-normal break-words text-justify tracking-wide leading-6'>{detail}</span>
                            </li>))
                        }
                    </ul>
                </div>
            </div>
            <div className='w-full my-12 flex justify-center items-center sm:justify-end '>
                <a href={websiteLink} target='_blank' referrerPolicy='no-referrer' title={title} className='rounded overflow-hiddens hover:ring ring-stone-400'>
                    <img src={image} alt="" className='min-w-[300px] w-[320px] sm:w-[500px]  max-w-lg h-auto rounded' />
                </a>
            </div>
        </div>
    )
}
