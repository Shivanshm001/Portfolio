import React from 'react'
import About from '../About/About';
import { Link, useNavigate } from 'react-router-dom';
import { setActiveTab } from '../../redux/topbar/topbarActions';
import { useDispatch } from 'react-redux';
import CommentedHeading from '../CommentedHeading/CommentedHeading';
import DarkButton from '../DarkButton/DarkButton';
import useTitle from '../../hooks/useTitle';
import { DownIcon } from '../ReactIcons/ReactIcons';
import { IconContext } from 'react-icons/lib';

export default function Home() {
  useTitle();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className='bg-zinc-800 min-h-screen'>
      <section className='text-neutral-100 min-h-[50vh] w-full flex flex-col justify-center items-center'>
        <div className='font-roboto  max-w-[80%] sm:my-20'>
          <div className='flex flex-col justify-center items-center gap-4'>
            <h2 className='text-lg'>Hii, I am</h2>
            <h1 className='text-4xl md:text-6xl font-light text-center animate-pulse' >Shivansh Mishra</h1>
            <hr className='bg-neutral-300 w-[80%]' />
          </div>
        </div>

        <div id='viewProjects'>
          <Link to={"/projects"} className=''>
            <DarkButton disabled={false} handleClick={() => dispatch(setActiveTab("/projects"))}>
              <div className='text-xl'>
                <span className='text-yellow-400'>Checkout_my_projects</span>
                <span>()</span>
              </div>
            </DarkButton>
          </Link>
        </div>
      </section>

      <section id='about' className=''>
        <About />
      </section>
      <section className='text-neutral-100 min-h-screen  w-full flex flex-col justify-start items-center' id='contact'>
        <div className='font-roboto  max-w-[80%]'>

          <div className='w-full flex flex-col'>
            <div className='min-h-screen flex justify-center  flex-col'>

              <CommentedHeading title="Get in touch (Contact me)" style="text-base text-2xl" />

              <div className='m-4'>
                <p className='tracking-widest text-justify font-extralight space-x-4 text-sm sm:text-base leading-10'>
                  I would love to hear from you and discuss any opportunities, collaborations, or projects you have in mind. Whether you have a question, feedback, or simply want to connect, please don't hesitate to reach out.
                </p>
              </div>


              <div className='px-4 my-6'>
                <Link to={"/contact"}>
                  <DarkButton disabled={false} handleClick={() => dispatch(setActiveTab("/contact"))}>
                    <span className='text-yellow-400 text-lg'>Contact<span className='text-neutral-300'>()</span></span>
                  </DarkButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
