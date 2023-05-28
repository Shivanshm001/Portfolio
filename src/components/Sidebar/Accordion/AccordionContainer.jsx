import React, { useState } from 'react'
import {AiOutlineRight,AiOutlineDown} from 'react-icons/ai';

export default function AccordionContainer({ title, children }) {
    const [isActive,setIsActive] = useState(true);
    
    return (
        <div className='p-2'>
            <button onClick={()=> setIsActive(prev => !prev)} className={` flex gap-x-2 justify-start items-center text-neutral-200 text-xs border-b border-stone-700 py-2 w-full ${isActive?"font-bold":"font-semibold"}` }>
                <span>{isActive?<AiOutlineDown style={{fontWeight:"bold"}}/>:<AiOutlineRight style={{fontWeight:"bold"}}/>}</span>
               <span>{title.toUpperCase()}</span>
            </button>
            {
                isActive && <div className='ml-4 my-1'>
                    {children}
                </div>
            }
        </div>
    )
}
