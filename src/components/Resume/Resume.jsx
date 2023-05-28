import React from 'react'
import { TextFileIcon } from '../ReactIcons/ReactIcons'
import CommentedHeading from '../CommentedHeading/CommentedHeading';
import useTitle from '../../hooks/useTitle';
import Projects from '../Projects/Projects';

export default function Resume() {
  useTitle("Resume");

  return (
    <div>
      <section className='text-neutral-100 min-h-screen  w-full flex flex-col justify-start items-center'>
        <div className='font-roboto  max-w-[80%]'>

          <div className='min-h-screen flex justify-center  flex-col '>
            <CommentedHeading title="Education" style="text-lg sm:text-2xl" />
            <div className='m-4 '>
              <ul className='list-disc flex flex-col gap-6 text-sm text-neutral-400 mt-8'>
                <li >The Odin Project.</li>
                <li >The complete Web develpement bootcamp by Angela Yu.</li>
                <li >Bachelor's in Computer Application, Panjab University, India.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <Projects />
    </div>
  )
}
