import React from 'react'
import { useSelector } from 'react-redux';




export default function JSONBox() {
    const contact = useSelector(state => state.contact);

    return (
        <div className='p-2 bg-stone-900 max-h-min  sm:max-w-[80%]  w-full mt-8'>
            <span>&#123;</span>
            <div className='px-4 flex flex-col gap-2  '>
                <span className=''>
                    "<span className='text-orange-500'>name</span>" : "{contact.name}"
                </span>
                <span>
                    "<span className='text-orange-500'>email</span>" : "{contact.email}"
                </span>
                <span>
                    "<span className='text-orange-500'>message</span>" : "{contact.message}"
                </span>
            </div>
            <span>&#125;</span>
        </div>
    )
}
