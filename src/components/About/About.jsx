import React from 'react'
import CommentedHeading from '../CommentedHeading/CommentedHeading'
import ToolIcon from '../ToolsIUse/ToolIcon'
import { HTMLIcon, JSIcon, JSXIcon, TailwindIcon, ReduxIcon, BootstrapIcon, ExpressJSIcon, NodeJSIcon, MongoDBIcon, MySQLIcon } from '../ReactIcons/ReactIcons'
import useTitle from '../../hooks/useTitle'

function FunctionHeading({ title, subTitle, children }) {

  return (
    <div className='my-4 flex flex-col gap-4 '>
      <h1 className='text-xl text-yellow-500'>
        <span className='text-blue-600'>function </span>
        {title}(<span className='px-1 text-gray-500'>{subTitle}</span>) &#123;
      </h1>

      <div className='px-4 border-l border-neutral-400 '>
        <span className='text-purple-500'>return</span> (
        <div className='py-4'>
          {children}
        </div>
        )
      </div>
      <span className='text-yellow-500 text-xl'>&#125;;</span>
    </div>
  )
}


export default function About() {
  useTitle("About")
  return (
    <section className='text-neutral-100 min-h-screen  w-full flex flex-col justify-start items-center'>
      <div className='font-roboto  max-w-[80%]'>

        <div className='min-h-screen flex justify-center  flex-col max-w-[80%]'>
          <CommentedHeading title="Who am I? ( About me )" style="text-2xl" />
          <div className='m-4'>
            <p className='tracking-widest text-justify font-extralight space-x-4 leading-10'>I am a web developer, I work with HTML, CSS, Bootstrap, Tailwind,
              JavaScript(JS), ReactJS, NodeJS, ExpressJS, MongoDB, and MySQL.
            </p>
          </div>
        </div>


        <div className='my-20 max-w-[85%]'>
          <CommentedHeading title={"Tools used in my projects :"} style={"text-lg"} />
          <FunctionHeading title={"Tools_Used"} subTitle={"in_projects"}>
            <div className='grid grid-cols-3 gap-3 px-4'>
              <ToolIcon name={"JavaScript (ES6)"} icon={<JSIcon />} />
              <ToolIcon name={"React"} icon={<JSXIcon />} />
              <ToolIcon name={"Tailwind"} icon={<TailwindIcon />} />
              <ToolIcon name={"Redux"} icon={<ReduxIcon />} />
              <ToolIcon name={"Bootstrap"} icon={<BootstrapIcon />} />
              <ToolIcon name={"NodeJS"} icon={<NodeJSIcon />} />
              <ToolIcon name={"Express"} icon={<ExpressJSIcon />} />
              <ToolIcon name={"Mongo"} icon={<MongoDBIcon />} />
              <ToolIcon name={"MySQL"} icon={<MySQLIcon />} />
            </div>
          </FunctionHeading>
        </div>
      </div>
    </section>
  )
}
