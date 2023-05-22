import React from 'react'
import { TextFileIcon } from '../ReactIcons/ReactIcons'
import CommentedHeading from '../CommentedHeading/CommentedHeading';
import useTitle from '../../hooks/useTitle';
import DarkButton from '../DarkButton/DarkButton';
import Project from '../Project/Project';


export default function Resume() {
  useTitle("Resume");

  return (
    <div>
      <section className='text-neutral-100 min-h-screen  w-full flex flex-col justify-start items-center'>
        <div className='font-roboto  max-w-[80%]'>

          <div className='min-h-screen flex justify-evenly  flex-col '>
            <CommentedHeading title="Education" style="text-2xl" />
            <div className='m-4 '>
              <ul className='list-disc flex flex-col gap-6 text-sm text-neutral-400'>
                <li >The Odin Project.</li>
                <li >The complete Web develpement bootcamp by Angela Yu.</li>
                <li >Bachelor's in Computer Application, Panjab University, India.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <section className='text-neutral-100 min-h-screen  w-full flex flex-col justify-start items-center'>
        <div className='font-roboto  max-w-[80%]'>

          <div className='min-h-screen flex justify-evenly  flex-col '>

            <div className='mb-20'>
              <CommentedHeading title="Projects" style="text-2xl" />
            </div>
            <div className='flex flex-col gap-20'>

              <Project 
              title={"URL_Shortener"}
              image={"https://picsum.photos/200/100"}
              year={"2023"}
              details={[
                "Bachelor's in Computer Science",               
                "Bachelor's in Computer Science",               
                "Bachelor's in Computer Science",               
                "Bachelor's in Computer Science",               
                "Bachelor's in Computer Science",               
              ]}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
