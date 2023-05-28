import React from 'react'

import CommentedHeading from '../CommentedHeading/CommentedHeading';
import Project from './Project/Project';
import projectData from './Project/projectData';


export default function Projects() {
    return (
        <>
            <section id='projects' className='text-neutral-100 min-h-screen  w-full flex flex-col justify-start items-center'>
                <div className='font-roboto  max-w-[80%]'>

                    <div className='min-h-screen flex justify-evenly  flex-col '>

                        <div className='mb-20'>
                            <CommentedHeading title="Projects" style="text-2xl" />
                        </div>
                        <div className='flex flex-col gap-20'>

                            {
                                projectData.map((project, index) => {
                                    console.log(project);
                                    return <Project key={index} title={project.title} startYear={project.startYear} endYear={project.endYear} image={project.imageLink} link={project.websiteLink} details={project.details} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
