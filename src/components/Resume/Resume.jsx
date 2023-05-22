import React from 'react'
import { TextFileIcon } from '../ReactIcons/ReactIcons'
import CommentedHeading from '../CommentedHeading/CommentedHeading';


export default function Resume() {
  return (
    <section className='text-neutral-100 min-h-screen  w-full'>
      <div className='font-roboto  max-w-[80%]'>
        <div className='flex-1'>
          <div className='flex gap-2 justify-center items-center border'>
            <TextFileIcon />
            <h1 className='text-2xl text-neutral-200'>Resume</h1>
          </div>
        </div>
      </div>
    </section>
  )
}
